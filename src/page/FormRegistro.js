import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import useApp from '../Hooks/UseApp';


function FormRegistro() {
  const navigate = useNavigate();
  const { setUserDatos } = useApp();
  const validationSchema = Yup.object().shape({
    primerNombre: Yup.string().required("El primer nombre es obligatorio"),
    primerApellido: Yup.string().required("El primer apellido es obligatorio"),
    cedula: Yup.string().min(7, "La cedula esta incompleta").required("La cedula es obligatoria"),
    correo: Yup.string().email().required("Es necesario el correo electronico"),
    sexo: Yup.string().required("Es necesario completar este campo"),
    sanguinio: Yup.string().required("Es necesario completar este campo"),
    tipo: Yup.string().required()
  })
  return (
    <div className='gradient h-full p-30 shadow-md  w-screen xl:p-20'>
      <div className='text-center mb-10 p-5 w-full'>
        <h1 className=' block text-yellow-300 mb-20 uppercase tracking-wide font-bold mb-7 text-5xl xl:text-8xl'>Registrate</h1>
        <p className="text-white leading-10 block text-center uppercase tracking-wide font-bold mb-2 text-4xl xl:text-center xl:text-left">Completa con tus datos el siguiente formulario, para crear tu <p className='text-yellow-400 text-5xl mt-10'>perfil</p></p>
      </div>
      <div className='flex flex-col justify-center items-center my-20 w-full'>
        <div className='overflow-hidden w-40 h-40 bg-gray-100 rounded-full dark:bg-gray-600 flex justify-center items-center  xl:w-60 xl:h-60'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20  text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <div>
          <button className='px-8 py-3 font-semibold rounded-md mt-10  bg-blue-900  text-white'>Agregar foto de perfil</button>
        </div>
      </div>

      <Formik
        initialValues={{
          primerNombre: "",
          segundoNombre: "",
          primerApellido: "",
          segundoApellido: "",
          tipo: "",
          cedula: "",
          birthDate: "",
          correo: "",
          sexo: "",
          sanguinio: "",
        }}

        validationSchema={validationSchema}
        onSubmit={(valores) => {
          setUserDatos(valores);
          navigate("/skills")  
        }}
      >
        {({ values, handleSubmit, errors, }) =>
        (
          <Form className=' flex flex-col p-5 xl:rounded-xl xl:shadow xl:shadow-slate-300 xl:grid xl:grid-cols-2 xl:gap-6 xl:p-20 ' onSubmit={handleSubmit}>
            <div className='my-3'>
              <label
                For='primerNombre'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Primer Nombre
              </label>
              <Field
                name="primerNombre"
                id="primerNombre"
                type="text"
                value={values.primerNombre}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
               {errors.primerNombre ? (
                <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                  {}
                </p>
              ) : null}
            </div>
            <div className='my-3'>
              <label
                For='segundoNombre'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Segundo Nombre
              </label>
              <Field
                name="segundoNombre"
                id="segundoNombre"
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={values.segundoNombre}
              />

            </div>
            <div className='my-3'>
              <label
                htmlFor='primerApellido'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Primer Apellido
              </label>
              <Field
                name="primerApellido"
                id="primerApellido"
                type="text"
                value={values.primerApellido}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              {errors.primerApellido ? (
                <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                  {}
                </p>
              ) : null}
            </div>
            <div className='my-3'>
              <label
                htmlFor='segundoApellido'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Segundo Apellido
              </label>
              <Field
                name="segundoApellido"
                id="segundoApellido"
                type="text"
                values={values.segundoApellido}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className='my-3 flex'>
              <div className='w-1/4'>
                <label
                  htmlFor='tipo'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Tipo
                </label>
                <Field
                  name="tipo"
                  id="tipo"
                  as="select"
                  value={values.tipo}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                >
                  <option value="V">V</option>
                  <option value="E">E</option>
                  <option value="J">J</option>
                </Field>
              </div>
              <div className='mx-5 w-full'>
                <label
                  htmlFor='cedula'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Cedula
                </label>
                <Field
                  name="cedula"
                  id="cedula"
                  type="number"
                  value={values.cedula}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
                {errors.cedula ? (
                  <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                    {}
                  </p>
                ) : null}
              </div>
            </div>
            <div className='my-3'>
              <label
                htmlFor='birthDate'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Fecha de Nacimiento
              </label>
              <Field
                name="birthDate"
                id="birthDate"
                type="date"
                value={values.birthDate}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className='my-3'>
              <label
                htmlFor='correo'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Correo
              </label>
              <Field
                name="correo"
                id="correo"
                type="email"
                value={values.correo}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
              {errors.correo ? (
                <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                  {}
                </p>
              ) : null}
            </div>
            <div className='flex my-3'>
              <div className='w-1/2 '>
                <label
                  htmlFor='sexo'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Sexo
                </label>
                <Field
                  as="select"
                  name="sexo"
                  id="sexo"
                  value={values.sexo}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                >
                  <option value="Maculino">Maculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="No binario">No binario</option>
                </Field>
                {errors.sexo ? (
                  <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                    {}
                  </p>
                ) : null}
              </div>
              <div className='w-1/2 mx-3'>
                <label
                  htmlFor='sanguinio'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Grupo Sanguinio
                </label>
                <Field
                  as="select"
                  name="sanguinio"
                  id="sanguinio"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  value={values.sanguinio}
                >
                  <option value="Tipo A">Tipo A</option>
                  <option value="Tipo B">Tipo B</option>
                  <option value="Tipo AB">Tipo AB</option>
                  <option value="Tipo O">Tipo O</option>
                </Field>
                {errors.sanguinio ? (
                  <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                    {}
                  </p>
                ) : null}
              </div>
            </div>
            <div className='flex justify-end md:col-start-2'>
              <button className=' px-8 py-3 font-semibold rounded-md mt-10  bg-blue-900  text-white justify-end' type="submit"> Cargar </button>
            </div>
          </Form>
        )
        }
      </Formik>
    </div>

  );
}

export default FormRegistro;
