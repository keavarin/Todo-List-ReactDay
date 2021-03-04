import ListItem from "./ListItem"
function Container(props){
    console.log(props)

    return(
    <ul>
        {props.list.map((item, index)=> (
        <ListItem key={index} item={item} 
        handleDelete={props.handleDelete} 
        index={index} 
        handleEdit={props.handleEdit}
        handleToggleStatus={props.handleToggleStatus}/>
        ))}
    </ul>
    );
}
export default Container;