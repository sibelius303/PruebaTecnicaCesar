import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    const ValidarSchema = Yup.object().shape({
        email: Yup.string().email('Correo no valido').required('El correo es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria')

    })
    return (
        <div className="flex bg-current">
            <div className="text-center w-1/2">
                <div className="my-20">
                    <h3 className=" block text-yellow-300  uppercase tracking-wide font-bold mb-2 text-2xl">Binvenido a CoderSocial</h3>
                    <div className="flex justify-center my-10 text-xl text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                    </div>
                </div>
                <div>
                    <p className='text-white block  uppercase tracking-wide font-bold mb-2 text-lg'>Una red social para programadores, en busca de compartir conocimientos, trabajos y mucho mas...</p>
                </div>
            </div>
            <div className='w-1/2'>
                <div className="max-w-lg mx-auto my-10 md:mt-24 sm:mt-52 mt-36 bg-white p-8 rounded-xl shadow shadow-slate-300">
                    <h1 className="text-2xl font-medium text-center uppercase mb-5">Inicia Sesion</h1>
                    <p className="text-slate-500 text-center mb-3">Hola, Bienvenido de nuevo 👋</p>

                    <Formik
                        initialValues={{
                            email: " ",
                            password: ""

                        }}
                        enableReinitialize={true}
                        onSubmit={(values) => {
                            console.log(values)
                            console.log('enviando....')

                        }}
                        validationSchema={ValidarSchema}

                    >
                        {({ errors, touched, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className='flex flex-col space-y-5'>
                                    <label htmlFor='email' className='-mb-3'>Correo: </label>
                                    <Field
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                        placeholder="correo@mail.com"



                                    />
                                    {errors.email && touched.email ? (
                                        <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                                            {errors.email}
                                        </p>
                                    ) : null}

                                    <label htmlFor='password'>Contraseña: </label>
                                    <Field
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Contraseña"
                                        className="w-full py-3 border -mt-5 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    />
                                    {errors.password && touched.password ? (
                                        <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                                            {errors.password}
                                        </p>
                                    ) : null}

                                </div>
                                <input
                                    type="submit"
                                    value="Iniciar Sesion"
                                    className="w-full py-3 mt-5 mb-5 font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-lg border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                                />
                            </Form>
                        )}
                    </Formik>


                    <p className="text-center">¿Aun no tienes cuenta?
                        <button onClick={() => { navigate("/registro") }} className="text-blue-700 font-medium inline-flex space-x-1 items-center ml-1">
                            <span>Registrate aqui </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </span>
                        </button>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home