import React,{Component} from 'react'

export default class SeleccionAnterior extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <p> Seleccion anterior: {this.props.opcionAnterior.toUpperCase()}</p>
            </div>
        )
    }
}