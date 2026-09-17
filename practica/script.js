//!creo y nombro una funcion
function convertirTemperatura() {
    let celsius;

    // !creo un bloque de validacion (Bucle while)
    while (true) {
        let entrada = prompt("Si tu horno no tiene escalas Celsius ingresa la temperatura yo te ayudo en °c yo te ayudo:");

        // parseFloat es una función incorporada en JavaScript que toma un texto (string) que contiene números y lo convierte en un número con decimales (número flotante)
        celsius = parseFloat(entrada);

       /*** 
        * entrada.trim() !== "": Significa "El usuario no presionó Enter estando el cuadro vacío ni llenó el cuadro solo con espacios".
        * 
        *(!isNaN Significa "No es un 'No-Número'" (es decir, Sí es un número válido).
        */
       //!la parte de la condicional tuve que investigar
        if (!isNaN(celsius) && entrada.trim() !== "") {
            break; // Si es un número válido, salimos del bucle
        } else {//si no es numero sera un error
            alert("Error: solo escribe numeros.");
        }
    }

   //!las operaciones 
    
    /** Kelvin = Celsius + 273.15 */
    let kelvin = celsius + 273.15;
    /**  Fahrenheit = (Celsius * 9/5) + 32*/
    let fahrenheit = (celsius * 9 / 5) + 32;

    //!las salidas a consola
    console.log(`Entrada: ${celsius}`);
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);
}
//!ejecucion del codigo 
convertirTemperatura();
