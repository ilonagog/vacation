class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image, :description, :price
end
