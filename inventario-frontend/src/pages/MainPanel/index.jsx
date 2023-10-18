import Styled from './styles'
import { useProducts } from "../../hooks"
import { Link } from 'wouter'

function MainPanel() {
    const { data: productsInfo }= useProducts()

    return (
        <Styled.Body>
            <h2>Products</h2>
            <Styled.Table>
                <Styled.Name>Name</Styled.Name>
                <Styled.Desc>Description</Styled.Desc>
                <Styled.Stock>Stock</Styled.Stock>
                <Styled.Supplier>Supplier</Styled.Supplier>
                {productsInfo?.map((product, index) => {
                    return (
                        <>
                            <tr>
                                <Styled.Namecell key={index}>{product.product_name} <Link to={`/update-product/${product.id}`} style={{ textDecoration: 'none' }} >✏️</Link></Styled.Namecell>
                                <Styled.Desccell>{product.product_description}</Styled.Desccell>
                                <Styled.Stockcell>{product.product_quantity}</Styled.Stockcell>
                                <Styled.Supcell>{product._supplier_product_name}</Styled.Supcell>
                            </tr>
                        </>
                    )
                })}
            </Styled.Table>
        </Styled.Body>
    )
}

export default MainPanel