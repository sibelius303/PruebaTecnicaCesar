import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';



function FormRegistro() {
  const navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    primerNombre: Yup.string().required("El primer nombre es obligatorio"),
    primerApellido: Yup.string().required("El primer apellido es obligatorio"),
    cedula: Yup.string().min(7, "La cedula esta incompleta").required("La cedula es obligatoria"),
    correo: Yup.string().email().required("Es necesario el correo electronico"),
    sexo: Yup.string().required("Es necesario completar este campo"),
    sanguinio: Yup.string().required("Es necesario completar este campo")
  })
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-lg shadow-md md:w-3/4 mx-auto'>

      <Formik
        initialValues={{
          primerNombre: "",
          segundoNombre: "",
          primerApellido: "",
          segundoApellido: "",
          cedula: "",
          birthDate: "",
          correo: "",
          sexo: "",
          sanguinio: "",
        }}

        validationSchema={validationSchema}
        onSubmit={(valores) => {
          console.log(valores)
        }}
      >
        {({ values, handleSubmit, errors, touched }) =>
        (
          <Form className='w-full mx-w-lg' onSubmit={handleSubmit}>
            <div className='flex'>
              <div className='flex-col w-full md:w-10/12 px-3 mb-6 md:mb-0'>
                <label
                  htmlFor='primerNombre'
                  className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                >
                  Primer Nombre
                </label>
                <Field
                  name="primerNombre"
                  id="primerNombre"
                  type="text"
                  value={values.primerNombre}
                  className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                />
                {errors.primerNombre ? (
                  <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                    {errors.primerNombre}
                  </p>
                ) : null}
              </div>
              <div className='flex-col w-full md:w-10/12 px-3 mb-6 md:mb-0'>
                <label
                  htmlFor='segundoNombre'
                  className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                >
                  Segundo Nombre
                </label>
                <Field
                  name="segundoNombre"
                  id="segundoNombre"
                  type="text"
                  className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                  value={values.segundoNombre}
                />

              </div>
            </div>
            <div className='flex'>
              <div className='flex-col w-full md:w-10/12 px-3 mb-6 md:mb-0'>
                <label
                  htmlFor='primerApellido'
                  className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                >
                  Primer Apellido
                </label>
                <Field
                  name="primerApellido"
                  id="primerApellido"
                  type="text"
                  value={values.primerApellido}
                  className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                />
                {errors.primerApellido ? (
                  <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                    {errors.primerApellido}
                  </p>
                ) : null}
              </div>
              <div className='flex-col w-full md:w-10/12 px-3 mb-6 md:mb-0'>
                <label
                  htmlFor='segundoApellido'
                  className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                >
                  Segundo Apellido
                </label>
                <Field
                  name="segundoApellido"
                  id="segundoApellido"
                  type="text"
                  values={values.segundoApellido}
                  className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                />
              </div>
            </div>
            <div className='flex'>
              <div className='flex-col w-full md:w-10/12 px-3 mb-6 md:mb-0'>
                <label
                  htmlFor='cedula'
                  className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                >
                  Cedula
                </label>
                <Field
                  name="cedula"
                  id="cedula"
                  type="number"
                  value={values.cedula}
                  className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                />
                {errors.cedula ? (
                  <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                    {errors.cedula}
                  </p>
                ) : null}
              </div>
              <div className='flex-col w-full md:w-10/12 px-3 mb-6 md:mb-0'>
                <label
                  htmlFor='birthDate'
                  className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                >
                  Fecha de Nacimiento
                </label>
                <Field
                  name="birthDate"
                  id="birthDate"
                  type="date"
                  value={values.birthDate}
                  className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                />
              </div>
            </div>
            <div className='flex w-full'>
              <div className='flex-col w-1/4 md:w-10/12 px-3 mb-6 md:mb-0'>
                <label
                  htmlFor='correo'
                  className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                >
                  Correo
                </label>
                <Field
                  name="correo"
                  id="correo"
                  type="email"
                  value={values.correo}
                  className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                />
                {errors.correo ? (
                  <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                    {errors.correo}
                  </p>
                ) : null}
              </div>

              <div className='flex w-1/2'>
                <div className='flex-col w-1/2 md:w-10/12 px-3 mb-6 md:mb-0'>
                  <label
                    htmlFor='sexo'
                    className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                  >
                    Sexo
                  </label>
                  <Field
                    as="select"
                    name="sexo"
                    id="sexo"
                    value={values.sexo}
                    className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                  >
                    <option value="Maculino">Maculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="No binario">No binario</option>
                  </Field>
                  {errors.sexo ? (
                    <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                      {errors.sexo}
                    </p>
                  ) : null}
                </div>
                <div className='flex-col w-1/2 md:w-10/12 px-3 mb-6 md:mb-0'>
                  <label
                    htmlFor='sanguinio'
                    className='text-slate-600 block  uppercase tracking-wide font-bold mb-2'
                  >
                    Grupo Sanguinio
                  </label>
                  <Field
                    as="select"
                    name="sanguinio"
                    id="sanguinio"
                    className="block w-full bg-gray-100 text-gray-800 border rounded py-3 px-2 mb-3 leading-tight focus:bg-white"
                    value={values.sanguinio}
                  >
                    <option value="Tipo A">Tipo A</option>
                    <option value="Tipo B">Tipo B</option>
                    <option value="Tipo AB">Tipo AB</option>
                    <option value="Tipo O">Tipo O</option>
                  </Field>
                  {errors.sanguinio ? (
                    <p className='bg-red-800 py-2 text-white font-bold text-center rounded-md'>
                      {errors.sanguinio}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <button className=' px-8 py-3 font-semibold rounded-md mt-10  bg-blue-900  text-white justify-end' type="submit"> Cargar </button>
            </div>
          </Form>
        )
        }
      </Formik>
      <div className='flex justify-end'>
        <button onClick={() => { navigate("/skils") }} className=' px-8 py-3 font-semibold rounded-md mt-10  bg-blue-900  text-white justify-end'>Siguiente</button>
      </div>
    </div>

  );
}

export default FormRegistro;
