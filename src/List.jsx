import ListItem from "./ListItem"

function List({title,students}) {
    
    return (
        <>
            <h1>{title}</h1>
            <ul className="list">
                {students.map(function(item){
                   return <ListItem key={item.id} name={item.name} id={item.id} />
                })}
            </ul>
            
        </>
    );
}

export default List;