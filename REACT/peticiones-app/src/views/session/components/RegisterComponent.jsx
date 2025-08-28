import {useForm} from 'react-hook-form'
import { data } from 'react-router'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers'

const schema = yup.object({
  email: yup.string().email("Plese enter a correct format: email@email.com").required("The email is required"),
  password: yup.string().password().required().min(8, "Please enter a min 8 char")
            .matches(/[A-Z]/)
            .matches(/[a-z]/)
            .matches(/[0-9]/)
            .matches(/[!@#$%&*?.,_<>"'|]/),
  confirm_pasword: yup.string().oneOf([yup.ref("password")])
})


export const RegisterComponent = () => {
  const {register, handleSubmit} = useForm({
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
    
  }


  return (
    <div>Register
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label className="form-label" >Email: </label>
        {/* <input type="text" className="form-control" name="input_email" onChange={(e) => setEmail(e.target.value)}/> */}
        <input type="text" className="form-control" name="input_email" {...register('email')}/>
        <label className="form-label" >Password: </label>
        {/* <input type="text" className="form-control" name="input_password" onChange={(e) => setPassword(e.target.value)}/> */}
        <input type="text" className="form-control" name="input_password" {...register('password')}/>
        <label className="form-label" >Confirm Password: </label>
        <input type="text" className="form-control" name="input_password" {...register('confirm_password')}/>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
