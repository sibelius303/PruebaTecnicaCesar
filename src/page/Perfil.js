import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import useApp from '../Hooks/UseApp';


function Perfil() {
    const { userDatos, userSkills } = useApp();


    return (
        <div className=" gradient w-screen h-auto md:flex md:justify-center md:p-20">
            <div className="w-full md:text-center ">
                <h1 className='block text-yellow-300 mb-20 text-center pt-10 font-sans uppercase tracking-wide font-bold text-4xl md:text-6xl'>Bienvenido</h1>
                <div className='borderSeparacion flex flex-col items-center  mt-10 pb-10 md:w-full'>
                    <div className='overflow-hidden w-40 h-40 bg-gray-100 rounded-full dark:bg-gray-600 flex justify-center items-center  md:w-60 md:h-60'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20  text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </div>
                    <div>
                        <button className='px-8 py-3 font-semibold rounded-md mt-10  bg-blue-900  text-white'>Cambiar foto de perfil</button>
                    </div>
                </div>
                <div class=" borderSeparacion grid overflow-hidden grid-cols-2 gap-3 ml-4 mr-4 mt-10 md:grid-cols-2 md:w-full md:text-2xl">
                    <div class="box ">
                        <h1 className='text-yellow-300 block  uppercase tracking-wide font-bold mb-2'>Primer Nombre</h1>
                        <p className="text-white block   uppercase">{userDatos.primerNombre}</p>
                    </div>
                    <div class="box">
                        <h1 className='text-yellow-300 block  uppercase tracking-wide font-bold mb-2'>Segundo Nombre</h1>
                        <p className="text-white block  uppercase">{userDatos.segundoNombre}</p>
                    </div>
                    <div class="box">
                        <h1 className='text-yellow-300 block  uppercase tracking-wide font-bold mb-2'>Primer Apellido</h1>
                        <p className="text-white block  uppercase">{userDatos.primerApellido}</p>
                    </div>
                    <div class="box">
                        <h1 className='text-yellow-300 block  uppercase tracking-wide font-bold mb-2'>Segundo Apellido</h1>
                        <p className="text-white block  uppercase">{userDatos.segundoApellido}</p>
                    </div>
                    <div class="box">
                        <h1 className='text-yellow-300 block  uppercase tracking-wide font-bold mb-2'>Cedula</h1>
                        <p className="text-white block  uppercase">{userDatos.tipo}. {userDatos.cedula}</p>
                    </div>
                    <div class="box">
                        <h1 className='text-yellow-300 block  uppercase tracking-wide font-bold mb-2'>Sexo</h1>
                        <p className="text-white block  uppercase">{userDatos.sexo}</p>
                    </div>
                    <div class="box mb-10">
                        <h1 className='text-yellow-300 block  uppercase tracking-wide font-bold mb-2'>Tipo de Sangre</h1>
                        <p className="text-white block  uppercase">{userDatos.sanguinio}</p>
                    </div>
                </div>
                <div className="mt-5 p-4 text-center md:w-full md:text-3xl ">
                    <h1 className='text-yellow-300 block  uppercase tracking-wide font-bold mb-2'>Tus Skills</h1>
                    <ul className="grid grid-cols-1 gap-6 w-full px-10 mt-5 md:grid-cols-1 md:gap-2 md:px-20 ">
                        {userSkills?.map((habilidad, id) => {

                            return (
                                <li>
                                    <div key={id} className="">
                                        {habilidad === "Vue Js" ? (<svg className="mb-2 w-7 h-7 text-green-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" /></svg>) : null}
                                        {habilidad === "Angular" ? (  <svg className="mb-2 w-7 h-7 text-red-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" /></svg>) : null}
                                        {habilidad === "React Js" ? (  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> ) : null}
                                        <p className=" text-lg text-white font-semibold">{habilidad}</p>
                                    </div>
                                </li>
                            )
                        })}
                        {/* <li>
                            <div className="block">
                                <svg className="mb-2 w-7 h-7 text-sky-500" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </svg>
                                <p className=" text-lg text-white font-semibold">React Js</p>
                            </div>
                        </li>
                        <li>
                            <div class="block">
                                <svg className="mb-2 w-7 h-7 text-green-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z" /></svg>
                                <p className="w-full text-white text-lg font-semibold">Vue Js</p>
                            </div>
                        </li>
                        <li>
                            <div className="block">
                                <svg className="mb-2 w-7 h-7 text-red-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" /></svg>
                                <p className="w-full text-white text-lg font-semibold">Angular</p>
                            </div>
                        </li>
                        <li>
                            <div className="block">
                                <svg class="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <p className="w-full text-lg text-white font-semibold">Boostrap 5</p>

                            </div>
                        </li>
                        <li>
                            <div className="block">
                                <svg class="w-6 h-6 text-sky-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <p className="w-full text-lg text-white font-semibold">Python</p>
                            </div>
                        </li>
                        <li>
                            <svg class="w-6 h-6 text-sky-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <p className="w-full text-lg text-white font-semibold">JavaScript</p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Perfil