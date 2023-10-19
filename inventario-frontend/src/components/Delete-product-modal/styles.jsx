import { styled } from 'styled-components'

const Modal = styled.section`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    justify-content: center;
    align-items: center;
    overflow: auto;
    padding: 20px;
    border-radius: 5px;
`

export default {
    Modal,
}