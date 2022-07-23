import './Form.css'

const guardar = async (props) => {
    const URL = "http://www.raydelto.org/agenda.php";
    const contacto = {
        nombre: props.nombre,
        apellido: props.apellido,
        telefono: props.telefono
    };

    try { 
        const respuesta = await fetch(URL, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(contacto),
        });

        const data = await respuesta.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}



const Formulario = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const persona = {
            nombre: e.currentTarget.nombre.value,
            apellido: e.currentTarget.apellido.value,
            telefono: e.currentTarget.telefono.value
        }
        const enviar = await guardar(persona);

        if(enviar.exito){
            alert("Contacto agregado");
            
        }
    }

    return(
    <form className='form' onSubmit={handleSubmit}>
        <label> Nombre: </label>
        <input type="text" name="nombre" id="Nombre"  required/>
        <label> Apellido: </label>
        <input type="text" name="apellido" id="Apellido"  required/>
        <label> Numero: </label>
        <input type="text" name="telefono" id="Telefono"  required/>
        <input type="submit" value="Guardar" id = "boton"/>
    </form>
    )
}

export default Formulario;