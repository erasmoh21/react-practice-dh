import React,{Component} from 'react'

export default class BottonOptionB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opcion: props.option,
            eventoClick: props.aumentarContador,
            mostrarIdHistoria: props.mostrarIdHistoria
        }
    }

    render() {
        return (
            <>
                <button className='botones' onClick={() => {
                    this.state.eventoClick()
                    this.state.mostrarIdHistoria(this.state.opcion.toLowerCase())
                }}>
                    {this.state.opcion}
                </button>
            </>
        )
    }
}