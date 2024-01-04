import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";


export default function Registro() {
    const handleClickRegistro = (values) => console.log(values) // pega os valores do submit
  
    const validationRegistro = yup.object().shape({
      email: yup.string().email("Não é um email.").required("Campo obrigatório!"),
      password: yup.string().min(8, 'Senha necessita de no mínimo 8 caracteres!').required("Senha é obrigatória!"),
      confirmpassword: yup.string().oneOf( [yup.ref("password"), null], "As senhas não são iguais." )
    })

    return (
        <div>
            <Formik initialValues={{}} onSubmit={handleClickRegistro} validationSchema={validationRegistro}>
                <Form className='login-form'>
  
                <div className="login-form-group">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Endereço de email:
                     </label>
                    <Field name="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" />
  
                    <ErrorMessage component="span" name="email" className="text-red-900" />
                </div>
  
                <div className="login-form-group">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Senha:
                    </label>
                    <Field name="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Senha" />
  
                    <ErrorMessage component="span" name="password" className="text-red-900" />
                </div>

                <div className="login-form-group">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirme sua senha:
                    </label>
                    <Field name="confirmpassword" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"placeholder="Confirme a sua senha" />
  
                    <ErrorMessage component="span" name="confirmpassword" className="text-red-900" />
                </div>
                <br />
                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Cadastrar
                    </button>
                </div>
  
                </Form>
            </Formik>
        </div>
    )
}