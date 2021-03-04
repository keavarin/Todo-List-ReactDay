
import { useEffect, useState } from "react"


function AppFunc() {

    const[list, setList] = useState([
        {task: 'Todo 1', status: true},
        {task:'Todo 2', status: false},
        {task:'Todo 3', status: true},
      ]);

    const [text, setText] = useState('');
    const handlerTextChange = (e) => {
        setText(e.target.value)
    }
    const handleAdd=()=>{
        setList([...list, { task: text, status: false}]);
        setText('')
    }

    const handleSubmitAddForm =(e)=>{
        e.preventDefault();
        setList([...list, {task: text, status: false}]);
        setText('')
    }

    const handleDelete=(indexToDelete)=>{
        setList(list.filter((item, index)=> index !== indexToDelete))
    }

    const handleEdit = (indexToEdit) => {
        const textToEdit =  prompt('Enter task');
      setList(list.map((item, index)=> indexToEdit === index? {...item, task: textToEdit}: item)) //map คือการmodify ค่าข้างใน
      //{...item, task: textToEdit} คือ {task:'Todo 3', status: true}, {task: textToEdit} เอาobject ข้างหลังมาทับตัวหน้า
    };

    const handleToggleStatus = (indexToToggle) => {
        setList(list.map((item, index)=> indexToToggle === index? {...item, status: !item.status}: item))  
    }
    return (
    
    <div>
    <form onSubmit={handleSubmitAddForm}>
      <input type="text" value={text} onChange={handlerTextChange}/>
      <button >Add</button>
      {/* <button onClick={handleAdd}>Add</button> */}
    </form>
      <ul>
          {list.map(({ task, status }, index)=>(  //{task} = item--> {task} = valueของtask
            <li key={index}>
            <span 
            style={{marginRight: '20px', 
            textDecoration: status? 'line-through': 'none'
            }}
            onClick={()=> handleToggleStatus(index)}> {task}
            </span><button onClick={()=> handleEdit(index)}>Edit</button>
            <button onClick={ () => handleDelete(index)} >Delete</button>
            </li>
          ))}
          
    
      </ul>

    </div>
    )
}
export default AppFunc;