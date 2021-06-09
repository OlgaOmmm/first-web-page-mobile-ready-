var dampc = {}

dampc.galleryThumbs = document.getElementById('GalleryGroup')
dampc.galleryFullsize = document.getElementById('GalleryFullsize')

dampc.subscriptionForm = document.getElementById('SubscriptionForm')
dampc.subscriptionBT = document.getElementById('SubscriptionBT')
dampc.subscriptionInputEmail = document.getElementById('SubscriptionEmail')
dampc.subscriptionCaptchaIsValidLabel = document.getElementById('SubscriptionCaptchaIsValidLabel')

dampc.feedbackForm = document.getElementById('FeedbackForm')
dampc.feedbackBT = document.getElementById('FeedbackBT')
dampc.feedbackTextarea = document.getElementById('FeedbackMessage')
dampc.feedbackInputName = document.getElementById('FeedbackName')
dampc.feedbackInputEmail = document.getElementById('FeedbackEmail')


dampc.captchaRefreshBT = document.getElementById('CaptchaRefreshBT')
dampc.captchaValidationBT = document.getElementById('CaptchaValidationBT')
dampc.subscriptionCaptchaSection = document.getElementById('SubscriptionCaptchaSection')
dampc.captchaUserInput = document.getElementById('CaptchaUserInput')

//-----------------functions//-----------------

dampc.changeColorInputOnClick = function(node) {
    node.placeholder = ''
    dampc.feedbackTextarea.style.backgroundColor = '#fff'
    dampc.feedbackInputName.style.backgroundColor = '#fff'
    dampc.feedbackInputEmail.style.backgroundColor = '#fff'
    node.style.backgroundColor = '#fde6ea'
};

dampc.isValidEmail = function(email) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
	return pattern.test(email)
};

dampc.isEmptyInput = function(content) {
	if(content.value === '') {
		return true
	} else {
		return false
	}
};

dampc.setInvalidInput = function(node) {
	node.style.border = '2px solid red'
};
dampc.setValidInput = function(node) {
	node.style.border = '2px solid grey'
};

////-----------------input cleaning

dampc.captchaUserInput.value = '' 
dampc.setValidInput(dampc.captchaUserInput)
dampc.setValidInput(dampc.subscriptionInputEmail)

//-----------------CAPTCHA functions//-----------------

dampc.generateCaptcha = function() {
	dampc.setValidInput(dampc.captchaUserInput)
	dampc.captchaUserInput.value = ''
	
	dampc.number1 = Math.ceil(Math.random() * 9)+ ''
	dampc.number2 = Math.ceil(Math.random() * 9)+ ''
	dampc.number3 = Math.ceil(Math.random() * 9)+ ''
	dampc.number4 = Math.ceil(Math.random() * 9)+ ''
	dampc.number5 = Math.ceil(Math.random() * 9)+ ''
	dampc.number6 = Math.ceil(Math.random() * 9)+ ''
	dampc.number7 = Math.ceil(Math.random() * 9)+ ''

	dampc.captchaGenerated = dampc.number1 + ' ' + dampc.number2 + ' ' + dampc.number3 + ' ' + dampc.number4 + ' ' + dampc.number5 + ' '+ dampc.number6 + ' ' + dampc.number7
	document.getElementById('CaptchaGenerated').value = dampc.captchaGenerated
}

dampc.removeSpaces = function(string) {
	return string.split(' ').join('')
}

dampc.isValidCaptcha = function() {
	dampc.captchaGeneratedValue = dampc.removeSpaces(document.getElementById('CaptchaGenerated').value)
	dampc.captchaUserInputValue = dampc.removeSpaces(document.getElementById('CaptchaUserInput').value)
 
	if ((dampc.captchaGeneratedValue == dampc.captchaUserInputValue)&&(dampc.captchaUserInputValue != '')) {
			dampc.subscriptionCaptchaIsValidLabel.style.display = 'flex'
			dampc.subscriptionCaptchaSection.style.display = 'none'
			dampc.captchaUserInputValue = ''
			dampc.captchaGeneratedValue = ''
			dampc.setValidInput(dampc.captchaUserInput)
		return true
	} else {
		dampc.setInvalidInput(dampc.captchaUserInput)
		return false
	}
}
//-----------------CAPTCHA events//-----------------
dampc.captchaRefreshBT.addEventListener('click', function(event) {
	dampc.generateCaptcha()
});

