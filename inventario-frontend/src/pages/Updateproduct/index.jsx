import { useForm } from "react-hook-form"
import { useSuppliers, useOneProduct, useId, useProdUpdate } from "../../hooks"
import { Link } from 'wouter'

const goBack = () => {
    window.history.back()
}

function Updateproduct() {
    const { register, handleSubmit } = useForm()
    const id = useId()
    const suppliers = useSuppliers().data
    const product = useOneProduct({ productId: id })
    const doUpdateProduct = useProdUpdate()
    // const onSubmit = (data) => {
    //     doUpdateProduct.onSubmit(id, data)
    // }

    return (
        <>
            <form onSubmit={handleSubmit(doUpdateProduct)}>
                <input type="text" name="productId" id="productId" {...register('productId', {required: true})} value={product?.data[0]?.id} />
                <input type="text" name="product_name" id="product_name" placeholder="Insert product name" {...register('product_name', {required: true})} defaultValue={product?.data?.product_name}/>
                <input type="text" name="product_description" id="product_description" placeholder="Insert product description" {...register('product_description', {required: true})} defaultValue={product?.data?.product_description} />
                <input type="text" name="product_quantity" id="product_quantity" placeholder="Insert quantity provided" {...register('product_quantity', {required: true})} defaultValue={product?.data?.product_quantity} />
                <label htmlFor="supliers">Select a supplier</label>
                <select name="suppliers" id="suppliers" {...register('_supplier_product_name', {required: true})} defaultValue={product?.data?._supplier_product_name} >
                    {suppliers?.map((supplier) => (
                        <Link href={`/suppliers/${supplier.id}`} key={supplier.supplier_name}>
                            <option value={supplier?.supplier_name}>
                                {supplier.supplier_name}
                             </option>
                        </Link>
                            
                    ) )}
                </select>
                <label htmlFor="sup">Select supplier id value</label>
                <select name="sup" id="sup" {...register('supplier_id', {required: true})} defaultValue={product?.data?._supplier_product_name} >
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
                <input type="submit" value='Update' />
                <input type="button" value='Back' onClick={goBack} />
            </form>
            <p>*Insert an existing supplier</p>
        </>
    )
}

export default Updateproduct