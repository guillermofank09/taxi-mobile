import * as Yup from 'yup';

const REQUIRED_FIELD= 'El campo es requerido';

export const signUpSchema = 
    Yup.object().shape({
        name: Yup.string().required(REQUIRED_FIELD),
        email: Yup.string().email('Ingrese un mail válido').required(REQUIRED_FIELD),
        password: Yup.string().min(6, 'Debe contener minimo 6 caracteres').required(REQUIRED_FIELD),
        confirmPassword: Yup.string().oneOf([Yup.ref('password', null)], 'Las contraseñas no coinciden').required(REQUIRED_FIELD),
    });

    export const loginSchema = 
    Yup.object().shape({
        email: Yup.string().email('Ingrese un mail válido').required(REQUIRED_FIELD),
        password: Yup.string().min(6, 'Debe contener minimo 6 caracteres').required(REQUIRED_FIELD),
    });