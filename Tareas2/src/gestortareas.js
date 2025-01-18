

let nextId = 1;

export function agregarTarea(tareas, titulo, descripcion) {
    const nuevaTarea = {
        id: nextId++,
        titulo,
        descripcion,
        completada: false
    };
    tareas.push(nuevaTarea);
    console.log(`Tarea "${titulo}" agregada con éxito.`);
}

export function listarTareas(tareas) {
    if (tareas.length === 0) {
        console.log('No hay tareas en la lista.');
    } else {
        tareas.forEach(tarea => {
            const estado = tarea.completada ? 'completada' : 'pendiente';
            console.log(`ID: ${tarea.id} | Título: ${tarea.titulo} | Estado: ${estado}`);
        });
    }
}

export function marcarCompletada(tareas, id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = true;
        console.log(`Tarea "${tarea.titulo}" marcada como completada.`);
    } else {
        console.log(`No se encontró una tarea con ID: ${id}.`);
    }
}

export function eliminarTarea(tareas, id) {
    const indice = tareas.findIndex(t => t.id === id);
    if (indice !== -1) {
        const tareaEliminada = tareas.splice(indice, 1)[0];
        console.log(`Tarea "${tareaEliminada.titulo}" eliminada con éxito.`);
    } else {
        console.log(`No se encontró una tarea con ID: ${id}.`);
    }
}
