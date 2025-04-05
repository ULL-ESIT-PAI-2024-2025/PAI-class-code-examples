/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 24, 2020
 *        Apr 5, 2025
 * @desc Bulma. Progress Bar
 * @see {@link https://www.w3schools.com/howto/howto_js_progressbar.asp}
 *
 */
function move() {
    var counter = 0;
    if (counter === 0) {
        counter = 1;
        var elem_1 = document.getElementById("myBar");
        var width_1 = 0;
        var id_1 = setInterval(frame, 10);
        function frame() {
            if (width_1 >= 100) {
                clearInterval(id_1);
                counter = 0;
            }
            else {
                width_1++;
                elem_1.style.width = width_1 + "%";
                elem_1.innerHTML = width_1 + "%";
            }
        }
    }
}
