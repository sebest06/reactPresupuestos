import {useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, isValidPresupuesto,
    setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuest = (e) => {
        e.preventDefault();

        if(!presupuesto || Number(presupuesto) < 0) {
            setMensaje('No es un presupuesto valido')
            return
        }

        setMensaje("");
        setIsValidPresupuesto(true);
        


    }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input className='nuevo-presupuesto'
                type="number"
                placeholder='añade presupuesto'
                value={presupuesto}
                onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input type="submit" value="añadir" onClick={handlePresupuest}/>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto