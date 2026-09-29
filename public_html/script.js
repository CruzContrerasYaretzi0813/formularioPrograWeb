    

    //declaramos la lista global de alumnos
    let listaAlumno = [];
    
    function calcularPromedio() {

        // Obtener los datos del formulario

        let nombre = document.getElementById("nombre").value;

        let edad = document.getElementById("edad").value;

        let calificacion1 = parseFloat(
            document.getElementById("calificacion1").value
        );

        let calificacion2 = parseFloat(
            document.getElementById("calificacion2").value
        );

        let calificacion3 = parseFloat(
            document.getElementById("calificacion3").value
        );

        let calificacion4 = parseFloat(
            document.getElementById("calificacion4").value
        );


        // Validar que los datos estén completos

        if (
            nombre === "" ||
            edad === "" ||
            //Validar que las calificaciones esten entre 1 y 10
            isNaN(calificacion1) || calificacion1 <1 || calificacion1 > 10 ||
            isNaN(calificacion2) || calificacion2 <1 || calificacion2 > 10 ||
            isNaN(calificacion3) || calificacion3 <1 || calificacion3 > 10 ||
            isNaN(calificacion4) || calificacion4 <1 || calificacion4 > 10 
        ) {

            document.getElementById("resultado").innerHTML =
                "Por favor, completa todos los datos o verifica que las calificaciones sean del 1 al 10";

            return;
        }


        // Calcular promedio

        let promedio =
            (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    
            
        // mensaje del promedio    
        let mensaje = 
                "<strong>Alumno:</strong> " + nombre +
                " " +
                "<strong>Edad:</strong>" + edad +
                "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
                "<br><br>";



        // Mostrar resultado

        if (promedio >= 9 &&  promedio <= 10) {

            mensaje += "Excelente";
     
        } 
        else if ( promedio >= 8 &&  promedio <= 9 ){

            mensaje += "Muy Bien";
        }
        else if ( promedio >= 7 &&  promedio <= 7.9 ){

            mensaje += "Bien";
        }
        else if ( promedio >= 6.5 &&  promedio <= 6.9 ){

            mensaje += "Piensa en cambiarte a Conta";
        }
        else if ( promedio >= 6 &&  promedio <= 6.5 ){

            mensaje += "Date de Baja";
        }

        else {

            mensaje += "Vete a turismo o a la 11";
        } 
        document.getElementById("resultado").innerHTML = mensaje;


    }

    function limpiarDatos() {
        
        //Limpiamos cada uno de los datos ingresados
        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("calificacion1").value = "";
        document.getElementById("calificacion2").value = "";
        document.getElementById("calificacion3").value = "";
        document.getElementById("calificacion4").value = "";


        document.getElementById("resultado").innerHTML = "";

        //Ponemos un focus para que al limpiar los datos
        //mande al usuario al apartado de nombre
        document.getElementById("nombre").focus();
       
    }
    
    function soloLetras(e){
        
        // obtiene la tecla que el usuario acaba de teclear
        let key = e.key || e.keyCode;
        // Define un patrón (expresión regular) que solo acepta letras de la A a la Z,
        // vocales acentuadas, la letra ñ, la Ñ y espacios en blanco (\s)
        let patron = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]$/;
        // Comprueba si la tecla presionada coincide con el patrón permitido.
        // Devuelve 'true' si es una letra válida (la deja escribir) o 'false' si no lo es (la bloquea).
        return patron.test(e.key);
    }
    
    
    
    function agregarAlumno(){
        
        let nombre = document.getElementById("nombre").value;

        let edad = document.getElementById("edad").value;

        let calificacion1 = parseFloat(
            document.getElementById("calificacion1").value
        );

        let calificacion2 = parseFloat(
            document.getElementById("calificacion2").value
        );

        let calificacion3 = parseFloat(
            document.getElementById("calificacion3").value
        );

        let calificacion4 = parseFloat(
            document.getElementById("calificacion4").value
        );


        // Validar que los datos estén completos

        if (
            nombre === "" ||
            edad === "" ||
            isNaN(calificacion1) || calificacion1 <1 || calificacion1 > 10 ||
            isNaN(calificacion2) || calificacion2 <1 || calificacion2 > 10 ||
            isNaN(calificacion3) || calificacion3 <1 || calificacion3 > 10 ||
            isNaN(calificacion4) || calificacion4 <1 || calificacion4 > 10 
        ) {

            document.getElementById("resultado").innerHTML =
                "Por favor, completa todos los datos o verifica que las calificaciones sean del 1 al 10";

            return;
        }


        // Calcular promedio
        let promedio =
            (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    
            //creamos un apartado para guardar el nombre, edad y promedio del alumno
        let nuevoAlumno = {
            nombre: nombre,
            edad: edad,
            promedio: promedio
        };
        
        //Agregamos ese nuevo alumno a la lista global de alumno
        listaAlumno.push(nuevoAlumno);
        //mostramos mensaje de exito
        document.getElementById("resultado").innerHTML = 
            "¡Alumno <strong>" + nombre + "</strong> agregado exitosamente! (Total: " + listaAlumno.length + ")";
    }
    
    function mostrarAlumno(){
        
        //declaramos un contenedor que se relaciona con mostrar el resultado en el html
        let contenedor = document.getElementById("resultado");

        // si no hay ningun registro
        if (listaAlumno.length === 0) {
            contenedor.innerHTML = "No hay alumnos registrados en el sistema.";
            return;
        }

        //Declaramos inicio de lista
        let html = "<h3>Lista de Alumnos:</h3><ul>";
        //usamos un for para imprimir la cantidad de alumnos registrados con el .length
        for (let i = 0; i < listaAlumno.length; i++) {
            //llamamos por i al apartado de nombre
            html += "<li><strong>" + listaAlumno[i].nombre + "</strong> (Edad: "
                    //llamamos por i al apartado de edad
                    + listaAlumno[i].edad + ") - Promedio: " 
                    //llamamos por i al apartado de promedio
                    + listaAlumno[i].promedio.toFixed(2) + "</li>";
        }
        html += "</ul>";
        //imprime el resultado.
        contenedor.innerHTML = html;
    }
