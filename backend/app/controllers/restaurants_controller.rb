class RestaurantsController < ApplicationController
  before_action :authenticate

  def current_restaurant
    render json: @current_restaurant, status: :ok
  end
end
