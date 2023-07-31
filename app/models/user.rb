class User < ApplicationRecord
    has_many :reviews
    has_many :places, through: :reviews

    has_secure_password
    validates :username, :password, presence: true
end
