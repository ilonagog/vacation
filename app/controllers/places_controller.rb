class PlacesController < ApplicationController
    def index
        places = Place.all
        render json: places
    end

    def show
        place = Place.find_by(id: params[:id])
        render json: place
    end

    def create
      place = Place.create(place_params)
      render json: place
    end

    private

    def place_params
        params.require(:place).permit(:name, :location, :image, :description,:price)
    end
end
