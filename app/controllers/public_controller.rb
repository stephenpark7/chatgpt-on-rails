class PublicController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.all
    @user = User.first
    @chatgpt = User.second
  end

  def messages
    message = params[:message][:content]
    head 400 && return if message.nil?
    # SendMessageJob.perform_later(content)
    Message.create!(user: User.first, content: message) # User
    response = ChatGPT.send_message(Message.pluck(:content).join(''))
    Message.create!(user: User.second, content: response) # ChatGPT
    render json: { message: response }
  end
end
