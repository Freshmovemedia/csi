<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->

<head>

	<?php require_once('inc/head.php'); ?>

	<title>CSI - Contact Us</title>
	<meta name="description" content="">
	<meta name="author" content="">

</head>

<body id="contactx">
	<!-- Highlight for current page -->
	<?php require_once('inc/headernav.php'); ?>
	<script language="JavaScript" src="scripts/gen_validatorv31.js" type="text/javascript"></script>

	<div id="hp_content">

		<div class="hp_content_full">

			<h2>Contact CSI</h2>

			<p>If you would like to discuss your specific job requirements, please speak to a <a href="http://www.csiinc.org/sales/"
					title="Sales Representative Locator">sales representative</a>, otherwise, please feel free to
				contact our main office. We can be reached by: </p>
			<ul class="contact-page">
				<li>Phone: +1 804-744-0700 Ext. 3</li>
				<li>Email: Kevin@csiinc.org </li>
			</ul>

			<div class="contact-form">
				<form method="post" name="contact_form" action="contact-form-handler.php">
					<div class="name-email">
						<p>Your Name:</p>
						<input type="text" name="name">
						<p>Email Address:</p>
						<input type="text" name="email">
					</div>
					<div class="contact-email">
						<p>Message:</p>
						<textarea name="message"></textarea>
						<input type="submit" value="Send Message">
						
						<input type="text" id="website" name="website"/>
					</div>
				</form>
			</div>

		</div>
		<script language="JavaScript">
			var frmvalidator = new Validator("contactform");
			frmvalidator.addValidation("name", "req", "Please provide your name");
			frmvalidator.addValidation("email", "req", "Please provide your email");
			frmvalidator.addValidation("email", "email",
				"Please enter a valid email address");
		</script>
		<?php require_once('inc/footer.php'); ?>

</body>

</html>