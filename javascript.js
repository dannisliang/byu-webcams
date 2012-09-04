setInterval(updateKimballTower, 60 * 1000);
setInterval(updateConstruction, 400);
setInterval(updateBroadcasting, 500);
setInterval(updateTestingCenter, 7 * 1000);
setInterval(updateCardCenter, 10);

useLocal = typeof(Storage)!=="undefined";


if(localStorage.timp_src == null || localStorage.timp_src == '')
	localStorage.timp_src = "http://marvin.byu.edu/Weather/tmp/w16361-134532371.jpeg";

getUpdatedSource(); //update source of marvin src
setInterval(getUpdatedSource, 10 * 1 * 1000);
setInterval(updateMtTimp, 1000);

function getUpdatedSource()
{
	$.ajax({
		type: "GET",
		url: 'http://students.cs.byu.edu/~bean5/webcam_helpers/marvin_timp.php',
		success:function(data){
			localStorage.timp_src = data;
			updateMtTimp();
		}
	});
}

function updateKimballTower()
{
	document.getElementById("kimballTower").src = "";
	document.getElementById("kimballTower").src = "http://psych.byu.edu/files/Picture1.jpg";
}

function updateMtTimp()
{	
	if(localStorage.timp_src == '')
	{
		document.getElementById('timpArea').style.display = 'none';
	}
	else
		document.getElementById('timpArea').style.display = '';
	
	document.getElementById("mtTimp").src = "";
	document.getElementById("mtTimp").src = localStorage.timp_src;
}

function updateBroadcasting()
{
	document.getElementById("broadcasting").src = "";
	document.getElementById("broadcasting").src = "http://byubwc.byu.edu/building/live/readImage2.asp";
}

function updateConstruction()
{
	document.getElementById("construction1").src = "";
	document.getElementById("construction1").src = "http://lswebcam1.byu.edu/cam/cam_1.jpg";
	document.getElementById("construction2").src = "";
	document.getElementById("construction2").src = "http://lswebcam1.byu.edu/cam/bnsn/bnsn1.jpg";
}

function updateTestingCenter()
{
	document.getElementById("testing_center").src = "";
	document.getElementById("testing_center").src = "http://testing.byu.edu/images/conditions/axiscam.jpg";
}

function updateCardCenter()
{
	document.getElementById("card_center").src = "";
	document.getElementById("card_center").src = "http://10.25.116.231/axis-cgi/jpg/image.cgi?resolution=640x480";
}