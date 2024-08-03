# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if request.method == 'DELETE'
      # current_user is destroyed successfully
      render status: :ok
    elsif request.method == 'POST' && resource.persisted?
      # current_user is created successfully
      render json: {
        user: current_user.as_json(except: :jti)
      }, status: :ok
    else
      # current_user is not created successfully
      render json: {
        messages: resource.errors.full_messages
      }, status: :unprocessable_entity
    end
  end
end
