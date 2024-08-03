class Users::CurrentUserController < ApplicationController
  def index
    render json: {
      user: current_user.as_json(except: :jti)
    }, status: :ok
  end
end
