
<?php 
	$title = 'Bella Donna Style';
	// $content_title = '';

	include ('../includes/head.php');
	include ('../includes/main_header.php');
	include ('../includes/navigation.php');
	


 ?>

 	<!-- Hide included content_title -->
 	<style type="text/css">
 		.underline {
 			display: none !important;

 		}
 		h1 {
 			display: none;
 		}

 	</style>

 	<!-- Front Image -->
		<div class="front-image">




			<div class="front-message" data-aos="fade-right" data-aos-delay="300">
				<p><q>Nije mi žao da napustim ovaj svet, ali mi je žao što ostavljam tolike lepotice</q> </p>
				<i> Giacomo Casanova</i>
			</div>

			<img src="../images/front_image.png" alt="Front Image">
		</div>
		<!-- Front Image End -->




		<!-- Main Content -->

		<main>
			<div class="main-content">
				
				<!-- Cards container -->
				<div class="cards-container" id="cont">
					
					<div class="img-container" data-aos="fade-right" data-aos-delay="300">
						<a href="../pages/trepavice.php">
							<div class="img" >
								<img src="../images/front-trepavice.jfif" alt="Trepavice">
							</div>
							<div>
								<p>Nadogradnja Trepavica</p>
							</div>
						</a>
					</div>
				
					<div class="img-container" data-aos="zoom-in" data-aos-delay="500">
						<a href="../pages/nega_ruku_nogu.php">
							<div class="img">
								<img src="../images/front-nega_ruku_nogu.png" alt="Nega ruku i nogu">
							</div>
							<div>
								<p>Nega Ruku i Nogu</p>
							</div>
						</a>
					</div>
				
					<div class="img-container" data-aos="fade-left" data-aos-delay="300">
						<a href="../pages/masaze.php">
							<div class="img">
								<img src="../images/front-masaze.jpg" alt="Masaze">
							</div>
							<div>
								<p>Masaže</p>
							</div>
						</a>
					</div>
				
					<div class="img-container" data-aos="fade-right" data-aos-delay="300">
						<a href="../pages/depilacija_epilacija.php">
							<div class="img">
								<img src="../images/front-depilacija.png" alt="Depilacija">
							</div>
							<div>
								<p>Depilacija</p>
							</div>
						</a>
					</div>
				
					<div class="img-container" data-aos="zoom-in" data-aos-delay="500">
						<a href="../pages/obrve.php">
							<div class="img">
								<img src="../images/front-obrve.png" alt="Obrve">
							</div>
							<div>
								<p>Iscrtavanje Obrva</p>
							</div>
						</a>	
					</div>
				
				
					<div class="img-container" data-aos="fade-left" data-aos-delay="300">
						<a href="../pages/profesionalno_sminkanje.php">
							<div class="img">
								<img src="../images/front-sminka.jpeg" alt="Sminka">
							</div>
							<div>
								<p>Profesionalno Šminkanje</p>
							</div>
						</a>
					</div>
					
				</div>
				<!-- Cards container End-->

			</div>
		</main>

		

		<!-- Main content End-->


<?php 

	include('../includes/footer.php');

 ?>
