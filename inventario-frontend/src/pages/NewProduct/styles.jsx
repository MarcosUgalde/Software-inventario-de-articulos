import { styled } from 'styled-components'

const Body = styled.section`
    height: 90vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #7DD181;
    height: 500px;
    width: 550px;
    border-radius: 15px;
    box-shadow: 10px 10px 11px 2px rgba(0,0,0,0.75);
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
`

const Texts = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-evenly;
`

const Input = styled.input`
    border-radius: 10px;
`

const Selectors = styled.div`
    display: flex;
    justify-content: space-around;
`

const Field = styled.section`
    display: flex;
    flex-direction: column;
`

const Buttons = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-evenly;
`

const Addproduct = styled.input`
    border-radius: 10px;
    width: 90px;
    cursor: pointer;

    &:hover{
        background-color: #38a3a5;
        color: white;
        transition: 0.2s;
    }
`

const Back = styled.input`
    border-radius: 10px;
    width: 90px;
    cursor: pointer;

    &:hover{
        background-color: #38a3a5;
        color: white;
        transition: 0.2s;
    }
`

export default {
    Body,
    Form,
    Inputs,
    Texts,
    Input,
    Selectors,
    Field, 
    Buttons,
    Addproduct,
    Back
}