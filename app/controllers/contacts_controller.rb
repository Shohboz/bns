class ContactsController < ApplicationController
  def new
  	@contact = Contact.new
  end

  def create
  	@contact = Contact.new(params[:contact])
  	@contact.request = request
  	if @contact.deliver
  		flash.now[:notice] = 'Спасибо за Ваше обращение. Мы свяжемся с Вами в ближайшее время.'
      respond_to do |format|
        format.html { redirect_to root_path, notice: 'Спасибо за Ваше обращение. Мы свяжемся с Вами в ближайшее время.' }
        #format.js
      end
  	else
  		flash.now[:error] = 'Не удалось отправить сообщение.'
  		#render :new
  	end    
  end
end
