import React, { useState } from "react";
function Profile() {
    const [loggedIn, setLoggedIn] = useState(2)
    // let loggedIn=1;
    return (
        <div>
            {
            loggedIn == 1 ? 
            <h1>Welcome User 1</h1> : 
            loggedIn == 2 ? <h1>Welcome User2</h1> :
             <h1>Welcome User 3</h1>}
        </div>
    )
}
// function Profile() {
//     const [loggedIn, setLoggedIn] = useState(true)
//         return (
//             <div>
//                 {loggedIn?<h1>Welcome Arvind</h1>:<h1>Welcome Guest</h1>}
//             </div>
//         )
// }
// function Profile() {
//     const [loggedIn, setLoggedIn] = useState(true)
//     if (loggedIn) {
//         return (
//             <div>
//                 {/* <h1>Profile Component</h1> */}
//                 <h1>Welcome Arvind</h1>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <h1>Welcome Guest</h1>
//             </div>
//         )
//     }
// }

export default Profile;