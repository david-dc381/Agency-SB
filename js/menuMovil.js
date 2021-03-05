(function(){
    // Propiedades
    let propiedadesMenu = {
        burgerMenu:     document.getElementById('burger-menu'),
        slideMenu:      document.getElementById('slideMenu'),
        menu_activo:    false,
        elementos_menu: document.querySelectorAll('#slideMenu .menu-principal a')
    }

    // Métodos
    let metodosMenu = {
        incio: function() {
            propiedadesMenu.burgerMenu.addEventListener('click', metodosMenu.toggleMenu);

            for (let i = 0; i < propiedadesMenu.elementos_menu.length; i++) {
                propiedadesMenu.elementos_menu[i].addEventListener('click', metodosMenu.ocultarMenu);                
            }
        },

        toggleMenu: function(){
            //si es falso
            if ( propiedadesMenu.menu_activo == false ) {
                //lo volvemos a true
                propiedadesMenu.menu_activo = true;
                //añadimos una clase más a al slice menu que es el padre que contiene los demás elementos
                propiedadesMenu.slideMenu.className = propiedadesMenu.slideMenu.className + ' active';
        
            } else {
              //para ocultar el menu cuando se hace click otra vez en el icono del menu
              //si esta en true lo volvemos a false
              propiedadesMenu.menu_activo = false;
              //y con replace remplazamos la clase 'active' por una vacía, una que no tenga nada
              propiedadesMenu.slideMenu.className = propiedadesMenu.slideMenu.className.replace('active', '');
            }
          },

        ocultarMenu: function() {
            propiedadesMenu.menu_activo = false;
            propiedadesMenu.slideMenu.className = propiedadesMenu.slideMenu.className.replace('active', '');
        }
    }

    metodosMenu.incio();
}())