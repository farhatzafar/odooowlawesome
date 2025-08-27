import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { useAutofocus } from "./use_autofocus";

export class TodoList extends Component {

    static template = "awesome_owl.todo_list";

    static components = { TodoItem };

    setup() {
        this.todos = useState([]);
        this.index = 0;
        useAutofocus("input");
    }
}

addTodo(ev) {
    if (ev.keyCode === 13 && ev.target.value != "") {
            this.todos.push({
                id: this.index++,
                description: ev.target.value,
                isCompleted: false,
            });
            ev.target.value = "";
        }
}

toggleTodo(todoId) {
        const todo = this.todos.find((todo) => todo.id === todoId);
        if (todo) {
            todo.isCompleted = !todo.isCompleted;
        }
    }