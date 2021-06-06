var dampc = {}

dampc.galleryThumbs = document.getElementById('GalleryGroup')
dampc.galleryFullsize = document.getElementById('GalleryFullsize')

dampc.subscriptionForm = document.getElementById('SubscriptionForm')
dampc.subscriptionBT = document.getElementById('SubscriptionBT')
dampc.subscriptionInputEmail = document.getElementById('SubscriptionEmail')

dampc.feedbackForm = document.getElementById('FeedbackForm')
dampc.feedbackBT = document.getElementById('FeedbackBT')
dampc.feedbackTextarea = document.getElementById('FeedbackMessage')
dampc.feedbackInputName = document.getElementById('FeedbackName')
dampc.feedbackInputEmail = document.getElementById('FeedbackEmail')

dampc.changeColorInputOnClick = function(node) {
    node.placeholder = ''
    dampc.feedbackTextarea.style.backgroundColor = '#fff'
    dampc.feedbackInputName.style.backgroundColor = '#fff'
    dampc.feedbackInputEmail.style.backgroundColor = '#fff'
    node.style.backgroundColor = '#fde6ea'
};

dampc.isValidEmail = function(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //console.log(pattern.test(email));
	return pattern.test(email);
};

dampc.isEmptyInput = function(content) {
	if(content.value === "") {
		return true;
	} else {
		return false;
	}
};

dampc.setInvalidInput = function(node) {
	node.style.border = '2px solid red'
};

dampc.setValidInput = function(node) {
	node.style.border = '2px solid grey'
};

//-----------------Gallery_Section: thumbnails and fullscreen images
dampc.galleryThumbs.addEventListener("click", function(event) {
    dampc.galleryFilename = event.target.src.split("/").pop()
    dampc.galleryFullsize.src = "img_gallery/fullsize/" + dampc.galleryFilename
    dampc.galleryFullsize.alt = event.target.alt
})

//-----------------Subscription_Section: SubscriptionForm.submit() event; #SubscriptionEmail event

//SubscriptionForm.submit() event:
dampc.subscriptionBT.addEventListener('click', function(event) {
	if(dampc.isValidEmail(dampc.subscriptionInputEmail.value)) {
		dampc.setValidInput(dampc.subscriptionInputEmail);
		dampc.subscriptionForm.submit();
	} 
	else {
		dampc.setInvalidInput(dampc.subscriptionInputEmail);
		dampc.subscriptionInputEmail.value = "";
		dampc.subscriptionInputEmail.placeholder = "Invalid email";
	}
});

//#SubscriptionEmail event
dampc.subscriptionInputEmail.title = 'Please input your email to get our news'
dampc.subscriptionInputEmail.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.subscriptionInputEmail)})

//-----------------Feedback_Section: FeedbackForm.submit() event; .FeedbackTextInputGroup event

//FeedbackForm.submit() event:
dampc.feedbackBT.addEventListener('click', function(event) {
	dampc.feedbackInputsAreValid = 0;
	if(dampc.isEmptyInput(dampc.feedbackTextarea)) {
		dampc.setInvalidInput(dampc.feedbackTextarea);
		dampc.feedbackTextarea.placeholder = "Enter your message";
	} else {
		dampc.setValidInput(dampc.feedbackTextarea);
		dampc.feedbackInputsAreValid++;
	}
	if(dampc.isEmptyInput(dampc.feedbackInputName)) {
		dampc.setInvalidInput(dampc.feedbackInputName);
		dampc.feedbackInputName.placeholder = "Name required";
	} else {
		dampc.setValidInput(dampc.feedbackInputName);
		dampc.feedbackInputsAreValid++;
	}
	if(dampc.isEmptyInput(dampc.feedbackInputEmail)) {
		dampc.setInvalidInput(dampc.feedbackInputEmail);
		dampc.feedbackInputEmail.placeholder = "Email required";
	} else {
		if(dampc.isValidEmail(dampc.feedbackInputEmail.value)) {
			dampc.setValidInput(dampc.feedbackInputEmail);
			dampc.feedbackInputsAreValid++;
		} else {
			dampc.setInvalidInput(dampc.feedbackInputEmail);
			dampc.feedbackInputEmail.value = "";
			dampc.feedbackInputEmail.placeholder = "Invalid email";
		}
	}
	if(dampc.feedbackInputsAreValid === 3) {
		dampc.feedbackForm.submit();
	}
})

//.FeedbackTextInputGroup event:
dampc.feedbackTextarea.title = 'Please input your message'
dampc.feedbackInputName.title = 'Please input your name'
dampc.feedbackInputEmail.title = 'Please input your email'

dampc.feedbackTextarea.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackTextarea)})
dampc.feedbackInputName.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackInputName)})
dampc.feedbackInputEmail.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackInputEmail)})

//-----------------footer: dynamic year-----------------
document.getElementById("FooterYear_Sub").innerHTML = new Date().getFullYear();
