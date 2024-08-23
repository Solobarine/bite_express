class OrdersController < ApplicationController
  before_action :authenticate

  def index
    orders = @current_user.orders

    render json: orders, status: :ok
  end

  def create
    created_orders = []
    address = @current_user.addresses.find(order_params[:address_id])
    if address
      orders = order_params[:items].each do |order|
        order = @current_user.orders.build(meal_id: order[:meal_id], quantity: order[:quantity],
                                           address_id: order_params[:address_id])
        created_orders.append(order) if order.save
      end

      if created_orders.length > 0
        render json: { message: 'Orders created successfully' }, status: :ok
      else
        render json: { error: 'An error Occurred' }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Address not Found' }, status: :not_found
    end
  end

  private

  def order_params
    params.require(:orders).permit(:address_id, items: %i[meal_id quantity])
  end
end
