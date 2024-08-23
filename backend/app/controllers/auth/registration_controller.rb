class Auth::RegistrationController < ApplicationController
  def create
    user = User.new(user_params.merge(role: :user))

    if user.save
      render json: { message: 'User created sucessfully. Please log in' }, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
