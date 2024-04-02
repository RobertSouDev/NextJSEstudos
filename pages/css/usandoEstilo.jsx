import Estilo from "@/components/estilo";

export default function usandoEstilo(){
    return (
        <div>
             <Estilo numero={3}/>
             <hr />
             <Estilo numero={-1}  color={"yellow"} direita/>

        </div>
    )
}