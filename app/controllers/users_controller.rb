class UsersController < ApplicationController
    #signup
    def create 
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    #get current user
    def show
       
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user
        else
            render json: {error: "Not Authorized"}
        end
    end
    private 

    def user_params
        params.permit(:username, :password)
    end
end
