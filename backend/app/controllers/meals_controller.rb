class MealsController < ApplicationController
  def index
    @meals = Meal.all
  end
  def show
  end
  def create
    @meal = Meal.new()
  end

end
