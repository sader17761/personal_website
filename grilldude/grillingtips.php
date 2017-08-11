<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Grilling Tips - The Grill Dude</title>
	<script src="script.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>	
	<link rel="stylesheet" href="style2.css">
</head>
<body>

<!-- LOGIN NAVIGATION -->

<nav id="header_nav">
    <div id="login">
        <a href="login.html">Login</a>
    </div>
</nav>
<div id="header">
	<section id="header_menu">
		<div id="button1">
			<p><a href="index2.html">Home</a></p>
		</div>
		<div id="button2">
			<p><a href="recipes.html">Recipes</a></p>
		</div>
		<div id="button3">
			<p><a href="grillingtips.php">Grilling Tips</a></p>
		</div>
		<div id="button4">	
			<a href="index2.html"><img src="images/TheGrillDude_3.png" alt="The Grill Dude Logo"></a>
		</div>
		<div id="button5">
			<p><a href="gallery.html">Gallery</a></p>
		</div>
		<div id="button6">
			<p><a href="forsale.html">For Sale</a></p>
		</div>
		<div id="button7">
			<p><a href="aboutus.html">About Me</a></p>
		</div>	
	</section>
</div>



<div id="wrapper">
	<div id="sidebar_left">
		<div id="sidebar_left_top">
			<div id="category">
				<p>Recipe Categories</p>
			</div>
			<div id="menu_categories">
				<p><a href="starters.html">Starters</a></p>
				<hr>
				<p><a href="beef.html">Beef</a></p>
				<hr>
				<p><a href="chicken.html">Chicken</a></p>
				<hr>
				<p><a href="pork.html">Pork</a></p>
				<hr>
				<p><a href="lamb.html">Lamb</a></p>
				<hr>
				<p><a href="seafood.html">Seafood</a></p>
				<hr>
				<p><a href="veggies.html">Veggies</a></p>
				<hr>
				<p><a href="dessert.html">Dessert</a></p>
				<hr>
				<p><a href="other.html">Others</a></p>
			</div>	

		</div>
		<div id="sidebar_left_bottom">
			<div class="news_header">
				<p>Latest News</p>
			</div>
			<div id="news">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Phasellus at sapien leo. Maecenas ligula quam, convallis nec 
				diam porta, vestibulum accumsan lectus.</p>
				<br>
				<p class="news_date">September 8, 2015</p>
			</div>
		</div>
	</div>
	
	<div id="middle_content">
		<h1>Past Recipes Of The Month</h1>
		
			<div class="block">
				<a href="recipeofthemonth_august.html">
					<div class="recipe_block">
						<div class="recipe_img">
							<img src="photos/past1.jpg">
						</div>
						<div class="recipe_info">
							<h2>Cheeseburgers Stacked with Roasted Poblano Chiles and Avacado</h2>
							<h4>Serves: 4 // Prep time: 15 minutes | Grilling time: 23 to 25 minutes</h4>							
						</div>
					</div>
				</a>
			</div>	
			
			<div class="block">
				<a href="recipeofthemonth_july.html">
					<div class="recipe_block">
						<div class="recipe_img">
							<img src="photos/past2.jpg">
						</div>
						<div class="recipe_info">
							<h2>Thyme-Rubbed Pork Chops with Peach-Bourbon Chutney</h2>
							<h4>Serves: 4 // Prep time: 25 minutes | Grilling time: 8 to 10 minutes</h4>							
						</div>
					</div>
				</a>
			</div>	
			
			<div class="block">
				<a href="recipeofthemonth_june.html">
					<div class="recipe_block">
						<div class="recipe_img">
							<img src="photos/past3.jpg">
						</div>
						<div class="recipe_info">
							<h2>Barbecued Chicken Hoagies with Zesty Mustard-Broccoli Slaw</h2>
							<h4>Serves: 4 // Prep time: 25 minutes, plus about 25 minutes for the sauce | Grilling time: 8 to 12 minutes</h4>							
						</div>
					</div>
				</a>
			</div>	
						
	</div>	
	
	<div id="sidebar_right">
	
		<div id="sidebar_right_top">
			<h1 id="login_title">Sign up here to receive additional recipes and grilling tips from The Grill Dude.</h1>
			<form action="" method="post" class="form form--login">
				<div class="form__field">
					<label class="fontawesome-user" for="login__username"><span class="hidden">Username</span></label>
					<input id="login__username" type="text" class="form__input" placeholder="Full Name" required>
				</div>

				<div class="form__field">
					<label class="fontawesome-lock" for="login__password"><span class="hidden">Password</span></label>
					<input id="login__password" type="password" class="form__input" placeholder="Email Address" required>
				</div>

				<div class="form__field">
					<input type="submit" value="Sign Up">
				</div>
			</form>
		</div>
		
		<div id="sidebar_right_bottom">
			<div class="news_header">
				<p>Twitter Feed</p>
			</div>
			<div id="twitter_feed">
				<p class="feed_address"><a href="https://twitter.com/TheGrillDude">@TheGrillDude</a></p>
				<br>
				<p>Looking forward to using the Serrano on wings! 
				Awesome tasting sauce!!</p>
				<br>
				<p class="feed_date">August 25, 2015</p>
			</div>
			<hr>
			<div id="twitter_feed">
				<p class="feed_address"><a href="https://twitter.com/TheGrillDude">@TheGrillDude</a></p>
				<br>
				<p>Going light on Monday night; grilled cilantro chicken, 
				new potatoes, corn, and a wonderful local saison.</p>
				<br>
				<p class="feed_date">August 17, 2015</p>
			</div>
		</div>
	</div>
</div>



<!-- FOOTER -->	
<div id="footer">
	<div class="wrap">
		<div>
            <span class="footer_text">&copy; 2015 - THE GRILL DUDE</span>
			<span class="bar">|</span>
			<span class="footer_text">PRIVACY POLICY</span>
			<span class="bar">|</span>
			<span class="footer_text">TERMS OF SERVICE</span>
			<span class="bar">|</span>
			<span class="footer_text">FOLLOW US</span>
		</div>
    </div>
</div>

</body>
</html>