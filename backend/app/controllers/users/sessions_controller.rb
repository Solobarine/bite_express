# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def destroy
    @authenticated = true
    super
  end

  private

  def verify_signed_out_user
    current_user
    super
  end

  def respond_to_on_destroy
    if @authenticated && current_user.nil?
      # current_user is logged out successfully
      render status: :ok
    else
      # current_user is not logged out successfully
      render status: :unprocessable_entity
    end
  end

  def respond_with(resource, _opts = {})
    if resource
      # current_user is logged in successfully
      render json: {
        user: current_user.as_json(except: :jti)
      }, status: :ok
    else
      # current_user is not logged in successfully
      render json: {
        messages: ['Invalid Email or Password.']
      }, status: :unprocessable_entity
    end
  end
end
