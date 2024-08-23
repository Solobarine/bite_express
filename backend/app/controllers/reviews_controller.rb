class ReviewsController < ApplicationController
  before_action :authenticate
  before_action :set_review, only: %i[show update like_review destroy]

  def index
    #     reviews_data = Review.includes(:user).select(
    #   'reviews.*, AVG(reviews.ratings) OVER () AS average_rating',
    #   'COUNT(reviews.id) OVER () AS total_reviews',
    #   'COUNT(CASE WHEN reviews.ratings = 1 THEN 1 END) OVER () AS ratings_1_count',
    #   'COUNT(CASE WHEN reviews.ratings = 2 THEN 1 END) OVER () AS ratings_2_count',
    #   'COUNT(CASE WHEN reviews.ratings = 3 THEN 1 END) OVER () AS ratings_3_count',
    #   'COUNT(CASE WHEN reviews.ratings = 4 THEN 1 END) OVER () AS ratings_4_count',
    #   'COUNT(CASE WHEN reviews.ratings = 5 THEN 1 END) OVER () AS ratings_5_count',
    #   'users.first_name AS user_first_name',
    #   'users.last_name AS user_last_name'
    # ).joins(:user)
    #  .where(restaurant_id: params[:restaurant_id])
    #  .order(created_at: :desc)
    #
    #     # Calculate rating percentages from the aggregated data
    #     if reviews_data.present?
    #       total_reviews = reviews_data.first.total_reviews.to_f
    #       average_rating = reviews_data.first.average_rating.to_f
    #
    #       ratings_percentage = {
    #         1 => (reviews_data.first.ratings_1_count.to_f / total_reviews) * 100,
    #         2 => (reviews_data.first.ratings_2_count.to_f / total_reviews) * 100,
    #         3 => (reviews_data.first.ratings_3_count.to_f / total_reviews) * 100,
    #         4 => (reviews_data.first.ratings_4_count.to_f / total_reviews) * 100,
    #         5 => (reviews_data.first.ratings_5_count.to_f / total_reviews) * 100
    #       }
    #     else
    #       average_rating = 0.0
    #       ratings_percentage = { 1 => 0, 2 => 0, 3 => 0, 4 => 0, 5 => 0 }
    #     end
    #
    #     render json: {
    #       reviews: reviews_data,
    #       average_rating:,
    #       ratings_percentage:,
    #       total_reviews:
    #     }, status: :ok
    restaurant = Restaurant.includes(reviews: :user).find(params[:restaurant_id])
    agg = restaurant.reviews_aggregation

    reviews = restaurant.reviews.map do |review|
      review.as_json.merge(user_first_name: review.user.first_name, user_last_name: review.user.last_name)
    end

    if restaurant
      render json: {
        reviews:,
        grouped_reviews: agg[:grouped_reviews],
        total_reviews: agg[:total_reviews],
        average_rating: agg[:average_rating]
      }, status: :ok
    else
      render json: null
    end
  end

  def create
    @review = @current_user.build(review_params)
    authorize @review, :create?

    if @review.save
      render json: @review, status: :created
    else
      render @review.errors, status: :unprocessable_entity
    end
  end

  def show; end

  def like_review
    @like = @review.likes.create(user: @current_user)

    if @like.persisted?
      render json: { message: 'Review Liked Successfully' }, status: :created
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  def destroy_like
    @like = @review.likes.include?(user: @current_user)

    @like.destroy if @like

    render json: { message: 'Review Unliked Successfully' }, status: :ok
  end

  def update
    authorize @review, :update?

    if @review.update(review_params)
      render json: { message: 'Review Updated' }, status: :ok
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @review, :destroy?

    if @review.destroy
      render json: { message: 'Review Deleted Successfully', review: @review }, status: :ok
    else
      render json: { error: 'An Error Occurred' }, status: :unprocessable_entity
    end
  end

  private

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:title, :content, :ratings, :restaurant_id)
  end
end
