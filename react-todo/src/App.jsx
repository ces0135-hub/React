import './App.css'
import TodoInsert from './components/ToDoInsert';
import TodoList from './components/ToDoList';
import { useState } from 'react';

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

const onInsert = () => {
  setTodos(
    todos.concat(
      {
        id: 4,
        text: "입력 테스트",
        checked: false,
      }
    )
  )
}

  // view
  return (
    <div>
      {/* export default로 내보낸 컴포넌트 가져오기 */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App
