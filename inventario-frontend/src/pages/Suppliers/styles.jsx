import { styled } from 'styled-components'

const Body = styled.section`
    background-color: #c0fdfb;
    height: 89vh;
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Table = styled.table`
    box-shadow: 1px 1px 12px 6px rgba(0,0,0,0.75);
    text-align: center;
`

const Name = styled.th`
    background-color: #4DA1A9;
    padding: 0.5em;
`
    
const Contact = styled.th`
    background-color: #c5edac;
    padding: 0.5em;
`

const Description = styled.th`
    background-color: #4DA1A9;
    padding: 0.5em;
`

const Namecell = styled.td`
    background-color: #4DA1A9;
    padding: 0.5em;
`

const Contactcell = styled.td`
    background-color: #c5edac;
    padding: 0.5em;
`
    
const Descell = styled.td`
    background-color: #4DA1A9;
    padding: 0.5em;
`

export default {
    Body,
    Table,
    Name,
    Contact,
    Description,
    Namecell,
    Contactcell,
    Descell
}