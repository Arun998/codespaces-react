import React,{useState} from 'react'

const TodoList = () =>{
const[text,setText]=useState({fname:"",id:""})
const[list,setList]=useState([])
const [editingItem, setEditingItem] = useState({
    id: "",
    isEditing: false,
  });
const handleChange =(e)=>{
    setText({
        ...text,
        fname:e.target.value,
        id:new Date().getTime().toString()
    })

}
const handleClick =(e)=>{
    e.preventDefault()
    setList([
        ...list,
        text
    ])
    setText({fname:"",id:""})
}
const handleDelete =(id)=>{
   var newTodos= list.filter(eachitem=>eachitem.id!==id);
    console.log(newTodos);
    setList(newTodos)
}
const handleEdit = (id)=>{
    
    setEditingItem({
        ...editingItem,
        id:id,
        isEditing:true

    })
    let editableItem = list.find((eachItem) => eachItem.id === id);
    setText({
      ...text,
      fname: editableItem.fname,
      id: editableItem.id,
    });
   
}
const handleEditForm = (e)=>{
    e.preventDefault()
    console.log("previous todos", list);
    let newTodos = list.map((eachItem) => {
        if (eachItem.id === editingItem.id) {
          return {
            fname: text.fname,
            id: editingItem.id,
          };
        } else {
          return eachItem;
        }
      });
      console.log(newTodos)
      setList(newTodos);
      setText({
        fname: "",
        id: "",
      });
    setEditingItem({
        ...editingItem,
        isEditing:false

    })
}

    return(
        <>
        <h1>TodoList</h1> <br />
       
        <div>
            <input type="text" value={text.fname} onChange={handleChange} />
            {editingItem.isEditing ? (
          <button onClick={handleEditForm} type="submit">
            edit
          </button>
        ) : (
          <button onClick={handleClick} type="submit">
            add
          </button>
        )}
        </div>
        {(list.length===0)&&<h1>items are empty</h1>
        
    }
        <ul>
            {list.map(item=>(
            <li key={item.id}>{item.fname}
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                <button onClick={()=>handleEdit(item.id)}>Edit</button>
            </li>))}
        </ul>
        </>
    )
}
export default TodoList
