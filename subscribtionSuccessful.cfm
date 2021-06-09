<cfinclude template = "ini.cfm">

<head>
	<title>Subscription success</title>
	<link rel="stylesheet" href="css/main.css">
</head>

<body>

<h3>Congratulations, <span class="ColoredText_Sub">you are subscribed!</span></h3>

	
<cfquery datasource="dampc2021" NAME="subscribe">
	INSERT INTO `subscribet` (`email`) VALUE (<cfqueryparam value="#FORM.SubscriptionEmail#" cfsqltype="cf_sql_varchar">);
</cfquery>

	<a <cfoutput>href=#homePage#</cfoutput> class="BackBT">BACK</a>

</body>
