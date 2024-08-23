Rails.application.routes.draw do
  resources :orders
  resources :categories, only: %i[index create show update delete]
  namespace :restaurant do
    post 'registration/create'
    delete 'registration/destroy'
    post 'session/create'
    delete 'session/destroy'
  end
  root to: 'home#index'

  namespace :auth do
    post 'registration/create'
    post 'session/create'
    get 'session/destroy'
  end

  get '/user', to: 'users#current_user'
  get '/restaurant', to: 'restaurants#current_restaurant'

  resources :addresses, only: %i[create update index destroy]
  resources :meals, only: %i[index create update show destroy] do
    resource :likes, only: %i[create delete]
  end
  resources :reviews, only: %i[create update destroy] do
    resource :likes, only: %i[create destroy]
  end

  get '/restaurants/discounted', to: 'restaurants#discounted'
  get '/restaurants/recommended', to: 'restaurants#recommended'
  get '/restaurants/:restaurant_id/info', to: 'restaurants#info'
  get '/restaurants/:restaurant_id/reviews', to: 'reviews#index'
  resources :restaurants, only: %i[index show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  #
end
