import React ,{Component} from 'react'
import BottonOption from './BottonOption.js'

export default class Options extends Component {
    constructor(props) {
        super(props)
        this.state = {
            option1: props.option1,
            option2: props.option2,
            contador: props.contador
        }
    }

    render() {
        return (
            <div className='opcion'>
                <BottonOption option={this.state.option1} tipoDeRespuesta={this.state.contador+"a"}/>
                <BottonOption option={this.state.option2} tipoDeRespuesta={this.state.contador+"b"}/>
            </div>
        )
    }
} 