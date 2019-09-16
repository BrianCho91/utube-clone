class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save
      render :show
    else 
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update
    @like = Like.find(params[:id])
    if @like.user_id == current_user.id
      if @like.update(like_params)
        render :show
      else
        render json: @like.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if @like.user_id == current_user.id
      @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:liked, :user_id, :likeable_id, :likeable_type)
  end
  
end
