// creamos los efectos del fade
(function() {
    window.addEventListener('scroll', function() {

        // función para aplicar todos los efectos de direcciones
        function fade(direction) {
            
            // contacenamos + direction par que sea cualquier dirección de fade que queramos pasarlo a la clase del html.
            let contenedor = document.querySelectorAll('.fade_' + direction);
    
            for (let i = 0; i < contenedor.length; i++) {
            
                let alturaPantalla = window.innerHeight/1.3; // dividimos por 1.3 para que un poco antes ya apresca el efecto
                let distancia      = contenedor[i].getBoundingClientRect().top; // este método nos devuelve el tamaño de un elemento y su posicion con respecto al viewport.
                
                // contacenamos + direction par que sea cualquier dirección de efecto que queramos.
                contenedor[i].classList.add('transform_' + direction);
    
                if ( distancia <= alturaPantalla ) {
                    contenedor[i].classList.add('aparece');
                } else {
                    // en caso de que al volver a hacia arriba nos vuelva a mostrar el efecto
                    // contenedor[i].classList.remove('aparece');
                }
            }
        }

        fade('left');
        fade('right');
        fade('up');
        fade('down');

    });
}())