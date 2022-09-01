import html from "../library/core.js";

function TodoItem({ todo, index, editIndex }){
    return html`
        <li class="${todo.completed && "completed"} ${editIndex == index && 'editing'}" >
            <div class="view">
                <input 
                    class="toggle" type="checkbox" 
                    ${todo.completed && "checked"}
                    onchange= "dispatch('TOGGLE', ${index})"
                >
                <label ondblclick="dispatch('EDITING', '${index}')">
                    ${todo.title}
                </label>
                <button
                    class="destroy"
                    onclick= "dispatch('DESTROY',${index})">
                </button>
            </div>

            <input 
                class="edit" 
                value="${todo.title}"
                onkeyup = "event.keyCode === 13  && dispatch('EDITED', this.value.trim()) || 
                            event.keyCode === 27 && dispatch('CANCEL_EDIT')"
                onblur = "dispatch('EDITED', this.value.trim())"
            >
        </li>
    `
}

export default TodoItem