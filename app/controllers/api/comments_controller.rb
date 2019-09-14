class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
    
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    
    if @comment.user_id == current_user.id 
      # || @comment.user_id == want to allow video uploader to delete too.
      @comment.destroy
      render :show
    else
      render json: ['Only author may can delete comments']
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :video_id)
  end

end
