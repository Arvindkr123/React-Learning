import React from 'react'

class Student extends React.Component {
    componentWillUnmount(){
        alert('Component will unmount called')
    }
    render() {
        return (
            <div>
                <h1>Student Component</h1>
            </div>
        )
    }
}

export default Student
