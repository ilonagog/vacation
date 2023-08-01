class ReviewsController < ApplicationController
    before_action :authorize
    def index
        reviews = current_user.reviews
        render json: reviews
    end
    def create
        review = current_user.reviews.create(review_params)
        if review.valid?
            render json: review
            else
                render json: {errors: review.errors.full_messages}, status: :empty_entiry
    end
    def show
        review = current_user.reviews.find_by(id: params[:id])
        if review
            render json: review
            else
                render json: {error: "Not found"}, status: :unauthorized
            end 
    end

    private
    def current_user
        User.find_by(id: session[:user_id])
    end

    def review_params
        params.permit(:review, :rating)
    end
    def authorize
        return render json: {error: "Not authorize"}, status: :unauthorized unless session.include? :user_id && :place_id
    end
end
