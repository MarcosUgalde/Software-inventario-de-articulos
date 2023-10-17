import { styled } from 'styled-components'

const Body = styled.section`
    padding-top: 2em;
    background-color: #6A4C93;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: white;
    }
`

const Table = styled.table`
    
    box-shadow: 1px 12px 8px -4px rgba(0,0,0,0.75);
`

const Name = styled.th`
    width: 120px;
    background-color: #FF595E;
`
const Desc = styled.th`
    width: 300px;
    background-color: #FFCA3A;
`

const Stock = styled.th`
    width: 80px;
    background-color: #8AC926;
`

const Supplier = styled.th`
    background-color: #1982C4;
`

const Namecell = styled.td`
    background-color: #FF595E;
`

const Desccell = styled.td`
    background-color: #FFCA3A;
`

const Stockcell = styled.td`
    background-color: #8AC926;
`

const Supcell = styled.td`
    background-color: #1982C4;
`

export default {
    Body,
    Table,
    Name,
    Desc,
    Stock,
    Supplier,
    Namecell,
    Desccell,
    Stockcell,
    Supcell
}