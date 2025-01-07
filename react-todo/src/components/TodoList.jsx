import ToDOListItem from "./TodoListItem";

// App.jsx로 todos를 옮겨서, TodoList에서 받아와서 사용
function TodoList({ todos, onDelete, onToggle }) {
    return ( 
        <>
            <ul>
                {/* 반복문으로 출력하기 => 화면에 TodoListItem 나타내기 */}
                {/* { todos.map((item) => (<li>{item.text}</li>)) } 중괄호 잘 써주기! */}
                {todos.map( (todo) => (  /* 반복적인 요소들은 key 값이 필요함 */
                    <ToDOListItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle}/>
                ))}
                
            </ul>
        </>
     );
}

// 생성한 컴포넌트 내보내기
export default TodoList;