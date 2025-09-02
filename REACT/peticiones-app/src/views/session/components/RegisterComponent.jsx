import {useForm} from 'react-hook-form'
import { data } from 'react-router'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../../repositories/firebase/config'

const schema = yup.object({
  email: yup.string().email("Plese enter a correct format: email@email.com").required("The email is required"),
  password: yup.string().required().min(8, "Please enter a min 8 char")
            .matches(/[A-Z]/, "Please enter a 1 char en Mayus")
            .matches(/[a-z]/, "Please enter a 1 char en Minus")
            .matches(/[0-9]/, "Please enter a 1 number")
            .matches(/[!@#$%&*?.,_<>"'|]/, "Please enter a 1 special char"),
  confirm_pasword: yup.string().oneOf([yup.ref("password"), null, "The password doesn't match"])
})


export const RegisterComponent = () => {
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // console.log(email);
  // console.log(password);
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);
  //   console.log(e.target.input_email.value);
  //   console.log(e.target.input_password.value);
  // }


  const onSubmitForm = (data) => {
    console.log(data);

    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      console.log(user);
      alert('User registration succesfull')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  });
    
  }


  return (
    <div>Register
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label className="form-label" >Email: </label>
        {/* <input type="text" className="form-control" name="input_email" onChange={(e) => setEmail(e.target.value)}/> */}
        <input type="text" className="form-control" name="input_email" {...register('email')}/>
        <p className='text-danger'>{errors.email && errors.email.message }</p>
        <label className="form-label" >Password: </label>
        {/* <input type="text" className="form-control" name="input_password" onChange={(e) => setPassword(e.target.value)}/> */}
        <input type="text" className="form-control" name="input_password" {...register('password')}/>
        <p>{errors.password && errors.password.message }</p>
        <label className="form-label" >Confirm Password: </label>
        <input type="text" className="form-control" name="input_password" {...register('confirm_password')}/>
        <p>{errors.confirm_pasword && errors.confirm_pasword.message }</p>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
