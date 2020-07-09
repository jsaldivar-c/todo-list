import './styles.css';
// Importamos las clases del index.js (se omite en la ruta ya que lo toma por default)
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
console.log('todos', todoList.todos);

// Pruebas iniciales
// const tarea    = new Todo('Aprender JavaScript!!');
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);
//todoList.todos.foreach(todo => crearTodoHtml(todo));



