class ChatGPT
  include Singleton

  @model = 'gpt-3.5-turbo'

  OpenAI.configure do |config|
    config.access_token = ENV.fetch('OPENAI_API_KEY')
    @client = OpenAI::Client.new
  end

  def self.get_client
    @client
  end

  def self.send_message(content)
    response = @client.chat(
      parameters: {
          model: @model,
          messages: [{ role: "user", content: content }],
          temperature: 0.7,
      })
    error = response['error']
    raise error['message'] if error
    response.dig("choices", 0, "message", "content")
  end
end
