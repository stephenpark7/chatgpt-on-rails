Rails.application.routes.draw do

  post 'messages', to: 'public#messages'

  root 'public#index'

end
