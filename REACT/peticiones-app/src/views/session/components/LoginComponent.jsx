import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../repositories/firebase/config';

export const LoginComponent = () => {

  const schema = yup.object ({
      email: yup.string().email("Plese enter a correct format: email@email.com").required("The email is required"),
      password: yup.string().required("The password is required")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmitForm = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    alert("incio de sesion valida")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
    
  });
  }


  return (
    <div>LoginComponent
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label className="form-label" >Email: </label>
        <input type="text" className="form-control" name="input_email" {...register('email')}/>
        <p className='text-danger'>{errors.email && errors.email.message }</p>
        <label className="form-label" >Password: </label>
        <input type="text" className="form-control" name="input_password" {...register('password')}/>
        <p className='text-danger'>{errors.password && errors.password.message }</p>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
