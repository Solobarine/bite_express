class UsersController < ApplicationController
  before_action :authenticate
  before_action :set_user, only: [:update]

  def current_user
    render json: @current_user, status: :ok
  end

  def update
    if user.update(update_params)
      render json: { message: 'User Info updated successfully' }, status: :ok
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def set_user
    user = User.find(params[:id])
  end

  def update_params
    params.require(:user).permit(:first_name, :last_name, :date_of_birth, :gender, :phone_no, :nationality)
  end
end
