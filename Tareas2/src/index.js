import readline from 'readline';

import { agregarTarea, listarTareas, marcarCompletada, eliminarTarea } from './gestortareas.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tareas = [];

const mostrarMenu = () => {
    console.log(`\n Gestor de Tareas:`);
    console.log('1. Agregar tarea');
    console.log('2. Listar tareas');
    console.log('3. Marcar tarea como completada');
    console.log('4. Eliminar tarea');
    console.log('0. Salir');
    rl.question('Seleccione una opción: ', opcion => {
        switch (opcion) {
            case '1':
                rl.question('Título de la tarea: ', titulo => {
                    rl.question('Descripción de la tarea: ', descripcion => {
                        agregarTarea(tareas, titulo, descripcion);
                        mostrarMenu();
                    });
                });
                break;
            case '2':
                listarTareas(tareas);
                mostrarMenu();
                break;
            case '3':
                rl.question('ID de la tarea a marcar como completada: ', id => {
                    marcarCompletada(tareas, parseInt(id));
                    mostrarMenu();
                });
                break;
            case '4':
                rl.question('ID de la tarea a eliminar: ', id => {
                    eliminarTarea(tareas, parseInt(id));
                    mostrarMenu();
                });
                break;
            case '0':
                rl.close();
                break;
            default:
                console.log('Opción no válida.');
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();
