class User < ApplicationRecord

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token

  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  has_many :videos
  has_many :comments
  has_many :likes
  has_many :liked_videos, through: :likes
  has_many :liked_comments, through: :likes
  # has_many :subscriptions, foreign_key: :subscriber_id, class_name: :Subscription
  # has_many :subscribees
  # has_many :channels, through: :subscription, source: :channels

  has_many :subscriptions, foreign_key: :subscriber_id

  has_many :subscribers, foreign_key: :subscribee_id, class_name: :Subscription

  has_one_attached :photo
  has_one_attached :banner



end
