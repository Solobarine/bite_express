class CategoriesController < ApplicationController
  before_action :set_category, only: %i[update destroy]
  before_action :authenticate, except: %i[index sample_categories show]

  def index
    @categories = Category.all

    render json: @categories.map { |cat|
      {
        id: cat.id,
        name: cat.name,
        image: cat.imageUrl
      }
    }
  end

  def create
    @category = Category.new({ name: params[:name] })
    authorize @category, :create?

    @category.image.attach(params[:image])

    if @category.save
      render json: { category: @category, message: 'Category Created Successfully' }, status: :created
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def show
    @category = Category.includes(:restaurants).find_by(name: params[:id])

    restaurants = @category.restaurants.map do |restaurant|
      aggregate = restaurant.total_and_average_ratings
      {
        id: restaurant.id,
        name: restaurant.name,
        image: restaurant.imageUrl,
        total_reviews: aggregate[:total_reviews],
        average_rating: aggregate[:average_rating],
        meals_count: restaurant.meals.count
      }
    end

    render json: { id: @category.id, name: @category.name, restaurants: }, status: :ok
  end

  def sample_categories
    @categories = Category.where('id >= ?', rand(Category.first.id..Category.last.id)).limit(4)

    render json: @categories.map { |cat|
      {
        id: cat.id,
        name: cat.name,
        image: cat.imageUrl
      }
    }
  end

  def update
    authorize @category, :update?

    if @category.update({ name: params[:name] })
      render json: { category: @category, message: 'Category Updated Successfully' }
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @category, :destroy?

    if @categrory.destroy
      render json: { category: @category, message: 'Category Deleted Successfully' }, status: :ok
    else
      render json: { error: 'An Error Occurred' }, status: :unprocessable_entity
    end
  end

  private

  def set_category
    @category = Category.find(params[:id])
  end
end
