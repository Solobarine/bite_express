Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    resource '*',
             headers: :any,
             methods: %i[get post put patch delete options head],
             expose: %w[Authorization]
  end
end
