	<?php	
	header('Content-Type: text/html; charset=utf-8');
	function Mailer(
		$mailCus,
		$nameCus,
		$title,
		$content,
		$mailCC = array(),
		$nameCC = array(),
		$sts = 0
		)
	{
		require_once 'mailer/PHPMailerAutoload.php';
		$mail = new PHPMailer();
		$mail->CharSet = "UTF-8";
		$mail->IsSMTP();
		$mail->SMTPDebug  = 0;
		 
		$mail->Debugoutput = "html";
		$mail->Host       = "smtp.gmail.com"; 
		$mail->Port       = 587;
		$mail->SMTPSecure = "tls"; 
// 		$mail->SMTPOptions = array(
// 			'ssl' => array(
// 				'verify_peer' => false,
// 				'verify_peer_name' => false,
// 				'allow_self_signed' => true
// 			)
// 		);
		$mail->SMTPAuth   = true;
		$mail->Username   = "mrshare77@gmail.com";
		$mail->Password   = "spknls12*";

		$mail->SetFrom("mrshare77@gmail.com", "Nguyễn Minh Chí | Sống Xứng Đáng");
		$mail->AddAddress($mailCus, $nameCus);
    if($sts == 1){
      for($i = 0; $i < count($mailCC); $i++){
        $mail->addBCC($mailCC[$i],$nameCC[$i]);
      }
		}
		$mail->Subject = $title;
		$mail->MsgHTML($content);
		$mail->AltBody = "";
		if(!$mail->Send()) {
		  	return "NO";

		} else {
		  	return "YES";
		}
	}

 ?>
