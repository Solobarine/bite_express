class Auth::RegistrationController < ApplicationController
  before_action :set_user, only: [:update]
  def create
    user = User.new(user_params)

    if user.save
      render json: { message: 'User created sucessfully. Please log in' }, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
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

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

  def update_params
    params.require(:user).permit(:first_name, :last_name, :date_of_birth, :gender, :phone_no, :nationality)
  end
end
