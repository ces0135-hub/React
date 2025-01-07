import './App.css'
import TodoInsert from './components/ToDoInsert';
import TodoList from './components/ToDoList';

function App() {
  // 로직



  // view
  return (
    <div>
      {/* export default로 내보낸 컴포넌트 가져오기 */}
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App
