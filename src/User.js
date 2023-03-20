import React from "react";
class User extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'arvind@test.com'
        }
    }
    render() {
        console.log('Render method ', this.state.email);
        return (
            <div>
                <summary>
                    <dfn>Why Render Method is used</dfn>
                    <details>Render method can be used to repersent the our data
                        It can be used when the state change or props
                        and Component created
                    </details>
                </summary>
                <h1>User Component {this.state.email}</h1>
                <button onClick={() => this.setState({ email: 'thakur@test.com' })}>Update Email</button>
            </div>
        )
    }
}
// class User extends React.Component{ 
//     render(){
//         console.log('Render Method', this.props);
//         return(
//             <div>
//                 <h1>User Component {this.props.name}</h1>
//             </div>
//         )
//     }
// }

export default User;