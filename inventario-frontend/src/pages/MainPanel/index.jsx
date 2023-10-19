import Styled from './styles'
import { useProducts } from "../../hooks"
import { Link } from 'wouter'
import DeleteproductModal from '../../components/Delete-product-modal'
import { useState } from 'react'

function MainPanel() {
    const { data: productsInfo }= useProducts()
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)
    const [productIdToDelete, setProductIdToDelete] = useState(null)

    const openDeleteModal = (id) => {
        setProductIdToDelete(id)
        setDeleteModalVisible(true)
    }

    const handleDelete = () => {
        if(productIdToDelete) {
            console.log('Deleting product')
        }
        setDeleteModalVisible(false)
    }

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
                                <Styled.Namecell key={index}>{product.product_name} <Link to={`/update-product/${product.id}`} style={{ textDecoration: 'none' }} >✏️</Link> <button onClick={() =>openDeleteModal(product.id)}>Delete</button> </Styled.Namecell>
                                <Styled.Desccell>{product.product_description}</Styled.Desccell>
                                <Styled.Stockcell>{product.product_quantity}</Styled.Stockcell>
                                <Styled.Supcell>{product._supplier_product_name}</Styled.Supcell>
                            </tr>
                        </>
                    )
                })}
            </Styled.Table>
            {isDeleteModalVisible && (
                <DeleteproductModal isVisible={isDeleteModalVisible} onClose={() => setDeleteModalVisible(false)} onDelete={handleDelete} />
            )}
        </Styled.Body>
    )
}

export default MainPanel