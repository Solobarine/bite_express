module ApplicationHelper
  def decode_token(token)
    JWT.decode(token, ENV['APP_SECRET_KEY'])[0]

  rescue JWT::DecodeError
    nil
  end
end
