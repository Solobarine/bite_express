class RestaurantsController < ApplicationController
  before_action :authenticate
  before_action :set_restaurant, only: %i[update like_restaurant]

  def current_restaurant
    render json: @current_restaurant, status: :ok
  end

  def update
    if @restaurant.update(update_params.except(:categories))

      categories = update_params[:categories] || []

      categories.each do |cat|
        category = Category.find_by(name: cat)
        @restaurant.categories << category unless restaurant.categories.include?(category)
      end

      if @restaurant.save
        render json: { message: 'Message updated successfully', restaurant: }, status: :ok
      else
        render json: @restaurant.errors, status: :unprocessable_entity
      end
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  def like_restaurant
    @like = @restaurant.likes.create(user: @current_user)
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def update_params
    params.require(:restaurant).permit(:name, :location, :address, :state, :country, :phone_no, :description,
                                       categories: %i[days times], opening_times: %i[days times])
  end
end
