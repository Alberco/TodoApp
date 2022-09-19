import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "../hooks/useFormulario";

export const Formulario = ({agregarTodo}) => {

    const initialState = {
        nombre : "",
        descripcion : "",
        estado :"pendiente",
        prioridad : false
    }

    const [inputs,handleChange,reset] = useFormulario(initialState)

/*     const [todo,setTodo] = useState(initialState) */

    const {nombre,descripcion,estado,prioridad} = inputs

/*     const handleChange = (e) =>{
        const { name , value,checked,type} = e.target
        setTodo((old)=>({
            ...old,
            [name] : type === "checkbox" ? checked : value
        }))
    }; */

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!nombre.trim()){
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              });
            return
        }

        if(!descripcion.trim()){
            e.target[1].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripcion en blanco',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              });
            return
        }
        Swal.fire({
            title:'Good job!',
            text:'Tarea agregada',
            icon:'success',
            confirmButtonText:'cerrar'
        });

        agregarTodo({
            nombre:nombre,
            descripcion:descripcion,
            estado:estado === 'pendiente' ? false : true,
            prioridad :prioridad,
            id : uuidv4()
        })

        reset();

/*         const datos = {nombre:'hyde',apellido:'straiker'}
        const fundatos = (datos) =>({
            ...datos,nombre:'pendiente'
        })
        console.log(fundatos(datos))
 */
    };

    return (
        <>
            <h2>Agregar Todo</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-control mb-2"
                    name="nombre" 
                    placeholder="Ingrese task nombre"
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea 
                    name="descripcion" 
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2"
                    cols="30" 
                    rows="10"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select 
                    name="estado" 
                    className="form-control mb-2"
                    value={estado}    
                    onChange={handleChange}
                >
                    <option value="pendiente">pendiente</option>
                    <option value="completado">completado</option>
                </select>

                <div className="form-check mb-2">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name="prioridad" 
                        checked={prioridad}
                        id="flexCheckDefault"
                        onChange={handleChange} 
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault">
                        Prioritario
                    </label>
                </div>

                <button 
                    className="btn btn-primary"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
