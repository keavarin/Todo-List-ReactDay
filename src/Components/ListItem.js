import { useState } from "react";


function ListItem({ item: {task, status}, handleDelete , index, handleEdit, handleToggleStatus}){ //destructuring จาก (props)
    const [edited, setEdited] = useState("")
    //ส่งค่าอีกวิธีเพื่อทำให้สั้นลง ทำให้อยู่ในฟังชั่น
    const onEdit =()=>{
        handleEdit(index)
    }
    const onToggle =()=>{
        handleToggleStatus(index)
    }
    
return <div>
    <li>
            <span 
            style={{marginRight: '20px', 
            textDecoration: status ? 'line-through': 'none',
            }}
            onClick={onToggle}> {task}
            </span>
            <button onClick={onEdit}>Edit</button>
            <button onClick={()=> handleDelete(index)}>Delete</button>
            {/* ใส่ท่านี้คือยังไม่ถูกเรียกใช้ */}
    </li>    
</div>
}
export default ListItem;