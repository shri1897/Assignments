const templateListItem =
`
    {{#items}}
        <div class="list-item {{#todoStatus}}done-class{{/todoStatus}}" todo-id="{{todoID}}" >
            <input type="checkbox" class="check-box" todo-action="select-item" {{#todoChecked}}checked{{/todoChecked}}>
            <p todo-action="todo-text">{{todoText}}</p>
            <button class="btn-done"  todo-action="mark-done"  style="color: rgb(0, 139, 139);">Done</button>
            <button class="btn-delete" todo-action = "delete-item" style="color: rgb(255, 81, 81);">X</button>
        </div>
    {{/items}}
`;
export { templateListItem };