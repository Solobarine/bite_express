class Auth::SessionController < ApplicationController
  def create
    user = User.find_by email: user_params[:email]

    if user && user.authenticate(user_params[:password])
      expiration_time = Time.now.to_i + (7200 * 3)

      payload = {
        user_id: user.id,
        type: 'user',
        exp: expiration_time
      }

      token = JWT.encode(payload, ENV['APP_SECRET_KEY'])
      render json: { message: 'Logged in successfully', token: }, status: :ok
    else
      render json: { message: 'Invalid Email or Password', user: }, status: :unauthorized
    end
  end

  def destroy
    token = extract_token_from_request
    if token
      begin
        payload, = JWT.decode(token, ENV['APP_SECRET_KEY'])

        payload['exp'] = Time.now.to_i
        new_token = JWT.encode(payload, ENV['APP_SECRET_KEY'])

        render json: { message: 'Logged out successfully' }
      rescue JWT::DecodeError
        render json: { message: 'Unauthorized' }, status: :unauthorized
      end
    else
      render json: { message: 'No token found' }, status: :unprocessable_entity
    end
  end

  private

  def extract_token_from_request
    request.headers['Authorization']&.split&.last
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
