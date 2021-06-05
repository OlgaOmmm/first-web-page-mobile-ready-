var dampc = {}

dampc.galleryThumbs = document.getElementById('GalleryGroup')
dampc.galleryFullsize = document.getElementById('GalleryFullsize')

dampc.subscriptionForm = document.getElementById('SubscriptionForm')
dampc.subscriptionBT = document.getElementById('SubscriptionBT')
dampc.subscriptionInputEmail = document.getElementById('SubscriptionEmail')

dampc.feedbackForm = document.getElementById('FeedbackForm')
dampc.feedbackBT = document.getElementById('FeedbackBT')
dampc.feedbackTextList = document.querySelectorAll('.FeedbackTextInputGroup')
dampc.feedbackTextarea = dampc.feedbackTextList[0].querySelector('textarea')
dampc.feedbackInputName = dampc.feedbackTextList[1].querySelector('input')
dampc.feedbackInputEmail = dampc.feedbackTextList[2].querySelector('input')

dampc.changeColorInputOnClick = function(node) {
    node.placeholder = ''
    dampc.feedbackTextarea.style.backgroundColor = '#fff'
    dampc.feedbackInputName.style.backgroundColor = '#fff'
    dampc.feedbackInputEmail.style.backgroundColor = '#fff'
    node.style.backgroundColor = '#fde6ea'
};

//-----------------Gallery_Section: thumbnails and fullscreen images
dampc.galleryThumbs.addEventListener("click", function(event) {
    dampc.galleryFilename = event.target.src.split("/").pop()
    dampc.galleryFullsize.src = "img_gallery/fullsize/" + dampc.galleryFilename
    dampc.galleryFullsize.alt = event.target.alt
})

//-----------------Subscription_Section: SubscriptionForm.submit() event; #SubscriptionEmail event

//SubscriptionForm.submit() event:
dampc.subscriptionBT.addEventListener('click', function(event) {dampc.subscriptionForm.submit()})

//#SubscriptionEmail event
dampc.subscriptionInputEmail.title = 'Please input your email to get our news'
dampc.subscriptionInputEmail.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.subscriptionInputEmail)})

//-----------------Feedback_Section: FeedbackForm.submit() event; .FeedbackTextInputGroup event

//FeedbackForm.submit() event:
dampc.feedbackBT.addEventListener('click', function(event) {dampc.feedbackForm.submit()})

//.FeedbackTextInputGroup event:
dampc.feedbackTextarea.title = 'Please input your message'
dampc.feedbackInputName.title = 'Please input your name'
dampc.feedbackInputEmail.title = 'Please input your email'

dampc.feedbackTextarea.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackTextarea)})
dampc.feedbackInputName.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackInputName)})
dampc.feedbackInputEmail.addEventListener('click',  function(event) {dampc.changeColorInputOnClick (dampc.feedbackInputEmail)})

//-----------------footer: dynamic year-----------------
document.getElementById("FooterYear_Sub").innerHTML = new Date().getFullYear();


