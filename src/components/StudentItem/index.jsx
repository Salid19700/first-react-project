import "./StudentItem.css";
import capitalize from "../../helper/string"
export default function StudentItem({firstName, lastName, age}){
    return(
        <div className="studentItem">
            <strong>First Name: </strong>{capitalize(firstName)}<br/>
            <strong>Last Name: </strong>{capitalize(lastName)}<br/>
            <strong>Age:</strong>{age}
        </div>
    );
}

