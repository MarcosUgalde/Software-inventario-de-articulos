import { styled } from 'styled-components'

const Body = styled.section`
    padding-top: 2em;
    background-color: #C9FFE2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Table = styled.table`  
    box-shadow: 1px 12px 8px -4px rgba(0,0,0,0.75);
`

const Name = styled.th`
    width: 120px;
    height: 2.5em;
    background-color: #7DD181;
    padding-top: 1.2em;
`
const Desc = styled.th`
    width: 300px;
    background-color: #96E8BC;
`

const Stock = styled.th`
    width: 80px;
    background-color: #7DD181;
`

const Supplier = styled.th`
    background-color: #96E8BC;
`

const Namecell = styled.td`
    height: 2.0em;
    background-color: #7DD181;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Desccell = styled.td`
    background-color: #96E8BC;
    
`

const Stockcell = styled.td`
    height: 2.0em;
    background-color: #7DD181;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Supcell = styled.td`
    background-color: #96E8BC;
`

const Delete = styled.button`
    background-color: transparent;
    border: none;
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
    Supcell,
    Delete
}