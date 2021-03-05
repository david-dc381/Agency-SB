(function() {
   let iconOpen        = document.getElementById('open');
   let iconClose       = document.getElementById('close');
   let videoModal      = document.getElementById('video-modal');
   let videoEnlace     = document.getElementById('video');
   let videoReproducir = document.getElementById('secondVideo');


    function abrir(e) {
        // esto es para prevenir que el video reproduzca al dar click, pero igual ya le quitamos el controls en el html
        e.preventDefault();
        videoModal.className = videoModal.className + ' active-video';
    }

    // al inicio de play, un evento de click
    iconOpen.addEventListener('click', abrir);
    
    // a la pantalla del video un evento de click y prevenimos que se reproduzca al dar click
    videoEnlace.addEventListener('click', abrir);
    

    // evento al icono de cerrar para que no se muestre la pantalla grande
    function cerrar() {
        videoReproducir.pause(); // para cuando cerremos el videoModal el 2do video que se esta reproduciendo se ponga en pausa
        videoReproducir.currentTime = 0; // para poner a cero el video que se estaba reproduciendo
        videoModal.className = videoModal.className.replace('active-video', '');
    }
    iconClose.addEventListener('click', cerrar);


    // ESTA ES OTRA MANERA DE HACERLO, Y TAMBIEN SE PUEDE HACER EN EL HTML

    //   let videoModal = document.querySelector('.video-modal');
    //   let video = document.getElementById('video');
    //   let iconOpen =  document.getElementById('open');
    //   let iconClose = document.getElementById('close');
    //   let secondVideo = document.getElementById('secondVideo');


    //   iconOpen.addEventListener('click', () => {
    //     videoModal.style.visibility = "visible";
    //   });
    //   video.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     videoModal.style.visibility = "visible";
    //   });
    //   iconClose.addEventListener('click', () => {
    //     secondVideo.pause();
    //     secondVideo.currentTime = 0;
    //     videoModal.style.visibility = "hidden";
    // });

  
}())