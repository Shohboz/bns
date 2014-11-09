class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  #attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.

  def headers
  {
    :subject => "Важно! Сообщение от пользователя!",
    :to => ENV["EMAILTO"],
    :from => %("#{name}" <#{Rails.application.config.action_mailer.smtp_settings[:user_name]}>)
  }
  end
end