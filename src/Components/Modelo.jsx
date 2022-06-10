import React from "react";


function Modelo(props){
    const{marca,precio,cantidad,imagen} = props
    return(
        <div>
            <ul>
                
                <p>{marca}</p>
                <p>$ {precio}</p>
                <p>Cantidad disponible {cantidad}</p>
                <p>{imagen}</p>
                <button type="button">Comprar</button>
                <button type="button">Ver Detalle</button>
            </ul>
        </div>
    )
}

export default Modelo

