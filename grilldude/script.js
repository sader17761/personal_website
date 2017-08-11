var timerid = 0;
var images = new Array(	"photos/home_image.jpg",
			"photos/home_image2.jpg",
			"photos/home_image4.jpg",
			"photos/home_image5.jpg",
			"photos/home_image3.jpg");
			
var countimages = 0;
function startTime()
{
	if(timerid)
	{
		timerid = 0;
	}
	var tDate = new Date();
	
	if(countimages == images.length)
	{
		countimages = 0;
	}
	if(tDate.getSeconds() % 6 == 0)
	{
		document.getElementById("img1").src = images[countimages];
	}
	countimages++;
	
	timerid = setTimeout("startTime()", 1000);
}

