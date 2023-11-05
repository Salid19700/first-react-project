export default function ListWrapper({children}){
    console.log(children);
    return(
        <div>
            <h1>Coding Front</h1>
            {children}
        </div>
    )
};

