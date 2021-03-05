// Código para el scroll
(function(){
    // Propiedades
    let propiedadesScroll = {
        posicionActual:     window.pageYOffset,
        scrollSuave:        document.getElementsByClassName('scroll-suave'),
        volverArriba:       document.getElementsByClassName('volver-arriba'),
        destino:            null,
        seccionDistancia:   null,
        intervalo:          null,
    }

    // Métodos
    let metodosScroll = {
        inicio: function() {
            for (var i = 0; i < propiedadesScroll.scrollSuave.length; i++) {
                propiedadesScroll.scrollSuave[i].addEventListener('click', metodosScroll.moverse);
              }
        
              //recorremos el elemento aunque sea solo uno, porque talvez más adelante aumentamos otros elementos con la misma clase
              for (var i = 0; i < propiedadesScroll.volverArriba.length; i++) {
                propiedadesScroll.volverArriba[i].addEventListener('click', metodosScroll.subir);
              }

        },

        moverse: function(e) {
            // detenemos su función por defecto
            e.preventDefault();
            clearInterval(propiedadesScroll.intervalo);

            // obtenemos el atributo href
            propiedadesScroll.destino = this.getAttribute('href');
            
            //obtenemos la altura desde el tope del elemento hasta el elemento en el que hagamos click y le restamos 94px
            propiedadesScroll.seccionDistancia = document.querySelector(propiedadesScroll.destino).offsetTop - 75;

            propiedadesScroll.posicionActual = window.pageYOffset;
            
            propiedadesScroll.intervalo = setInterval(function() {
                
                if ( propiedadesScroll.posicionActual < propiedadesScroll.seccionDistancia ) {
                    propiedadesScroll.posicionActual += 30;

                    if ( propiedadesScroll.posicionActual >= propiedadesScroll.seccionDistancia ) {
                        clearInterval(propiedadesScroll.intervalo);
                    } 
                    
                } else {
                        propiedadesScroll.posicionActual -= 30;

                        if (propiedadesScroll.posicionActual <= propiedadesScroll.seccionDistancia) {
                            clearInterval(propiedadesScroll.intervalo);
                        }
                    }

                window.scroll(0, propiedadesScroll.posicionActual);

            }, 15);
        },

        subir: function(e) {
            e.preventDefault();
            clearInterval(propiedadesScroll.intervalo);

            propiedadesScroll.posicionActual = window.pageYOffset;

            propiedadesScroll.intervalo = setInterval(function() {
                
                if (propiedadesScroll.posicionActual > 0) {
                    propiedadesScroll.posicionActual -= 30;

                    if (propiedadesScroll.posicionActual <= 0) {
                        clearInterval(propiedadesScroll.intervalo);
                    }
                } else {
                    return;
                }
                window.scrollTo(0, propiedadesScroll.posicionActual);
            },15);
        }
    }
    metodosScroll.inicio();
}())