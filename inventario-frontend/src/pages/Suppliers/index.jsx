import Styled from './styles'
import { useSuppliers } from "../../hooks";
import { Link } from 'wouter'

const Suppliers = () => {
    const { data: suppliersInfo } = useSuppliers()

    return (
        <Styled.Body>
            <h2>Suppliers</h2>
            <Styled.Table>
                <Styled.Name>Name</Styled.Name>
                <Styled.Contact>Contact</Styled.Contact>
                <Styled.Description>Description</Styled.Description>
                {suppliersInfo?.map((supplier, index) => {
                    return (
                        <>
                            <tr>
                                <Styled.Namecell key={index}>{supplier.supplier_name} <Link to={`/update-supplier/${supplier.id}`} style={{ textDecoration: 'none' }} >✏️</Link> </Styled.Namecell>
                                <Styled.Contactcell>{supplier.contact_sup}</Styled.Contactcell>
                                <Styled.Descell>{supplier.supplier_description}</Styled.Descell>
                            </tr>
                        </>
                    )
                })}
            </Styled.Table>
        </Styled.Body>
    )
}

export default Suppliers