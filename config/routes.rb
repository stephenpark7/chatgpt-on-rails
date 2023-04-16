Rails.application.routes.draw do
  post 'messages', to: 'public#send_message'
  root 'public#index'
end
