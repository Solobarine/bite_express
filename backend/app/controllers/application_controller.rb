class ApplicationController < ActionController::Base
  include ApplicationHelper
  include Pundit::Authorization

  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  # Rescue from unauthorized access
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def authenticate
    token = request.headers['Authorization']&.split(' ')&.last
    payload = decode_token(token)
    # @current_entity = nil

    if payload.nil?
      render json: { error: 'Unauthorized' }, status: :unauthorized
    elsif payload['type'] === 'user'
      @current_user = User.find(payload['user_id'])
      @current_entity = @current_user
    elsif payload['type'] === 'restaurant'
      @current_restaurant = Restaurant.find(payload['restaurant_id'])
      @current_entity = @current_restaurant
    end
  end

  def authorize_admin
    return unless !@current_user || !@current_user.admin?

    render json: { error: 'Unauthorized' }, status: :unauthorized
  end

  def pundit_user
    @current_entity
  end

  private

  def user_not_authorized
    render json: { error: 'You are not authorized to perform this action.' }, status: :unauthorized
  end
end
