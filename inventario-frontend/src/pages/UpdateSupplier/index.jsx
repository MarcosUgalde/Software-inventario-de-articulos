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
        <>
        {supplier.data ? (
            <>
                <h3>Update supplier</h3>
                <form onSubmit={handleSubmit(doSupplierUpdate)}>
                    <input type="text" name="supplierId" id="supplierId" {...register('supplierId', {required: true})} value={supplier?.data[0].id} />
                    <input type="text" name="supplier_name" id="supplier_name" placeholder="Insert supplier name" {...register('supplier_name', {required: true})} defaultValue={supplier?.data[0].supplier_name} />
                    <input type="text" name="contact_sup" id="contact_sup" placeholder="Insert supplier contact information" {...register('contact_sup', {required: true})} defaultValue={supplier?.data[0].contact_sup} />
                    <input type="text" name="" id="" placeholder="Insert a short supplier description" {...register('supplier_description', {required: true})} defaultValue={supplier?.data[0].supplier_description} />
                    <input type="submit" value='Update Supplier' />
                    <input type="button" value='Back' onClick={goBack}/>
                </form>
            </>
        ) : (
            <>
                <p>Loading supplier information...</p>
            </>
        )
        
        }
        </>
    )
}

export default Updatesupplier