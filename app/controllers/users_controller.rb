class UsersController < ApplicationController
    #signup
    def create 
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
end
