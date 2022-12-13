import React, { useState } from 'react';
import { Formik, Form, Field, validateYupSchema } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import useApp from '../Hooks/UseApp';


function FormHabilidades() {
    const {  setUserSkills, userSkills } = useApp();
    const navigate = useNavigate();
    // const validationSchema = Yup.object().shape({
    //     skills: Yup.array().of(
    //         Yup.object().shape({
    //             habilidad:  Yup.string().required("Agregue por lo menos un Skills")
    //         })
    //     )
    //   })

    return (
        <div className=" gradient w-screen h-full">
            <p className="text-white leading-10 block py-20 uppercase tracking-wide font-bold mb-2 text-4xl text-center md:text-6xl">Escoge tus habilidades <h3 className='text-yellow-400 mt-20 text-4xl md:text-6xl'> Skills</h3></p>
            <Formik
                initialValues={{
                    skills: []
                }}
                // validationSchema={validationSchema}
                onSubmit={(valores) => {
                    setUserSkills(valores.skills);
                    navigate('/perfil')
                }}

            >{({ values, handleSubmit, errors }) => (
                <form onSubmit={handleSubmit}>
                    <ul className="grid grid-cols-1 gap-6 w-full px-10 mt-5 md:grid-cols-2">
                        <li>
                            <Field type="checkbox" id="react-option" value="React Js" className="hidden peer" name="skills" />
                            <label htmlFor="react-option" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-600 peer-checked:border-4 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <svg className="mb-2 w-7 h-7 text-sky-500" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </svg>
                                    <div className="w-full text-lg font-semibold">React Js</div>
                                </div>
                            </label>
                        </li>
                        <li>
                            <Field type="checkbox" id="flowbite-option" value="Vue Js" className="hidden peer" name="skills" />
                            <label htmlFor="flowbite-option" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-600 peer-checked:border-4 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div class="block">
                                    <svg className="mb-2 w-7 h-7 text-green-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" /></svg>
                                    <div className="w-full text-lg font-semibold">Vue Js</div>

                                </div>
                            </label>
                        </li>
                        <li>
                            <Field type="checkbox" id="angular-option" value="Angular" className="hidden peer" name="skills" />
                            <label htmlFor="angular-option" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-600 peer-checked:border-4 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <svg className="mb-2 w-7 h-7 text-red-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" /></svg>
                                    <div className="w-full text-lg font-semibold">Angular</div>

                                </div>
                            </label>
                        </li>
                        <li>
                            <Field type="checkbox" id="boostrap-option" value="Boostrap 5" className="hidden peer" name="skills" />
                            <label htmlFor="boostrap-option" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-600 peer-checked:border-4 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <div className="w-full text-lg font-semibold">Boostrap 5</div>

                                </div>
                            </label>
                        </li>
                        <li>
                            <Field type="checkbox" id="python-option" value="Python" className="hidden peer" name="skills" />
                            <label htmlFor="python-option" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-600 peer-checked:border-4 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <div className="w-full text-lg font-semibold">Python</div>

                                </div>
                            </label>
                        </li>
                        <li>
                            <Field type="checkbox" id="javascript-option" value="JavaScript" className="hidden peer" name="skills" />
                            <label htmlFor="javascript-option" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-yellow-600 peer-checked:border-4 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <div className="block">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <div className="w-full text-lg font-semibold">JavaScript</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                    <div className="flex justify-between py-5 px-10 ">
                        <button className="px-8 py-5 font-semibold rounded-md my-10  bg-blue-900  text-white" onClick={()=>{navigate('/registro')}} >Atras</button>
                        <button className="px-8 py-5 font-semibold rounded-md my-10  bg-blue-900  text-white" type="submit">Cargar</button>
                    </div>

                </form>
            )}</Formik>
        </div>
    )
}

export default FormHabilidades