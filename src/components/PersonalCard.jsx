import React, { Component } from "react";

class PersonalCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age: props.age };
    }
    sumarEdad = () => {
        this.setState({ age: this.state.age + 1 })
    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        return (
            <div className="contenedor">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.sumarEdad}>Birthday button for {firstName} {lastName}</button>
            </div>
        );
    }
}
export default PersonalCard;