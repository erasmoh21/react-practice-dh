import opciones from './data.json'

export default function buscarOpcionPorId(letraOpcion='',id='') {
    const data = JSON.parse(JSON.stringify(opciones))

    const opcion = data.find(opcion => id === opcion.id)

    if(letraOpcion === 'a') {
        return opcion.opciones.a
    }

    return opcion.opciones.b
}