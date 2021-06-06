<html>
<head>
	<title>Subscription success</title>
	<link rel="stylesheet" href="../css/main.css">
</head>

<body>
<h2>Congratulations, <span class="ColoredText_Sub">you are subscribed!</span></h2>

<CFQUERY DATASOURCE="dampc2021" NAME="subscribe">
	INSERT INTO `subscribet` (`email`) VALUE (<cfqueryparam value="#FORM.SubscriptionEmail#" cfsqltype="cf_sql_varchar">);
</CFQUERY>

<a href="../index.html" class="BackBT">BACK</a>

</body>
</html>
