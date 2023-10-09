import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useLocation } from 'wouter'
import { login } from '../../misc/templates'

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
      <form onSubmit="">
        <>
          <label htmlFor="">Email</label>
          <input type="text" />
          <p></p>
          <label htmlFor="">Username</label>
          <input type="text" />
          <p></p>
          <label htmlFor="">Password</label>
          <input type="text" />
          <p></p>
          <input type="submit" />
        </>
      </form>
    </>
  )
}

export default Register
