import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import {useLocation} from 'wouter'
import { useUser } from '../../hooks'
import { useEffect } from "react"
import { login } from "../../misc/templates"
import { auth } from "../../services"

function Login() {
    const { register, formState, handleSubmit } = useForm()
    const[, setLocation] = useLocation()
    const { data } = useUser()

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: auth.signin,
        onSuccess: (response) => {
            if(response.success) queryClient.invalidateQueries({ queryKey: ['user'] }) && setLocation('/')
        }
    })

    const handleForm = (data) => {
        console.info('Form data: ', data)
        mutate(data)
    }

    useEffect(() => {
        data && setLocation('/')
    }, [data])

    const { errors } = login
    
    return (
        <>
            <h1>Login here!</h1>
            <form onSubmit={handleSubmit(handleForm)}>
                <label htmlFor="email">Insert email</label>
                <input type="text" id="email" placeholder="example@gmail.com" {...register('email', {required: true})} />
                <p>{formState.errors && errors[formState.errors?.email?.type]}</p>
                <label htmlFor="password">Insert Password</label>
                <input type="text" id="password" placeholder="********" {...register('password', {required: true, minLength: 8})} />
                <p>{formState.errors && errors[formState.errors?.password?.type]}</p>
                <input type="submit" />
            </form>
            <footer>
                Do not have an account yet? <a>Sign up here!</a>
            </footer>
        </>
    )
}

export default Login