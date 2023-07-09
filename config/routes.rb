Rails.application.routes.draw do

  namespace :api do
    post "messages", to: "public#send_message"
  end

  get "/*path", to: "public#index"

  root "public#index"
  
end
