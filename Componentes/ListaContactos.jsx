import { useState, useEffect } from 'react';
import './ListaContactos.css'

const ListaContactos = () =>{
    const URL = "http://www.raydelto.org/agenda.php";
    const [Contactos, setContactos] = useState([]);

    const cargar = async () => {
        try{ 
            const datos = await fetch(URL);
            const respuesta = await datos.json();
            setContactos(respuesta);
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        cargar()
    },[])
    
return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        <h2>Nombre</h2>
                    </th>
                    <th>
                        <h2>Apellido</h2>
                	</th>
                    <th>
                        <h2>Telefono</h2>
                    </th>
    	        </tr>
            </thead>
        <tbody id="cuerpo">
            {Contactos.length && Contactos.map((contacto) => {
                return (<tr>
                    <td>{contacto.nombre}</td>
                    <td>{contacto.apellido}</td>
                    <td>{contacto.telefono}</td>
                </tr>
                )
            })}
        </tbody>
        </table>
    </div>
)
}
export default ListaContactos