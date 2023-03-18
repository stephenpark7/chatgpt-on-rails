class User < ApplicationRecord
  has_many :messages

  def name
    self == User.first ? 'You' : 'ChatGPT'
  end

end
