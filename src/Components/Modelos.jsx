import React, { useState, useEffect } from "react"
import Modelo from "./Modelo"
import { getAllModelos } from '../Services/modelosServices'
import Row from "react-bootstrap/Row"
import Loading from "./Loading"

function Modelos() {
    const [loading, setLoading] = useState(true)
    const [modelos, setModelos] = useState([])
    const [buscar, setBuscar] = useState('Gibson')

    useEffect(
        () => {
            const request = async () => {
                try {
                    const response = await getAllModelos(buscar)
                    console.log(response)
                    setModelos(response)
                    //setModelos(response.results)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }

            }
            request()
        },
        [buscar]
    )
    const handleChange = (event) => {
        const value = event.target.value
        setBuscar(value)
    }
<<<<<<< HEAD
    const titulo = "PRODUCTOS"
    return(
=======

    const titulo = "PRODUCTOS"
    return (
>>>>>>> eb837fa09b036c5a129574684c3c62165c91d847
        <Loading loading={loading} configuration={{variant:"danger"}}>
            <div>
                <h3>{titulo}</h3>
                <input value={buscar} onChange={handleChange}></input>
                <Row>
                    {modelos.map(productoData => <Modelo key={productoData.id} data={productoData.data()} id={productoData.id} />)}
                </Row>
            </div>
<<<<<<< HEAD
            </Loading>
        )
    }


=======
        </Loading>
    )
}
>>>>>>> eb837fa09b036c5a129574684c3c62165c91d847
export default Modelos



