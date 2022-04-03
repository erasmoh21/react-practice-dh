import histories from './data.json'

export default function buscarHistoriaPorId(id="",contador=0) {
    const data = JSON.parse(JSON.stringify(histories)) 
    if(contador-1 === 0) {
        return data[0].historia
    }
    const idHistoria = contador+id.toLowerCase();

    const history = data.find(historia => {
        return idHistoria === historia.id
    
    })

    return history.historia
}