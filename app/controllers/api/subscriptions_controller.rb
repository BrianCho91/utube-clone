class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.subscriber_id = current_user.id

    if @subscription.save
      render :show
    else 
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    if @subscription.subscriber_id == current_user.id
      @subscription.destroy
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  private
  def subscription_params
    params.require(:sub).permit(:subscriber_id, :subscribee_id)
  end
end

