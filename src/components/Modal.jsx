import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ modal, setModal, animarModal, setAnimarModal }) => {
    const ocultarModal = () => {

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);

    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto</label>
                    <input
                        id="nombre"
                        type='text'
                        placeholder='Añade el nombre del gasto'
                    />
                </div>

                <div className='campo'>
                    <label htmlFor='cantidad'>Nombre Gasto</label>
                    <input
                        id="cantidad"
                        type='number'
                        placeholder='Añade la cantidad de gasto'
                    />
                </div>

                <div className='campo'>
                    <label htmlFor='categoria'>Filtro Gasto</label>
                    <select
                        id="categoria"
                    >  
                        <option value="">-- Seleccionar --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="varios">Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type='submit'
                    value="añadir Gastos"
                />
            </form>
        </div>
    )
}

export default Modal
