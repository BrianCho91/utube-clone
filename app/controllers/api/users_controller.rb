class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    pic1 = open("https://utube-seed.s3-us-west-1.amazonaws.com/user_pics/user-circle-solid.svg")
    banner1 = open("https://utube-seed.s3-us-west-1.amazonaws.com/user_pics/welcome.jpeg")
    @user.photo.attach(io: pic1, filename: "pic1.svg")
    @user.banner.attach(io: banner1, filename: "banner1.jpeg")

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 404
    end

  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :banner, :photo)
  end
  
end


