import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener( 'submit', buscarCancion );

function buscarCancion( e ) {

    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if( artista === '' || cancion === '' ) {
        // El usuario dejo al menos un campo vacío, mostrar error
        UI.divMensajes.textContent = 'Error... Todos los campos son obligattorios';
        UI.divMensajes.classList.add( 'error' );

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove( 'error' );
        }, 3000);
    };

    // Consultar nuestra API
    const busqueda = new API( artista, cancion );

    busqueda.consultarAPI();

};