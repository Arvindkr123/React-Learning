import React from 'react'

function User(props){
    const data = {name:'Arvind Kumar', email:`thakurarvindkr10@gmail.com`}
    return(
        <div>
            {/* <h1>User Name : </h1> */}
            <button onClick={()=>props.alert(data)}>Click Me</button>
        </div>
    )
}

// function User(props) {
//   return (
//     <div>
//       <h1>User Name : {props.name} </h1>
//       <button>Click Me</button>
//     </div>
//   )
// }

export default User
