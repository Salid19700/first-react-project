export default function ListWrapper({children, title = "default Title"}){
    
    return(
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    )
};

