import { styled } from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    gap: 1.1em;
`

const Anchor = styled.a`
    ${({ isActive }) => `
        color: ${isActive ? 'green' : 'black'}
        text-decoration: ${!isActive && 'none'}
    `}
`
const Userlogout = styled.section`
    display: flex;
    flex-direction: column;
`

const User = styled.span`
    color: red;
    cursor: pointer;
    position: relative;
`

const Dropdown = styled.ul`
    position: absolute;
    background-color: #fff;
    list-style: none;
    padding: 0;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 10;

    li {
    cursor: pointer;
    color: black;

    &:hover {
        color: red;
        }
    }
`

export default {
    Nav,
    Anchor,
    Userlogout,
    User,
    Dropdown
}