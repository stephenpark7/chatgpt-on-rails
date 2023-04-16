Rails.application.routes.draw do

  namespace :api do
    post 'messages', to: 'public#send_message'
  end

  root 'public#index'
  
end
