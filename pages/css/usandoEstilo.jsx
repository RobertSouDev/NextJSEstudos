import Estilo from "@/components/estilo"

export default ()=> {
    return (
        <div>
            <Estilo numero={3} color="#fff" direita />
            <Estilo numero={-1} color="white"/>
        </div>
    )
}

// ele vai considera o direita={True} e vai usa esses props