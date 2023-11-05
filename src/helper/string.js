export function upperCase(text) {
    return text.toUpperCase();
}

export function length(text){
    return text.length;
}

export default function capitalize(str){
    const array = str.split(" ");
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    const join = array.join(" ");
    console.log(join);
    return join; 
}
