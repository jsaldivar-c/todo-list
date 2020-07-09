export class Todo {

    static fromJson ({id, tarea, completado, creado}) {

        const tempTodo = new Todo (tarea);

        tempTodo.id         = id;
        tempTodo.creado     = creado;
        tempTodo.completado = completado;

        return tempTodo;
    }
    constructor(tarea) {

        this.id         = new Date().getTime();
        this.tarea      = tarea;
        this.creado     = new Date();
        this.completado = false;
    }

    imprimirClase() 
    {
        console.log(`${ this.tarea } - ${this.id}`);
    }
}