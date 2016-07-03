<!DOCTYPE html>
<html>
<head>
	<title> Confirm </title>
</head> 
<body>
<?php
	$fname = $_POST['FirstName'];
	$sname = $_POST['LastName'];
	$email = $_POST['Email'];
		echo <center>;
		echo <h3 style='color: #781227; text-align: center;'>Data Recieved</h3>;
		echo <p>First Name:  $fname;
		echo <p>Last Name: $sname </p>;
		echo <p>Email Address: $email </p>;
		echo </center>;
?>
</body>
</html>
