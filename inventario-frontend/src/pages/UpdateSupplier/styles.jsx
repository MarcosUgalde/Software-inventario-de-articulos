import { styled } from 'styled-components'

const Body = styled.section`
    height: 90vh;
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    background-color: #4DA1A9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 500px;
    width: 550px;
    border-radius: 15px;
    box-shadow: 10px 10px 11px 2px rgba(0,0,0,0.75);
`

const Texts = styled.div`
    width: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Input = styled.input`
    border-radius: 10px;
    width: 35%;
    margin: 10px;
`

const Buttons = styled.div`
    width: 550px;
    display: flex;
    justify-content: space-evenly;
`

const Update = styled.input`
    background-color: #c5edac;
    border-radius: 10px;
    width: 90px;
    cursor: pointer;

    &:hover{
        background-color: #22333b;
        color: white;
        transition: 0.2s;
    }
`

const Back = styled.input`
    background-color: #c5edac;
    border-radius: 10px;
    width: 90px;
    cursor: pointer;

    &:hover{
        background-color: #22333b;
        color: white;
        transition: 0.2s;
    }
`

export default {
    Body,
    Form,
    Texts,
    Input,
    Buttons,
    Update,
    Back
}