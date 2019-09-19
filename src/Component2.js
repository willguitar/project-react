import React, { Component } from "react";

export default class Component2 extends Component {
    render() {
        return (
            <>
            <h1>Nome:{this.props.nome}</h1>
            <h2>Idade:{this.props.idade}</h2>
            </>
        )
    }
}