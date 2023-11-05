import "./ListWrapper.css";
import {upperCase} from "../../helper/string"

export default function ListWrapper({children, title = "default Title"}){
    
    return(
        <div>
            <h1 className="title">{upperCase(title)}</h1>
            {children}
        </div>
    )
};

