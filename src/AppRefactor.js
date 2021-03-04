import Header from "./Components/Header"
import Container from "./Components/Container"
import ListItem from "./Components/ListItem"
import { useEffect, useState } from "react"


function AppReFactor() {

    const [list, setList] = useState([
        {task: 'Todo 1', status: true},
        {task:'Todo 2', status: false},
        {task:'Todo 3', status: true},
    ]);
    const handleAdd = (newItem)=> {
        //เอา newItem มารับ {task: text, status: false}
        setList([...list, newItem]); //...list เอาข้อมูลเก่ามารับข้อมูลใหม่
        //setText('')
    }
    const handleDelete = (indexToDelete) => {
        setList(list.filter((item, index)=> index !== indexToDelete))
    }
    const handleEdit = (indexToEdit) => {
        const textToEdit = prompt('Enter task');
      setList(list.map((item, index)=> indexToEdit === index? {...item, task: textToEdit}: item))
     
    };
    const handleToggleStatus = (indexToToggle) => {
        setList(list.map((item, index)=> indexToToggle === index? {...item, status: !item.status}: item))  
    }
    return (    

        <div>
        {/* <Header list={list} setList={setList}/>  */}
        {/* อีกวิธี เพราะมี list แล้วsetในhandleAddแล้ว*/}
        <Header handleAdd={handleAdd}/> 
        {/* ส่ง props ที่ชื่อว่า list setList เป็นฟังชั่น เข้ามา */}
        <Container handleToggleStatus={handleToggleStatus} handleEdit={handleEdit} handleDelete={handleDelete} list={list}/>
        </div>
    )
}

export default AppReFactor;