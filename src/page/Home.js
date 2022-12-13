import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import '../App.css';


function Home() {
    const navigate = useNavigate();
    const ValidarSchema = Yup.object().shape({
        email: Yup.string().email('Correo no valido').required('El correo es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria')

    })
    return (
        <div className=" gradient w-screen h-full md:h-full xl:h-screen">
            <div className="flex flex-col lg:flex-row ">
                <div className="  w-full px-10 py-10  xl:w-1/2 xl:ml-10">
                    <div className=" my-10">
                        <h3 className=" block text-yellow-300  uppercase tracking-wide font-bold mb-1 text-2xl md:text-4xl xl:text-4xl"><h1 className='block text-yellow-300  uppercase tracking-wide font-bold mb-1 text-3xl md:text-7xl xl:text-6xl'>Binvenido</h1> a CoderSocial</h3>
                    </div>
                    <div>
                        <p className=' text-white leading-10 block text-left uppercase tracking-wide font-bold mb-2 text-2xl md:text-4xl xl:text-3xl'>Una red social para <p className='text-yellow-400 text-3xl md:text-6xl'>programadores</p>
                            <p> en busca de compartir conocimientos, trabajos y mucho mas...</p></p>
                    </div>
                </div>
                <div className=' w-screen mt-2 text-white xl:w-1/2'>
                    <div className='m-auto p-10  md:pt-10 xl:mr-30'>
                        <div className=" m-auto my-5 p-8 rounded-xl shadow shadow-slate-300 xl:h-1/4 ">
                            <h1 className="text-2xl font-medium text-center uppercase mb-5">Inicia Sesion</h1>
                            <p className=" text-center mb-3">Hola, Bienvenido de nuevo 👋</p>

                            <Formik
                                initialValues={{
                                    email: "",
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
                                    <Form className='m-auto' onSubmit={handleSubmit}>
                                        <div className='flex flex-col space-y-1 '>
                                            <label htmlFor='email' className='-mb-1'>Correo: </label>
                                            <Field
                                                id="email"
                                                type="email"
                                                name="email"
                                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                                placeholder="correo@mail.com"



                                            />
                                            {errors.email ? (
                                                <p className='bg-red-800 py-2 text-white font-bold text-center rounded-sm xl:h-auto xl:text-xs xl:py-2'>
                                                    {errors.email}
                                                </p>
                                            ) : null}

                                            <label htmlFor='password' className='-mb-1'>Contraseña: </label>
                                            <Field
                                                id="password"
                                                type="password"
                                                name="password"
                                                placeholder="Contraseña"
                                                className="w-full py-3 border -mt-5 border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                            />
                                            {errors.password && touched.password ? (
                                                <div className='bg-red-800 py-2 text-white font-bold text-center rounded-md md:h-auto lg:text-xs  lg:text-center'>
                                                    <p className=''>
                                                        {errors.password}
                                                    </p>
                                                </div>
                                            ) : null}

                                        </div>
                                        <input
                                            type="submit"
                                            value="Iniciar Sesion"
                                            className="w-full py-3 mt-5 mb-5 font-medium text-white bg-yellow-500 hover:bg-yellow-700 rounded-lg border-blue-500 hover:shadow inline-flex space-x-2 items-center justify-center"
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
            </div>
        </div>
    )
}

export default Home