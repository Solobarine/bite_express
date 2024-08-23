class Restaurant::RegistrationController < ApplicationController
  before_action :set_restaurant, only: :destroy

  def create
    restaurant = Restaurant.new(restaurant_params)

    if restaurant.save
      render json: { message: 'Restaurant created successfully. Please log in' }, status: :created
    else
      render json: restaurant.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if restaurant.destroy
      render json: { message: 'Restaurant deleted successfully' }, status: :ok
    else
      render json: { message: 'Unable to Delete Restaurant' }, status: :unprocessable_entity
    end
  end

  private

  def set_restaurant
    restaurant = Restaurant.find(params[:id])
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :email, :password, :password_confirmation, :phone_no, :address, :state, :country)
  end
end
