
<?php 
	$title = 'Galerija - Bella Donna Style | Kozmeticki salon | Zarkovo';
	$content_title = 'Galerija';
	
	include ('../includes/head.php');
	include ('../includes/main_header.php');
	include ('../includes/navigation.php');


	$dir = __DIR__ . DIRECTORY_SEPARATOR . "../galerija" . DIRECTORY_SEPARATOR ;

	$images = glob($dir . "*.{JPG,png,jpg,jpeg,gif,bmp,webp,PNG}", GLOB_BRACE);


	


 ?>

	 		


 		<div id="Outer" onclick='gallery.hide()'>
 			<div id="Inner"></div>
 		</div>


 		<div class="gallery">
	 		<?php
	 			foreach ($images as $img) {
	 				printf("<img src='../galerija/%s' onclick='gallery.show(this)'/>", basename($img)); 
	 			}


	 		?>

 		</div>
 	<!-- </div> -->



<?php 

	include('../includes/footer.php');

 ?>
