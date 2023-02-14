import React from "react";
import { useState } from "react";
//import  {  sweetAlertPositivo,sweetAlertCandidato } from '../sweetAlert/Alerta'
const Formulario = () => {
    const respuesta='no'
    const [preguntaUno, setPreguntaUno] = useState("");
    const [preguntaDos, setPreguntaDos] = useState("");
    const [preguntaTres, setPreguntaTres] = useState("");
    const [preguntaCuatro, setPreguntaCuatro] = useState("");
    const [preguntaCinco, setPreguntaCinco] = useState("");
    const [preguntaSeis, setPreguntaSeis] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            [preguntaUno,
            preguntaDos,
            preguntaTres, 
            preguntaCuatro ,
            preguntaCinco, 
            preguntaSeis].includes('')
        ) {
            // sweetAlertPositivo()
            alert('Todos los campos son necesario')

        } else{
            alert('Positivo')
        }

   
    };
    return (
        <>
         
            <form  className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="preguntaUno"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        ¿Tiene Contacto Deficiente con los ojos he inclina la cabeza hacia un angulo determinado?
                    </label>
                    <select
                        value={preguntaUno}
                        onChange={(e) => setPreguntaUno(e.target.value)}
                    >
                        <option value=''>--Seleccione Opcion--</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="preguntaUno"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        ¿Reacciona de manera extraña cuando percibe ruidos fuertes como podria ser el ruido de una aspiradora?
                    </label>
                    <select
                        value={preguntaDos}
                        onChange={(e) => setPreguntaDos(e.target.value)}
                    >
                        <option value=''>--Seleccione Opcion--</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="preguntaUno"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        ¿Sus expresiones Faciales no coinciden con la o las situcaiones en el momento?
                    </label>
                    <select
                        value={preguntaTres}
                        onChange={(e) => setPreguntaTres(e.target.value)}
                    >

                        <option value=''>--Seleccione Opcion--</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="preguntaUno"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        ¿Tiene dificultad de aprendizaje?
                    </label>
                    <select
                        value={preguntaCuatro}
                        onChange={(e) => setPreguntaCuatro(e.target.value)}
                    >
                        <option value=''>--Seleccione Opcion--</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="preguntaUno"
                        className="block text-gray-700 uppercase font-bold"
                    >¿Con frecuencia habla con un lenguaje dificil de comprender?
                    </label>
                    <select
                        value={preguntaCinco}
                        onChange={(e) => setPreguntaCinco(e.target.value)}
                    >
                        <option value=''>--Seleccione Opcion--</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="preguntaUno"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        ¿Su conducta es himperactiva,impulsiva y/o distraida?
                    </label>
                    <select
                        value={preguntaSeis}
                        onChange={(e) => setPreguntaSeis(e.target.value)}
                    >
                        <option value=''>--Seleccione Opcion--</option>
                        <option>Si</option>
                        <option>No</option>
                    </select>
                </div>
                <input
                    type="submit"

                    className="bg-indigo-600 w-full text-white uppercase font-bold hover:bg-indigo-700 
                   cursos-pointer transition-colors p-3 rounded-lg"
                    value="Test"
                />
            </form>
        </>
    );
};

export default Formulario;