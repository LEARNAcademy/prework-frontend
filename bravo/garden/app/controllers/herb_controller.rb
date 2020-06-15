class HerbController < ApplicationController

  def index
    @herbs = Herb.all
  end

  def show
    @herb = Herb.find(params[:id])
  end

  def new
  end

  def create
    @herb = Herb.create! herb_params
    if @herb.valid?
      redirect_to all_herbs_path
    else
      render action: :new
    end
  end

  private
  def herb_params
    params.require(:herb).permit(:name, :is_watered)
  end

end
