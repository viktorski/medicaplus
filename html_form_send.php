<?php

if(isset($_POST['email'])) {
	
	// CHANGE THE TWO LINES BELOW
	$email_to = "info@medicaplus.com.mk";
	
	$email_subject = "Порака од контакт форма";
	
	
	function died($error) {
		// your error code can go here
		echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['first_name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['telephone']) ||
		!isset($_POST['comments'])) {
		died('We are sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$first_name = $_POST['first_name']; // required
	$email_from = $_POST['email']; // required
	$telephone = $_POST['telephone']; // not required
	$comments = $_POST['comments']; // required
	
	$error_message = "";
  
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "Име: ".clean_string($first_name)."\n";
	$email_message .= "E-маил: ".clean_string($email_from)."\n";
	$email_message .= "Телефон: ".clean_string($telephone)."\n";
	$email_message .= "Порака: ".clean_string($comments)."\n";
	
	
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  

}

header('Location: http://medicaplus.com.mk/index-5.html');
exit;
?>