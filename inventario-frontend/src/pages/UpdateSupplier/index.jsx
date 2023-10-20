import Styled from './styles'
import { useForm } from "react-hook-form"
import { useId, useOneSupplier, useSupplierUpdate } from '../../hooks'

const goBack = () => {
    window.history.back()
}

function Updatesupplier() {
    const { register, handleSubmit } = useForm()
    const id = useId()
    const supplier = useOneSupplier({ supplierId: id })
    const doSupplierUpdate = useSupplierUpdate()
    
    return (
        <Styled.Body>
        {supplier.data ? (
            <>
                <h3>Update supplier</h3>
                <Styled.Form onSubmit={handleSubmit(doSupplierUpdate)}>
                    <Styled.Texts>
                        <Styled.Input type="text" name="supplierId" id="supplierId" {...register('supplierId', {required: true})} value={supplier?.data[0].id} />
                        <Styled.Input type="text" name="supplier_name" id="supplier_name" placeholder="Insert supplier name" {...register('supplier_name', {required: true})} defaultValue={supplier?.data[0].supplier_name} />
                        <Styled.Input type="text" name="contact_sup" id="contact_sup" placeholder="Insert supplier contact information" {...register('contact_sup', {required: true})} defaultValue={supplier?.data[0].contact_sup} />
                        <Styled.Input type="text" name="" id="" placeholder="Insert a short supplier description" {...register('supplier_description', {required: true})} defaultValue={supplier?.data[0].supplier_description} />
                    </Styled.Texts>
                    <Styled.Buttons>
                        <Styled.Update type="submit" value='Update' />
                        <Styled.Back type="button" value='Back' onClick={goBack}/>
                    </Styled.Buttons>
                </Styled.Form>
            </>
        ) : (
            <>
                <p>Loading supplier information...</p>
            </>
        )
        
        }
        </Styled.Body>
    )
}

export default Updatesupplier