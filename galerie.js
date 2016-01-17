/*	Date: 2014-11-09 
	Autor: Roman Pantring
	Language: German
	City: Berlin

	HTML5 JavaScript Image Gallery with LightBox
	
	JavaScript galerie Script mit LightBox
	verwendet wird: createElement, addEventListener, removeEventListener
	onclick, onmouseover, onmouseout
	Transition Effeckte sind mit CSS3
	background, opacity

	global variables: galerieInit, lineCount, lines, Images, galerie, galerieIndex, maxlines, maxImages, max
	
*/
galerieInit = false;
lineCount = 4;
//lines = 5; 
Images = 17; 
lines = Math.ceil(Images/lineCount);

function imageOver(){
	if(galerieInit){
	var ImageBox = document.getElementById("ImageBox");
	ImageBox.removeEventListener("click",removeBoxes);
	}
}
function imageOut(){
	if(galerieInit){
	var ImageBox = document.getElementById("ImageBox");
	ImageBox.addEventListener("click",removeBoxes);
	}
}
function imageClick(){	
}
function nextImage(){
	galerieIndex++;	
	//galerieIndex = galerieIndex%galerie.images.length;	
	galerieIndex = galerieIndex%(galerie.images.length);
	nextIndex = galerieIndex + 1;
	nextIndex = nextIndex%(galerie.images.length);
	prevIndex = galerieIndex - 1;
	
	if(prevIndex<0){
		prevIndex = galerie.images.length-1;
	}
	//alert(prevIndex+ " " + galerieIndex + " " + nextIndex);
	
	// 1) Load new Image in Image 2
	var imagefile = galerie.images[galerieIndex];
	var prevfile = galerie.images[prevIndex];
	var nextfile = galerie.images[nextIndex];
	
	//preload images
	var previmg= document.createElement('img');
    previmg.src="Sample_Pictures/"+prevfile;
	var nextimg= document.createElement('img');
    nextimg.src="Sample_Pictures/"+nextfile;
	
	var Image = document.getElementById("Image2");	
	Image.style.backgroundImage="url('Sample_Pictures/"+imagefile+"')";
	var FileName = document.getElementById("FileName");
	FileName.innerHTML = imagefile;
	
	setTimeout(function(){
		// 2) hide old image in Image 1
		var Image = document.getElementById("Image");
		Image.setAttribute('class','turnoff');
	
		setTimeout(function(){
			// 3) load new Image in Image 1
			var Image = document.getElementById("Image");	
			//var imagefile = galerie.images[galerieIndex+1];
			Image.style.backgroundImage="url('Sample_Pictures/"+imagefile+"')";
			Image.setAttribute('class','');
		},300);
	
	},300);
	
	
}
function previousImage(){
	galerieIndex--;
	//galerieIndex = galerieIndex%galerie.images.length;
	//galerieIndex = galerieIndex%(lines*maxlines);
	galerieIndex = galerieIndex%(galerie.images.length);
	if(galerieIndex<0){
		galerieIndex = galerie.images.length-1;
	}
	
	nextIndex = galerieIndex + 1;
	nextIndex = nextIndex%(galerie.images.length);
	prevIndex = galerieIndex - 1;
	
	if(prevIndex<0){
		prevIndex = galerie.images.length-1;
	}
	//alert(prevIndex+ " " + galerieIndex + " " + nextIndex);
	
	var imagefile = galerie.images[galerieIndex];
	var prevfile = galerie.images[prevIndex];
	var nextfile = galerie.images[nextIndex];
	
	//preload images
	var previmg=document.createElement('img');
    previmg.src="Sample_Pictures/"+prevfile;	
	var nextimg=document.createElement('img');
    nextimg.src="Sample_Pictures/"+nextfile;
	
	var Image = document.getElementById("Image2");	
	Image.style.backgroundImage="url('Sample_Pictures/"+imagefile+"')";
	var FileName = document.getElementById("FileName");
	FileName.innerHTML = imagefile;
	
	setTimeout(function(){
		var Image = document.getElementById("Image");
		Image.setAttribute('class','turnoff');
	
		setTimeout(function(){
			var Image = document.getElementById("Image");	
			//var imagefile = galerie.images[galerieIndex+1];
			Image.style.backgroundImage="url('Sample_Pictures/"+imagefile+"')";
			Image.setAttribute('class','');
		},300);
	
	},300);
	
}
removeBoxes = function(e){
		Box.setAttribute('class','turnoff');
		ImageBox.setAttribute('class','turnoff');
		//alert(document.body.childNodes[3].id);
		//alert(document.body.childNodes[4].id);
		setTimeout(function(){
			document.body.removeChild(document.body.childNodes[3]);
			document.body.removeChild(document.body.childNodes[3]);
			galerieInit = false;
		}, 600);
}
function showImage(image){	
	galerieIndex = galerie.images.indexOf(image);
	
	nextIndex = galerieIndex + 1;
	//alert(Images);
	//alert(galerie.images.length);
	nextIndex = nextIndex%(galerie.images.length);
	prevIndex = galerieIndex - 1;
	
	if(prevIndex<0){
		prevIndex = galerie.images.length-1;
	}
	//alert(prevIndex+ " " + galerieIndex + " " + nextIndex);
	
	// 1) Load new Image in Image 2
	var imagefile = galerie.images[galerieIndex];
	var prevfile = galerie.images[prevIndex];
	var nextfile = galerie.images[nextIndex];
	
	//preload images
	var previmg= document.createElement('img');
	previmg.src="Sample_Pictures/"+prevfile;
	var nextimg= document.createElement('img');
	nextimg.src="Sample_Pictures/"+nextfile;
	
	var body = document.body;
	var Box = document.createElement("div");
	var ImageBox = document.createElement("div");	
	Box.setAttribute('id','Box');	
	Box.setAttribute('class','');
	
	
	ImageBox.setAttribute('id','ImageBox');	
	ImageBox.setAttribute('class','');
		
	ImageBox.innerHTML = '<div id="Image2"></div><div id="Image" onclick='+"imageClick();"+' onmouseover='+"imageOver();"+' onmouseout='+"imageOut();"+' style="background-image:url('+"'"+"Sample_Pictures/"+image+"'"+');"></div> <div id="imagenav" ' +' onmouseover='+"imageOver();"+' onmouseout='+"imageOut();"+ ' ><div class="arrow left" onclick="previousImage(); return false;"><a class="left" >&lt;</a></div><div class="arrow right" onclick="nextImage(); return false;"><a class="right">&gt;</a></div><div id="FileName"></div><div id="close" onclick="removeBoxes();"><a class="close">X</a></div></div>';
	ImageBox.addEventListener("click", removeBoxes,false);
	body.appendChild(Box);
	body.appendChild(ImageBox);
	var FileName = document.getElementById("FileName");
	FileName.innerHTML = image;
	galerieInit = true;
	setTimeout(function(){
		Box.setAttribute('class','turnon');
		ImageBox.setAttribute('class','turnon');
	}, 300);	
}
function galerieImages(a,b){	
	var galerieBox = document.getElementById("galerie");
	galerie =  {images:['Chrysanthemum.jpg','Desert.jpg','Hydrangeas.jpg','Jellyfish.jpg','Koala.jpg','Lighthouse.jpg','Penguins.jpg','Tulips.jpg','2014-06-21.jpg','2014-06-22.jpg','2014-06-23.jpg','2014-06-24.jpg','2014-06-25.jpg','2014-06-26.jpg','2014-06-27.jpg','2014-06-28.jpg','2014-06-29.jpg'],lineCount:a,lines:b}; 	
	maxlines = Math.ceil(galerie.images.length/galerie.lineCount);	
	document.getElementById('maxlines').setAttribute("max",maxlines);
	var count = galerie.images.length;
	maxImages = count;
	var lineCount = galerie.lineCount;
	var lines = galerie.lines;
	var galerieString = "";
	var image;
	var name;
	var html;
	var link;
	var smallWidth = 146;  /*146*/ /*150*/ /*200*/ /*230*/
	var smallHeight = 110; /*110*/ /*113*/ /*150*/ /*173*/
	max = lines*lineCount;
	
	for(i=1;i<=Images;i++){
		// If array is big enough...
		if(galerie.images[(i-1)]!= null){		
			image = galerie.images[(i-1)];
			name = image.substr(0,(image.length-4));
			link = "Sample_Pictures/thumbs/"+image;
			html = "<img src='"+link+"' width='"+smallWidth+"' height='"+smallHeight+"' alt='"+name+"' title='"+name+"' >";		
			
			galerieString += "<a href='"+link+"' "+' onmouseover='+"imageOver();"+' onmouseout='+"imageOut();"+" onclick='showImage("+'"'+image+'"'+");return false;' onmouseover='' >"+html+"</a>";		
			if(i%lineCount==0 && i!= galerie.images.length){
				galerieString += '<br>';
			}
		}
	};
	galerieBox.innerHTML = galerieString;
}
function showGalerie(x){
	//if(x<1) x = 1;
	//if(x>maxlines) x = maxlines;
	lines = x;
	galerieImages(lineCount,lines);

}

function viewport(){
	//alert(window.innerWidth + " " + window.innerHeight);
	//alert(screen.width +" " + screen.height);
	//alert(lineCount);
	if(window.innerWidth<624){
		lineCount = 3;
		lines = Math.ceil(Images/lineCount);
	}else{
		lineCount = 4;
		lines = Math.ceil(Images/lineCount);
	}
	//alert(lines);
	
	document.getElementById('maxlines').value = lines;
	document.getElementById('Images').value = Images;
	galerieImages(lineCount,lines);
}