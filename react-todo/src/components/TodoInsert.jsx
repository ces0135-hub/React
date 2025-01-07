import { useState } from "react";

function TodoInsert({ onInsert }) {
    const [text, setText] = useState('');

    const onChange = (e) => {
        // console.log(e.target.value); // 입력한 데이터 가져오기: e.target.value
        setText(e.target.value);
    }


    const onSubmit = (e) => {
        onInsert(text);
        setText("");  // 입력후 입력창 초기화
       e.preventDefault();  // 입력시 새로고침 돼서 사리지는 것 방지
    };



    
    return ( 
        <form onSubmit={onSubmit}>
            <input type="text" value={text} placeholder="할일을 입력하세요." onChange={onChange}/>
            <button type="submit">입력</button>
        </form>

     );
}

// 생성한 컴포넌트 내보내기
export default TodoInsert;