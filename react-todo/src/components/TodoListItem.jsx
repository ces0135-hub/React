function ToDOListItem({ todo, onDelete }) {
    return ( 
        <div>
            <span>{todo.id}.{todo.text}</span>
            <button onClick={ () => onDelete(todo.id) }>삭제</button>
        </div> 
     );
}

export default ToDOListItem;