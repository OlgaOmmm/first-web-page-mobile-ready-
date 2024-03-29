<cfinclude template = "ini.cfm">

<head>
    <meta charset="utf-8">
    <title>Dog&amp;Cat</title>
    <link rel="shortcut icon" href="img/favicon.ico"/>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>

<div class="container">
    <header id="Home" class="HeaderMenu row gy-3">
        <div class="col-lg-1">
            <div class="block">
                <img src="img/logo.png" alt="dog&cat" class="HeaderLogo_Img">
            </div>
        </div>
        <div class="col-lg-5">
            <div class="block">
                <ul class="HeaderNavigation">
                    <li><a href="#WhyChooseUsSection">Why we</a></li>
                    <li><a href="#AboutSection">About</a></li>
                    <li><a href="#GallerySection">Gallery</a></li>
                    <li><a href="#FeedbackSection">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div class="col-lg-5"></div>
        <div class="col-lg-1">
            <div class="block">
                <a href="tel:+380982582808" class="HeaderPhone">call us</a>
            </div>
        </div>
    </header>
</div>

<div class="container">
    <div id="HeaderOffer_row" class="HeaderOffer row gy-3">
        <div class="col-lg-4">
            <div class="block">
                <h3>Find a friend</h3>
                <h1>Dog&amp;Cat</h1>
                <a href="#PetCatalogSection" class="OpenPetCatalogBT">See friends</a>
            </div>
        </div>
        <div class="col-lg"></div>
    </div>
</div>

<div class="container">
    <section id="WhyChooseUsSection" class="WhyChooseUsSection">
        <h2>Why choose our <span class="ColoredText_Sub">dogs &amp; cats</span>?</h2>
        <div id="WhyChooseUs_row" class="WhyChooseUs row gy-3">
            <div class="col-lg-4">
                <div class="block">
                    <img src="img/ico1.png" alt="dog">
                    <div class="WhyChooseUsGroup">
                        <h4>A lot of them</h4>
                        <p>A huge selection of cats and kittens, dogs and puppies</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="block">
                    <img src="img/ico2.png" alt="health">
                    <div class="WhyChooseUsGroup">
                        <h4>There are healthy</h4>
                        <p>We always take care of every pet that is with us</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="block">
                    <img src="img/ico3.png" alt="heart">
                    <div class="WhyChooseUsGroup">
                        <h4>There are loved</h4>
                        <p>We surround our friends with love and attention</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section id="PetCatalogSection" class="PetCatalogSection">
        <h2>Our sweet <span class="ColoredText_Sub">friends</span></h2>
        <div id="PetCatalog_row" class="PetCatalog row">
            <div class="col-4">
                <div class="block">
                    <img src="img/pet1.jpg" alt="cat">
                    <div class="PetInfoGroup">
                        <h4>Vasily</h4>
                        <div class="PriceInfoGroup">
                            <p>&dollar;<span class="PetPrice_Sub">1,500</span></p>
                            <button class="AddToCartBT"><img src="img/add_to_cart.jpg" alt="cart"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="block">
                    <img src="img/pet2.jpg" alt="dog">
                    <div class="PetInfoGroup">
                        <h4>Sharik</h4>
                        <div class="PriceInfoGroup">
                            <p>&dollar;<span class="PetPrice_Sub">5,000</span></p>
                            <button class="AddToCartBT"><img src="img/add_to_cart.jpg" alt="cart"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="block">
                    <img src="img/pet3.jpg" alt="cat">
                    <div class="PetInfoGroup">
                        <h4>Murzik</h4>
                        <div class="PriceInfoGroup">
                            <p>&dollar;<span class="PetPrice_Sub">2,500</span></p>
                            <button class="AddToCartBT"><img src="img/add_to_cart.jpg" alt="cart"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section id="AboutSection" class="AboutSection">
        <h2>About <span class="ColoredText_Sub">Dog&amp;Cat</span></h2>
        <div id="AboutUs1_row" class="AboutUs1 row gy-3">
            <div class="col-lg-4">
                <div class="block">
                    <img src="img/dog.png" alt="dog">
                </div>
            </div>
            <div class="col-lg">
                <div class="block">
                    <h3><span class="ColoredText_Sub">Dog</span> chases</h3>
                    <p>The dog obtains food by driven hunting and does not worry about the smell. Dirty paws after a
                        walk is a headache exclusively for the owner. Dogs are long-distance runners. They are guided by
                        the sense of smell - they search for prey on the trail, as well as hearing and speed. They see
                        in the dark, but the visual picture fades into the background. Their vision is not binocular, as
                        in humans. Each eye shows a separate image, so dogs cannot distinguish fine details. Dogs become
                        attached to the leader, not to the house. The leader knows where and how to get food. Even the
                        most spoiled dog sleeps on the bed not of his own free will, but with the permission of the
                        owner.</p>
                </div>
            </div>
        </div>
        <div id="AboutUs2_row" class="AboutUs2 row">
            <div class="col-lg">
                <div class="block">
                    <h3><span class="ColoredText_Sub">Cat</span> lies in wait</h3>
                    <p>The cat hunts from an ambush, where the main qualities are the surprise of the attack and the
                        accuracy of the jump. In order not to discover itself ahead of time, the cat removes the smell.
                        Cleanliness is the key to her survival. Cats still wash, wash, and lick all day. The coloring of
                        the lurking predators is variegated, camouflage - a play of light and shadow. The claws are
                        retracted to move silently. The jump is short and strong, they do not run long distances, the
                        hunting territory is not too large. At home your pussy will surely try on any box, basin, bag,
                        newspaper that falls on the floor. Vision plays a huge role. For an accurate jump, you need to
                        see the prey. Cat's eyes are adapted to darkness, the pupil dilates, and in the light, it
                        narrows into a slit.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="block">
                    <img src="img/cat.png" alt="cat">
                </div>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <section id="GallerySection" class="GallerySection">
        <h2>Our <span class="ColoredText_Sub">Dogs &amp; Cats</span> are cute</h2>

        <div id="GalleryGroup" class="GalleryGroup row">
              <div class="columns col-sm-6 col-lg-3"> 
                <div class="block">
					<a href="#" class="thumbnail">
						<img src="img_gallery/img0.jpg" alt="dog">
					</a>
					<a href="#" class="thumbnail">
							<img src="img_gallery/img1.jpg" alt="cat">
					</a>
					<a href="#" class="thumbnail">
						<img src="img_gallery/img2.jpg" alt="dog">
					</a>
                    
                </div>
            </div>
              <div class="columns col-sm-6 col-lg-3"> 
                <div class="block">
					<a href="#" class="thumbnail">
						<img src="img_gallery/img3.jpg" alt="cats">
					</a>
					<a href="#" class="thumbnail">
						<img src="img_gallery/img4.jpg" alt="dog">
					</a>
					<a href="#" class="thumbnail">
						<img src="img_gallery/img5.jpg" alt="cat">
					</a>
                    
                </div>
            </div>
             <div class="columns col-sm-6 col-lg-3"> 
                <div class="block">
					<a href="#" class="thumbnail">
						<img src="img_gallery/img6.jpg" alt="dog">
					</a>
					<a href="#" class="thumbnail">
						<img src="img_gallery/img7.jpg" alt="cat">
					</a>
					<a href="#" class="thumbnail">
						<img src="img_gallery/img8.jpg" alt="dog">
					</a>
                    
                </div>
            </div>
			<div class="columns col-sm-6 col-lg-3"> 
				<div class="block">
					<a href="#" class="thumbnail">
						<img src="img_gallery/img9.jpg" alt="cat">
					</a>
					<a href="#" class="thumbnail">
						<img src="img_gallery/img10.jpg" alt="dog">
					</a>
					<a href="#" class="thumbnail">
						<img src="img_gallery/img0.jpg" alt="dog">
					</a>
				</div>
            </div>	
    </section>
