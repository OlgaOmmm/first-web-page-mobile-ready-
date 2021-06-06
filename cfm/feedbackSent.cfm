<html>
<head>
	<title>Feedback sent</title>
	<link rel="stylesheet" href="../css/main.css">
</head>

<body>
<h2>Don't worry, we will <span class="ColoredText_Sub">contact you</span> soon!</h2>

<CFQUERY DATASOURCE="dampc2021" NAME="feedback">
	INSERT INTO `feedbackt` (`username`, `email`, `message`) 
		VALUES (<cfqueryparam value="#FORM.FeedbackName#" cfsqltype="cf_sql_varchar">, 
		<cfqueryparam value="#FORM.FeedbackEmail#" cfsqltype="cf_sql_varchar">, 
		<cfqueryparam value="#FORM.FeedbackMessage#" cfsqltype="cf_sql_varchar">);
</CFQUERY>

<a href="../index.html" class="BackBT">BACK</a>

</body>
</html>
