class SessionsController < ApplicationController
    #log in
    def create 
        
    end
    #log out
    def destroy 
        session.clear
    end
end
