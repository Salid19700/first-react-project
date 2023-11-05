function ListItem({id, name}){
    function onClickItem(name, id){
        console.log(name);
        alert(`${id}-${name}`)
    }
    return(
        /*<li onClick={onClickItem}>{id}-{name.toUpperCase()}</li>*/
        <li onClick={() => onClickItem(name,id)}>{id}-{name.toUpperCase()}</li>

    )
};

export default ListItem;