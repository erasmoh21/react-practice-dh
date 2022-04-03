import React,{Component} from 'react';
import Swal from 'sweetalert2';
import histories from '../helpers/data.json'; 
import BottonOptionA from './BottonOptionA.js';
import BottonOptionB from './BottonOptionB.js'
import SeleccionAnterior from './SeleccionAnterior.js';
import insertarOpcionEnArreglo from '../helpers/insertarOpcionesEnArreglo.js';
import buscarHistoriaPorId from '../helpers/buscarHistoriaPorId.js';
import buscarOpcionPorId from '../helpers/buscarOpcionPorId.js'

export default class History extends Component {
   constructor(props) {
      super(props);
      this.state = {
         histories : JSON.parse(JSON.stringify(histories)),
         contador: 1,
         id: '',
         listaDeOpciones:[]
      }
   }

   componentWillUnmount() {
      Swal.fire({
         title: 'Desea comenzar de nuevo ?',
         icon:'question',
         showCancelButton: true,
         cancelButtonText:'No',
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Si'
      }).then(async(result) => {
         if(result.isConfirmed) {
            await Swal.fire({
               position: 'center',
               icon:'success',
               title: 'Volveras al principio',
               showConfirmButton: false,
               timer: 2000 
            })
            window.location.reload()
         }
         else {
            window.location.reload()
         }
      })
   }

   aumentarContador = () => {
      this.setState({contador: this.state.contador+1})
   }

   mostrarIdHistoria = (id) => {
      this.setState(() => {return {id:id}})
      const arr = insertarOpcionEnArreglo(id,this.state.listaDeOpciones)
      this.setState({arr})
   }

   render() {
      if(this.state.contador !== 6) {
         return (
            <div className="historia">
               <div>
                  <h3 className='tituloHistoria'>{buscarHistoriaPorId(this.state.id,this.state.contador)}</h3>
               </div>
               <div className='opciones'>
                  <div className='opcion' >
                     <BottonOptionA  option='A' aumentarContador={this.aumentarContador} mostrarIdHistoria={this.mostrarIdHistoria}/>

                     <h2>{buscarOpcionPorId('a',this.state.contador+this.state.id)}</h2>
                  </div>

                  <div className='opcion'>
                     <BottonOptionB  option='B' aumentarContador={this.aumentarContador} mostrarIdHistoria={this.mostrarIdHistoria}/>

                     <h2>{buscarOpcionPorId('b',this.state.contador+this.state.id)}</h2>
                  </div>
               </div>

               <div className='seccionEstadisticas'>
                  <SeleccionAnterior opcionAnterior={this.state.id}/>
                  <div>
                     <p>Historial de opciones elegidas: </p>
                     <ul>
                        {
                           this.state.listaDeOpciones.map((elemento,index) => {
                              return <li key={index}>{elemento.toUpperCase()}</li>
                           })
                        }
                     </ul>
                  </div>
               </div>
            </div>
         );
      }
   }
}