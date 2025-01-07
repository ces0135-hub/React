import './App.css'
import TodoInsert from './components/ToDoInsert';
import TodoList from './components/ToDoList';
import { useRef, useState } from 'react';
import ToDOListItem from './components/TodoListItem';

function App() {
  // 로직
  const [todos, setTodos] = useState([
    {
        id: 1,
        text: "공부",
        checked: true,
    },
    {
        id: 2,
        text: "운동",
        checked: true,
    },
    {
        id: 3,
        text: "명상",
        checked: false,
    },
]); // []의 첫 번째는 data, 두 번째는 setter 함수를 자동적으로 배정(구조분해 할당 )

const nextId = useRef(4);
// 단순히 let nextId = 4;를 사용하면 컴포넌트가 리렌더링될 때마다 nextId는 항상 초기값인 4로 다시 설정됨
// console.log(nextId.current);


// 추가
const onInsert = (text) => {
  setTodos(
    todos.concat([
      {
        id: nextId.current, // nextId.current가 숫자 값
        text: text,
        checked: false,
      }
    ])
  )
  nextId.current++  // id 증가
}

// 삭제
const onDelete = (id) => {
  // .filter()는 조건에 맞는 부분만 넘김
  setTodos(todos.filter( todo => todo.id != id))  // 삭제할 id가 아니라면 넘겨라!
}

// 체크박스
const onToggle = (id) => {
  setTodos(
    todos.map( (todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo  // 가져온 id가 일치한다면 checked 값을 toggle
    )
  )
};


  // view
  return (
    <div>
      {/* export default로 내보낸 컴포넌트 가져오기 */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default App
