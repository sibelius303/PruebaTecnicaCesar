import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'


function FormHabilidades() {
    const [input, setInput] = useState("");
    const [skils, setSkils] = useState([]);
    const handleAgregar = (e) => {
        let copia = [...skils];
        copia.push(input)
        setSkils(copia);
        console.log(skils);
        setInput("");
    }
    const handleChange = (e) => {
        let value = e.target.value;
        setInput(value)
    }
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-lg shadow-md md:w-3/4 mx-auto'>
            <div>
                <h1 className='text-center text-slate-600 uppercase font-bold text-3xl'>Habilidades</h1>
            </div>
            <div className='my-20'>
                <label
                    htmlFor='skils'
                    className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                >  
                    Ingrese sus habilidades de programacion  
                </label>
                <input
                    name="skils"
                    id="skils"
                    type="text"
                    value={input}
                    onChange={(e) => { handleChange(e) }}
                    className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                />

            </div>
            <div>
            {skils ? (
                        <table class="bg-white text-slate-600 w-full shadow-none">
                        <thead>
                            <tr>
                                <th class="bg-slate-400 text-white p-2">Habilidades</th>
                            </tr>
                        </thead>
                        <tbody>
                        {skils.map((habilidad, id) => {
                    return (
                        <tr class="bg-blue-100 text-blue-900">
                                <td class="p-2" key={id}>{habilidad}</td>
                            </tr>            
                    )
                })}  
                        </tbody>
                    </table>
                                ) : null}
            </div>
            <div className='flex justify-end'>
                <button className=' px-8 py-3 font-semibold rounded-md mt-10  bg-blue-900  text-white justify-end' onClick={(e) => { handleAgregar(e) }}> Cargar </button>
            </div>
        </div>

    )
}

export default FormHabilidades