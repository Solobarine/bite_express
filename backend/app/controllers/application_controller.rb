class ApplicationController < ActionController::Base
  include ApplicationHelper

  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def authenticate
    token = request.headers['Authorization']&.split(' ')&.last
    payload = decode_token(token)
    if payload.nil?
      render json: { error: 'Unauthorized' }, status: :unauthorized
    elsif payload['type'] === 'user'
      @current_user = User.find(payload['user_id'])
    elsif payload['type'] === 'restaurant'
      @current_restaurant = Restaurant.find(payload['restaurant_id'])
    end
  end

  def authorize_admin
    return unless !@current_user || !@current_user.admin?

    render json: { error: 'Unauthorized' }, status: :unauthorized
  end
end
