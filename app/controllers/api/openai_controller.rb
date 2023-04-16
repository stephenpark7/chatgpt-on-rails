class Api::Openai_controller < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.o rder("id ASC")
    @user = User.first
    @chatgpt = User.second
  end

  def send_message
    message = params[:message][:content]
    message = remove_leading_newlines(message)
    head 400 && return if message.nil?
    # TODO: SendMessageJob.perform_later(content)
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

    if !Config::DUMMY_RESPONSES
      response = ChatGPT.send_message(prompt)
    else 
      response = "DUMMY RESPONSE"
    end

    Message.create!(user: User.second, content: response) # ChatGPT
    render json: { message: response }
  end

private

  def remove_leading_newlines(content)
    content.gsub(/^\n+/, '')
  end
end
