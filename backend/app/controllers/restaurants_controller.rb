class RestaurantsController < ApplicationController
  before_action :authenticate
  before_action :set_restaurant, only: %i[update like_restaurant]

  def current_restaurant
    render json: @current_restaurant, status: :ok
  end

  def index
    @restaurants = Restaurant.all

    render json: @restaurants.map { |restaurant|
                   aggregate = restaurant.total_and_average_ratings
                   restaurant.as_json.merge(
                     total_reviews: aggregate[:total_reviews],
                     meals_count: restaurant.meals.count,
                     average_rating: aggregate[:average_rating],
                     image: restaurant.imageUrl
                   )
                 }, status: :ok
  end

  def show
    restaurant = Restaurant.includes(:reviews, :meals).find(params[:id])

    if restaurant
      meals = restaurant.meals.select(:id, :name, :price).map do |meal|
        {
          id: meal.id,
          name: meal.name,
          price: meal.price,
          image: meal.imageUrl
        }
      end

      aggregate = restaurant.total_and_average_ratings

      render json: restaurant.as_json.merge(
        image: restaurant.imageUrl,
        opening_hours: JSON.parse(restaurant.opening_hours),
        location: JSON.parse(restaurant.location),
        average_rating: aggregate[:average_rating],
        total_reviews: aggregate[:total_reviews],
        meals:
      ), status: :ok

    else
      render json: {}, status: :not_found
    end
  end

  def info
    @restaurant = Restaurant.find(params[:restaurant_id])

    if @restaurant
      aggregate = @restaurant.reviews_aggregation
      render json: @restaurant.as_json.merge(opening_hours: JSON.parse(@restaurant.opening_hours),
                                             grouped_reviews: aggregate[:grouped_reviews],
                                             total_reviews: aggregate[:total_reviews],
                                             average_rating: aggregate[:average_rating]),
             status: :ok
    else
      render json: {}, status: :not_found
    end
  end

  def discounted
    restaurants = Restaurant.select(:id, :name).with_attached_image.take(5)
    render json: restaurants.map { |restaurant|
                   aggregate = restaurant.total_and_average_ratings
                   restaurant.as_json.merge(
                     total_reviews: aggregate[:total_reviews],
                     average_rating: aggregate[:average_rating],
                     meals_count: restaurant.meals.count,
                     image: restaurant.imageUrl
                   )
                 }, status: :ok
  end

  def recommended
    restaurants = Restaurant.select(:id, :name).with_attached_image.take(5)
    render json: restaurants.map { |restaurant|
                   aggregate = restaurant.total_and_average_ratings
                   restaurant.as_json.merge(
                     total_reviews: aggregate[:total_reviews],
                     average_rating: aggregate[:average_rating],
                     meals_count: restaurant.meals.count,
                     image: restaurant.imageUrl
                   )
                 }, status: :ok
  end

  def update
    authorize @restaurant, :update?

    if @restaurant.update(update_params.except(:categories))

      categories = update_params[:categories] || []

      categories.each do |cat|
        category = Category.find_by(name: cat)
        @restaurant.categories << category unless restaurant.categories.include?(category)
      end

      @restaurant.image.attach(params[:image])

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
    authorize @restaurant, :like_restaurant?

    @like = @restaurant.likes.create(user: @current_user)
  end

  private

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end

  def update_params
    params.require(:restaurant).permit(:name, :location, :address, :state, :country, :phone_no, :description,
                                       categories: %i[days times], opening_hours: %i[days times])
  end
end
