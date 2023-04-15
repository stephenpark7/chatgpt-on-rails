class PublicController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.order("id ASC")
    @user = User.first
    @chatgpt = User.second
  end

  def messages
    message = params[:message][:content].gsub(/^\n+/, '') # Remove leading newlines
    head 400 && return if message.nil?
    # SendMessageJob.perform_later(content)
    Message.create!(user: User.first, content: message) # User

    prompt = 'You are ChatGPT. '
    Message.all.each do |m|
      if m.user == User.first
        prompt += 'Person: '
      else
        prompt += ''
      end
      prompt += m.content + '\n'
    end
    prompt += 'ChatGPT: '
    response = ChatGPT.send_message(prompt)
    Message.create!(user: User.second, content: response) # ChatGPT
    render json: { message: response }
  end
end
