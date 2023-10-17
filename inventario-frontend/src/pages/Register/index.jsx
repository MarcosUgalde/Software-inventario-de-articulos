import Styled from './styles'
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
    <Styled.Body>
      <Styled.Form onSubmit={handleSubmit(handleForm)}>
          <h1>Sign up</h1>
          <Styled.Field>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' placeholder='example@gmail.com' {...register('email', {required: true})} />
            <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='username' {...register("username", { required: true})} />
            <p>{formState.errors && errors[formState.errors?.username?.type]}</p>
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="password">Password</label>
            <input type="text" id='password' placeholder='Length must be at least 8' {...register('password', {required: true, minLength: 8})} />
            <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
          </Styled.Field>
          <Styled.Submit type="submit" />
      </Styled.Form>
      <Styled.Footer>
        <p>Already have an account?</p> 
        <Styled.Signup>
          <Styled.Anchor href='/login'>Login here!</Styled.Anchor>
        </Styled.Signup>
      </Styled.Footer>
    </Styled.Body>
  )
}

export default Register
