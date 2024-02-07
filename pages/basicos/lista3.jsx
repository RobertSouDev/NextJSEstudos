function gerarLista(final = 10){
    const lista = []

    for(let i = 1; i<= final; i++){
        if(i == 1){
            lista.push(<span>Começou {i},</span>)
        }else if (i == final){
            lista.push(<span>{i} Fim</span>)

        }else{
            lista.push(<span>{i},</span>)
        }
    }
    return lista
}

export default function lista(){
    return(
        <div>
            {gerarLista(20)}
        </div>
    )
}