dampc.captchaValidationBT.addEventListener('click', function(event) {
	dampc.isValidCaptcha()
});

//-----------------Gallery_Section: thumbnails and fullscreen images
dampc.galleryThumbs.addEventListener('click', function(event) {
    dampc.galleryFilename = event.target.src.split('/').pop()
    dampc.galleryFullsize.src = 'img_gallery/fullsize/' + dampc.galleryFilename
    dampc.galleryFullsize.alt = event.target.alt
})

//-----------------Subscription_Section: SubscriptionForm.submit() event; #SubscriptionEmail event

//SubscriptionForm.submit() event:
dampc.subscriptionBT.addEventListener('click', function(event) {
	if(dampc.isValidEmail(dampc.subscriptionInputEmail.value)) {
		dampc.setValidInput(dampc.subscriptionInputEmail)
		if(dampc.isValidCaptcha() === true){	
			dampc.subscriptionCaptchaIsValidLabel.style.display = 'none'
			dampc.subscriptionForm.submit()
		} else {
			dampc.generateCaptcha()
			dampc.subscriptionCaptchaSection.style.display = 'block'
		}
	} else {
		dampc.setInvalidInput(dampc.subscriptionInputEmail)
		dampc.subscriptionInputEmail.value = ''
		dampc.subscriptionInputEmail.placeholder = 'Invalid email'
	}
});

//#SubscriptionEmail event
dampc.subscriptionInputEmail.title = 'Please input your email to get our news'
dampc.subscriptionInputEmail.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.subscriptionInputEmail)})

//-----------------Feedback_Section: FeedbackForm.submit() event; .FeedbackTextInputGroup event

//FeedbackForm.submit() event:
dampc.feedbackBT.addEventListener('click', function(event) {
	dampc.feedbackInputsAreValid = 0
	if(dampc.isEmptyInput(dampc.feedbackTextarea)) {
		dampc.setInvalidInput(dampc.feedbackTextarea)
		dampc.feedbackTextarea.placeholder = 'Enter your message'
	} else {
		dampc.setValidInput(dampc.feedbackTextarea)
		dampc.feedbackInputsAreValid++
	}
	if(dampc.isEmptyInput(dampc.feedbackInputName)) {
		dampc.setInvalidInput(dampc.feedbackInputName)
		dampc.feedbackInputName.placeholder = 'Name required'
	} else {
		dampc.setValidInput(dampc.feedbackInputName)
		dampc.feedbackInputsAreValid++
	}
	if(dampc.isEmptyInput(dampc.feedbackInputEmail)) {
		dampc.setInvalidInput(dampc.feedbackInputEmail)
		dampc.feedbackInputEmail.placeholder = 'Email required'
	} else {
		if(dampc.isValidEmail(dampc.feedbackInputEmail.value)) {
			dampc.setValidInput(dampc.feedbackInputEmail)
			dampc.feedbackInputsAreValid++
		} else {
			dampc.setInvalidInput(dampc.feedbackInputEmail)
			dampc.feedbackInputEmail.value = ''
			dampc.feedbackInputEmail.placeholder = 'Invalid email'
		}
	}
	if(dampc.feedbackInputsAreValid === 3) {
		dampc.feedbackForm.submit()
	}
})

//.FeedbackTextInputGroup event:
dampc.feedbackTextarea.title = 'Please input your message'
dampc.feedbackInputName.title = 'Please input your name'
dampc.feedbackInputEmail.title = 'Please input your email'

dampc.feedbackTextarea.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackTextarea)})
dampc.feedbackInputName.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackInputName)})
dampc.feedbackInputEmail.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackInputEmail)})
