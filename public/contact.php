<?php
    // session_start();
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $Name = $_POST['name'];
    $Emails = $_POST['email'];
    $Subject = $_POST['subject'];
    $Message = $_POST['message'];

    echo "Name: " . $Name . '<br>';
    echo "Email: " . $Emails . '<br>';
    echo "Subject: " . $Subject . '<br>';
    echo "Message: " . $Message . '<br>';

    // configure
    $okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
    $errorMessage = 'There was an error while submitting the form. Please try again later';

    // Let's send the email
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/phpmailer/phpmailer/src/Exception.php';
    require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
    require 'vendor/phpmailer/phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'mail.grinfotech.com';   
        $mail->SMTPAuth = true; 
        $mail->Username = 'jayachandran@grinfotech.com';
        $mail->Password = 'Bgt56yhN@';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Recipients
        $mail->setFrom($Emails);
        $mail->addAddress($Emails);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New message from contact form';
        $mail->Body = "
        <p><b>Name :</b> " . $Name . "</p>
        <p><b>Email :</b> " . $Emails . "</p>
        <p><b>Message :</b> " . $Message . " </p>";

        $mail->send();

        
        // $_SESSION['messege'] = $okMessage;

        echo 'Contact form successfully submitted. Thank you, I will get back to you soon!';
        // header('Location: index.php');
        exit();
    } catch (Exception $e) {
        echo 'There was an error while submitting the form. Please try again later';
        
    }
?>


