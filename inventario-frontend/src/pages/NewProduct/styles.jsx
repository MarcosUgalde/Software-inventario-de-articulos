import { styled } from 'styled-components'

const Body = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Texts = styled.div`
    display: flex;
    justify-content: space-around;
`

const Input = styled.input`
    border-radius: 10px;
`

const Selectors = styled.div`
    display: flex;
`

const Field = styled.section`
    display: flex;
    flex-direction: column;
`

export default {
    Body,
    Form,
    Texts,
    Input,
    Selectors,
    Field
}