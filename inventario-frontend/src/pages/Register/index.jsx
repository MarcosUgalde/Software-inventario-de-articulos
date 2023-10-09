// import { useForm } from 'react-hook-form'
// import { useMutation } from 'react-query'
// import { useLocation } from 'wouter'

function Register() {

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
