const images = ["web_first_images_release.png", "main_image_stellar_death_s_ring_miri_nircam_sidebyside-5mb.jpg", "main_image_galaxies_stephans_quintet_sq_nircam_miri_final-5mb.jpg", "main_image_deep_field_smacs0723-5mb.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


document.body.style.backgroundImage = `url('images/${chosenImage}')`;