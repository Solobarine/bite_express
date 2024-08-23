class AddressesController < ApplicationController
  before_action :authenticate

  def index
    @addresses = @current_user.addresses
    render json: @addresses, status: :ok
  end

  def create
    @address = Address.new(post_params.merge(user_id: @current_user.id, is_default: false))

    if @address.save
      render json: { address: @address, message: 'Address Created Successfully' }, status: :created
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  def show
    @address = Address.find(params[:id])

    render json: @address
  end

  def update
    @address = Address.find(params[:id])
    @address.update(post_params)

    if @address.save
      render json: { address: @address, message: 'Address Updated Successfully' }
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  def mark_as_default
    @address = @current_user.addresses.find(params[:id])
    @default_address = @current_user.addresses.is_default

    unless @default_address.nil?
      @default_address.default = false
      @default_address.save
    end

    @address.default = true
    if @address.save
      render json: { message: 'Address marked as Default' }
    else
      render @address.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @address = Address.find(params[:id])
    if @address.destroy
      render json: { message: 'Address Deleted Successfully', address: @address }, status: :ok
    else
      render json: { error: 'An Error Occurred' }, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:address).permit(:name, :address, :state, :zipCode, :country)
  end
end
