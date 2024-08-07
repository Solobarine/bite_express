class UsersController < ApplicationController
  before_action :authenticate

  def current_user
    render json: @current_user, status: :ok
  end
end
