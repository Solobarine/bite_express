class MealsController < ApplicationController
  before_action :authenticate, only: %i[create update destroy]

  def index
    @meals = Meal.includes(:likes).all
    render json: @meals, status: :ok
  end

  def show
    meal = Meal.includes(:likes).find(params[:id])

    if meal
      render json: meal.as_json.merge(image: meal.imageUrl, ingredients: JSON.parse(meal.ingredients), nutrition: JSON.parse(meal.nutrition)),
             status: :ok
    else
      render json: { error: 'Meal with id not found' }, status: :not_found
    end
  end

  def create
    @meal = Meal.new(post_params.merge(restaurant: @current_restaurant))
    authorize @meal, :create?

    if @meal.save
      render json: @meal, status: :created
    else
      render json: @meal.errors, status: :unprocessable_entity
    end
  end

  def update
    @meal = Meal.find(params[:id])
    authorize @meal, :update?

    if @meal.update(update_params)
      render json: { meal: @meal, message: 'Meal updated successfully' }
    else
      render json: @meal.errors, status: :unprocessable_entity
    end
  end

  def destroy
    meal = Meal.find(params[:id])
    authorize meal, :destroy?

    if meal.destroy
      render json: { message: 'Meal Deleted Successfully', meal: }, status: :ok
    else
      render json: { error: 'An Error Occurred' }, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:meal).permit(:name, :description, :price, :avaliability, ingredients: [:name],
                                                                             nutrition: [:name])
  end

  def update_params
    params.require(:meal).permit(:name, :description, :price, :avaliability, ingredients: [:name], nutrition: [:name])
  end
end
