import React from 'react'

const NuevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input className='nuevo-presupuesto'
                type="text"
                placeholder='añade presupuesto'/>
            </div>
            <input type="submit" value="añadir"/>
        </form>
    </div>
  )
}

export default NuevoPresupuesto