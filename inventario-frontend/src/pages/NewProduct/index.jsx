import { useForm } from "react-hook-form"
import { useProdInsertion, useSuppliers } from "../../hooks"
import { Link } from 'wouter'

const goBack = () => {
    window.history.back()
}

const Newproduct = () => {
    const { register, handleSubmit } = useForm()
    const doInsertProduct = useProdInsertion()
    const suppliers = useSuppliers().data
    console.log(suppliers)

    

    return (
        <>
            <h2>Insert new product</h2>
            <form onSubmit={handleSubmit(doInsertProduct)}>
                <input type="text" name="product_name" id="product_name" placeholder="Insert product name" {...register('product_name', {required: true})}/>
                <input type="text" name="product_description" id="product_description" placeholder="Insert product description" {...register('product_description', {required: true})} />
                <input type="text" name="product_quantity" id="product_quantity" placeholder="Insert quantity provided" {...register('product_quantity', {required: true})} />
                <label htmlFor="supliers">Select a supplier</label>
                <select name="suppliers" id="suppliers" {...register('_supplier_product_name', {required: true})} >
                    {suppliers?.map((supplier) => (
                        <Link href={`/suppliers/${supplier.id}`} key={supplier.supplier_name}>
                            <option value={supplier?.supplier_name}>
                                {supplier.supplier_name}
                             </option>
                        </Link>
                            
                    ) )}
                </select>
                <label htmlFor="sup">Select supplier id value</label>
                <select name="sup" id="sup" {...register('supplier_id', {required: true})} >
                    {suppliers?.map((supplier) => (
                        <Link href={`/suppliers/${supplier.id}`} key={supplier.id}>
                            <option value={supplier?.id}>
                                {supplier.supplier_name}
                             </option>
                        </Link>                          
                    ) )}
                </select>
{/*                 
                <input type="text" name="_supplier_product_name" id="_supplier_product_name" placeholder="Inserte proveedor deproducto *" {...register('_supplier_product_name', {required: true})} />
                <input type="text" name="supplier_id" id="supplier_id" placeholder="Insert supplier ID" {...register('supplier_id', {required: true})} />
                 */}
                <input type="submit" value='Add product' />
                <input type="button" value='Back' onClick={goBack} />
            </form>
            <p>*Insert an existing supplier</p>
        </>
    )
}

export default Newproduct