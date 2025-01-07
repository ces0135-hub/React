function TodoInsert({ onInsert }) {
    const onSubmit = (e) => {
        onInsert();
       e.preventDefault();  // 입력시 새로고침 돼서 사리지는 것 방지
    };

    return ( 
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="할일을 입력하세요."/>
            <button type="submit">입력</button>
        </form>

     );
}

// 생성한 컴포넌트 내보내기
export default TodoInsert;