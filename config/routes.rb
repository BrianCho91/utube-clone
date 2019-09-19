Rails.application.routes.draw do
  
  namespace :api, default: { format: JSON } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show, :update, :create, :destroy]
    resources :comments, only: [:index, :show, :create, :update, :destroy]
    resources :likes, only: [:create, :update, :destroy]
    resources :subscriptions, only: [:create, :destroy]
  end

  root to: 'static_pages#root'

end
