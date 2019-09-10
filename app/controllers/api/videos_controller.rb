class Api::VideosController < ApplicationController

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

  def destroy
    @video = Video.find(params[:id])

    if @video.destroy
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end


end
