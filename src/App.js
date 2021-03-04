import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {

    list:[
      {task: 'Todo 1', status: true},
      { task:'Todo 2', status: false},
      {task:'Todo 3', status: true}
    ],
    text: ''
  }

  handleTextChange = (e)=>{
    console.dir(e.target.value)
    this.setState({text: e.target.value}); //merge obj เข้าไปในtext
  }
  handleAdd = () => {
   // const newList = [...this.state.list];
    
    this.setState({

      list: [...this.state.list, {task: this.state.text, status: false }],
      text: '',
    })
  };
  handleEdit = (indexToEdit) => {
    this.setState({
      list: this.state.list.map((item, index)=>
      indexToEdit === index ? {...item, task: indexToEdit}: item
      ),
    });
  //  const textToEdit =  prompt('Enter task');
  //  const newList = [...this.state.list];
  //  newList[indexToEdit].task = textToEdit

  //  this.setState({

  //    list: newList,
  //  })
  };

  handleDelete = (indexToDelete) => {
    this.setState({
      list: [...this.state.list].filter((item, index)=> index !== indexToDelete) //เอาindexที่ไม่ตรงส่งออกกลับไป
    });
  };

  handleToggleStatus = (indexToToggle) =>{

    const newList = [...this.state.list];
    newList[indexToToggle].status = !newList[indexToToggle].status;
    this.setState({
      list: newList,
    })
  }
  render() {
    
    return (

    <div>
      <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
      <button onClick={this.handleAdd}>Add</button>

      <ul>
        { this.state.list.map((item, index)=>(
          <li key={index}>
            <span style={{marginRight: '20px', 
            textDecoration: item.status? 'line-through': 'none'}}
            onClick={()=> this.handleToggleStatus(index)}> {item.task}
            </span><button onClick={()=> this.handleEdit(index)}>Edit</button><button onClick={ () =>this.handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
    )
  }
}


export default App;
