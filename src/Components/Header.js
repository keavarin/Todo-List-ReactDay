 import { useState } from "react";

function Header(props) {

    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        // props.setList([...props.list, {task: text, status: false}]);
        //อีกวิธี
        props.handleAdd({ task: text, status: false}); //ส่งhandleAdd ผ่าน Propsที่มี{task: text, status: false} ที่เปนแบบนี้เพราะที่ Header มีtextอยู่แล้ว
        setText('')   //spread array list ออกมา เอา task: text , statusใส่เข้่าไป
        //เวลาจะกดAdd มันกดในheader
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <input type="text" value={text} onChange={handleTextChange}/>
            <button >Add</button>
        </form>
    );
    
}
export default Header;