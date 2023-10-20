import Styled from './styles'
import { useSuppliers, useDeleteSupplier } from "../../hooks";
import { Link } from 'wouter'
import DeletesupplierModal from '../../components/Delete-supplier-modal'; 
import { useState } from 'react'

const Suppliers = () => {
    const { data: suppliersInfo } = useSuppliers()
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)
    const [supplierIdToDelete, setSupplierIdToDelete] = useState(null)
    const doDeleteSupplier = useDeleteSupplier()

    const openDeleteModal = (id) => {
        setSupplierIdToDelete(id)
        setDeleteModalVisible(true)
        return id
    }

    const handleDelete = () => {
        if(supplierIdToDelete) {
            console.log('Deleting product with id: ', supplierIdToDelete)
            doDeleteSupplier(supplierIdToDelete)
        }
        setDeleteModalVisible(false)
    }

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
                                <Styled.Namecell key={index}>{supplier.supplier_name} <Link to={`/update-supplier/${supplier.id}`} style={{ textDecoration: 'none' }} >✏️</Link> <Styled.Delete onClick={() =>openDeleteModal(supplier.id)}>❌</Styled.Delete> </Styled.Namecell>
                                <Styled.Contactcell>{supplier.contact_sup}</Styled.Contactcell>
                                <Styled.Descell>{supplier.supplier_description}</Styled.Descell>
                            </tr>
                        </>
                    )
                })}
            </Styled.Table>
            {isDeleteModalVisible && (
                <DeletesupplierModal productId={supplierIdToDelete} isVisible={isDeleteModalVisible} onClose={() => setDeleteModalVisible(false)} onDelete={handleDelete} />
            )}
        </Styled.Body>
    )
}

export default Suppliers