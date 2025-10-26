<?php
interface INotification{
    function send(){
        echo "";
    }
}

class EmailNotification implements INotification{

}

class SMSNotification implements INotification{
    function send($message)
    {
        echo "";
    }
}


class NotificacionFactory{
    public function createNotification( $type) : Notificacion{
        switch($type){
            case 'email':
                return new EmailNotification();
                break
        }
    }
}

$email = NotificacionFactory::createNotification('email');
$email->send('')


