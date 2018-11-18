function changePhotos(){
	 var picPaths = ['../images/rsz_t4ephoto3.jpg','../images/twenty4everPhoto1.jpg','../images/twenty4everPhoto2.jpg','../images/twenty4everPhoto13.jpg','../images/twenty4everPhoto14.jpg'];
            var curPic = -1;
            //preload the images for smooth animation
            var imgO = new Array();
            for(i=0; i < picPaths.length; i++) {
                imgO[i] = new Image();
                imgO[i].src = picPaths[i];
            }

            function swapImage() {
                curPic = (++curPic > picPaths.length-1)? 0 : curPic;
                imgCont.src = imgO[curPic].src;
                setTimeout(swapImage,2000);
            }

            window.onload=function() {
                imgCont = document.getElementById('../images/rsz_t4ephoto3.jpg');
                swapImage();
            }

}
