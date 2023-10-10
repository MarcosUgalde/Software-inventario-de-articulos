import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useLocation } from 'wouter'
import { login } from '../../misc/templates'
import { auth } from '../../services'

function Register() {
  const {register, formState, handleSubmit} = useForm()

  const { mutate } = useMutation({
    mutationFn: auth.register,
    onSuccess: (response) => {
      console.log('Response: ', response)
      if(response.success) setLocation('/login')
    }
  })

  const [, setLocation] = useLocation()

  const handleForm = (data) => {
    console.info('Form data: ', data)
    mutate(data)
  }

  const { errors } = login

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(handleForm)}>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='example@gmail.com' {...register('email', {required: true})} />
          <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
          <label htmlFor="username">Username</label>
          <input type="text" id='username' placeholder='username' {...register("username", { required: true})} />
          <p>{formState.errors && errors[formState.errors?.username?.type]}</p>
          <label htmlFor="password">Password</label>
          <input type="text" id='password' placeholder='Length must be at least 8' {...register('password', {required: true, minLength: 8})} />
          <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
          <input type="submit" />
      </form>
      <footer>
        Already have an account? <a>Login here!</a>
      </footer>
    </>
  )
}

export default Register
