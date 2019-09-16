Rails.application.routes.draw do
  
  namespace :api, default: { format: JSON } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show, :create, :destroy]
    resources :comments, only: [:index, :create, :update, :destroy]
  end

  root to: 'static_pages#root'

end
