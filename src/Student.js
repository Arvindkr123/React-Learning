

// function Student(props){
//     console.log(props.name);
//     return(
//         <div style={{backgroundColor:'skyBlue'}}>
//             <h2>Name : {props.name}</h2>
//             <h4>Email : {props.email}</h4>
//             <h4>Address : {props.other.address}</h4>
//             <h4>Phone : {props.other.phone}</h4>
//         </div>
//     )
// }
function Student(props) {
    console.log(props.name);
    return (
        <div style={{ backgroundColor: 'skyBlue' }}>
            <h2>Name : {props.name}</h2>
        </div>
    )
}

export default Student;