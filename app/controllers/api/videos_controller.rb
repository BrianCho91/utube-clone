class Api::VideosController < ApplicationController

  def index
    query = ('%' + params[:query].downcase + '%')
    @videos = Video.where("lower(videos.title) like ?", query) #look up % interpolating
    render :index
  end

  def show
    @video = Video.find(params[:id])
  end

  def create
    @video = Video.new(video_params)
    @video.user_id = current_user.id

    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end

  end

  def update
    # debugger
    @video = Video.find(params[:id])

    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end

  end

  def destroy
    @video = Video.find(params[:id])

    if @video.destroy
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  private

  def video_params
    params.require(:video).permit(:id, :title, :description, :views, :attached_video, :thumbnail)
  end

end
