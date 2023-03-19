import React from "react";

class Student extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div style={{backgroundColor:'skyblue'}}>
                <h1>Hello {this.props.name}</h1>
                <h3>Hello {this.props.email}</h3>
            </div>
        )
    }
}

export default Student;