</div>

<div class="container">
    <section id="SubscriptionSection" class="SubscriptionSection">
        <div class="SubscriptionGroup">
            <h4>Keep up-to-date with the latest updates</h4>
            <p>Subscribe to our newsletter to get a weekly dose of <span class="ColoredText_Sub">DOG&amp;CAT</span> news, delivered straight to your inbox</p>
        </div>
		<div id="SubscriptionCaptchaIsValidLabel" class="SubscriptionCaptchaIsValidLabel">
			<p>Verification passed. Click SUBSCRIBE button</p>
		</div>
		
        <form <cfoutput>action=#subscribePage#</cfoutput> method="post" id="SubscriptionForm" class="SubscriptionForm">
            <input type="email" id="SubscriptionEmail" name="SubscriptionEmail"  placeholder="Enter Email Address" minlength="5" maxlength="45" required>
            <a href="#SubscriptionSection" type="submit" id="SubscriptionBT" class="SubscriptionBT">SUBSCRIBE</a>
        </form>
		
    </section>
</div>

<div class="container">
    <section id="SubscriptionCaptchaSection" class="SubscriptionCaptchaSection">
		<div class="SubscriptionCaptchaGroup">	
			<h4>Please go through verification to confirm the action</h4>
		</div>
		<div class="SubscriptionCaptchaGroup">	
			<input type="text" id="CaptchaGenerated" class="CaptchaGenerated"/>
			<input type="button" id="CaptchaRefreshBT" class="CaptchaRefreshBT" value="Refresh"/>
			<input type="text" id="CaptchaUserInput" class="CaptchaUserInput" placeholder="Enter CAPTCHA symbols"/>
			<input type="button" id="CaptchaValidationBT" class="CaptchaValidationBT" value="Check"/>
		</div>
    </section>
</div>

<div class="container">
    <section id="FeedbackSection" class="FeedbackSection">
        <h2><span class="ColoredText_Sub">Feedback</span> form</h2>
        <div class="FeedbackGroup">
            <div class="Feedback_1">
                <p>Please leave your message here and we will contact you:</p>
                <form <cfoutput>action=#feedbackPage#</cfoutput> method="post" id="FeedbackForm" class="FeedbackForm">
                    <div class="FeedbackTextInputGroup">
						<textarea type="text" id="FeedbackMessage" name="FeedbackMessage" placeholder="Message" required></textarea>
					</div>
					<div class="FeedbackTextInputGroup">
						<input type="text" id="FeedbackName" name="FeedbackName" placeholder="Name" required>
					</div>
					<div class="FeedbackTextInputGroup">
						<input type="text" id="FeedbackEmail" name="FeedbackEmail" placeholder="Email Address" minlength="5" maxlength="45" required>
                    </div>
					<a href="#FeedbackSection" type="submit" id="FeedbackBT" class="FeedbackBT">SEND</a>
                </form>
            </div>
        </div>
    </section>
</div>

<div class="container">
    <footer>
        <div class="FooterGroup">
			<cfoutput>
                <p>&copy; #DateFormat(Now(), "y")# DOG&amp;CAT Forever. All rights reserved</p>
            </cfoutput>
        </div>
    </footer>
</div> 

<a href="#Home" id="HomeBT">HOME</a>

<script src="main.js"></script>
</body>
</html>
