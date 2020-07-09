import { Todo } from ".";

export class TodoList {

    constructor() {

        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {

        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        for(const todo of this.todos) {
            if(todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.eliminarCompletados);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        // Se utiliza JSON para convertir el arreglo en un Objeto "abierto" que contiene Strings.
        localStorage.setItem('todos' , JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todos')) 
                     ? JSON.parse(localStorage.getItem('todos')) 
                     : [];
        //this.todos = this.todos.map( obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson)
    }
}