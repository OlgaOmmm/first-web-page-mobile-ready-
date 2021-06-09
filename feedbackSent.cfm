<cfinclude template = "ini.cfm">

<head>
	<title>Feedback sent</title>
	<link rel="stylesheet" href="css/main.css">
</head>

<body>
<h3>Don't worry, we will <span class="ColoredText_Sub">contact you</span> soon!</h3>

<cfquery datasource="dampc2021" NAME="feedback">
	INSERT INTO `feedbackt` (`username`, `email`, `message`) 
		VALUES (<cfqueryparam value="#FORM.FeedbackName#" cfsqltype="cf_sql_varchar">, 
		<cfqueryparam value="#FORM.FeedbackEmail#" cfsqltype="cf_sql_varchar">, 
		<cfqueryparam value="#FORM.FeedbackMessage#" cfsqltype="cf_sql_varchar">);
</cfquery>

<a <cfoutput>href=#homePage#</cfoutput> class="BackBT">BACK</a>

</body>
