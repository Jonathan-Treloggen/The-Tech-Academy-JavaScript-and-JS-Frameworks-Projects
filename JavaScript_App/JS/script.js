class Model {
    constructor() {
        // The state of the model, an array of todo objects, prepopulated with some data
        this.todos = [
            {id: 1, text: 'Run a marathon', Complete: false},
            {id: 2, text: 'Plant a garden', Complete: false},
        ];
    };

    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length -1].id + 1 : 1,
            text: todoText,
            Complete: false,
        };

        this.todos.push(todo);
    };

    // Map through all todos, and replace the text of the todo with the specified id
    editTodo(id, updatedText) {
        this.todos = this.todos.map((todo) =>
        todo.id === id ? {id: todo.id, text: updatedText, Complete: todo.Complete} : todo,
        );
    };

    // Filter a todo out of the array by id
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    };

    // Flip the vomplete boolean on the specified todo
    togleTodo(id) {
        this.todos = this.todos.map((todo) =>
        todo.id === id ? {id: todo.id, text: todo.text, Complete: !todo.Complete} : todo,
        );
    };
};

class View {
    constructor() {}
};

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
};

const app = new Controller(new Model(), new View());