import { useForm } from "react-hook-form"
import { useProdInsertion } from "../../hooks"

const goBack = () => {
    window.history.back()
}

const Newproduct = () => {
    const { register, handleSubmit } = useForm()
    const doInsertProduct = useProdInsertion()

    return (
        <>
            <h2>Insert new product</h2>
            <form onSubmit={handleSubmit(doInsertProduct)}>
                <input type="text" name="product_name" id="product_name" placeholder="Insert product name" {...register('product_name', {required: true})}/>
                <input type="text" name="product_description" id="product_description" placeholder="Insert product description" {...register('product_description', {required: true})} />
                <input type="text" name="product_quantity" id="product_quantity" placeholder="Insert quantity provided" {...register('product_quantity', {required: true})} />
                <input type="text" name="_supplier_product_name" id="_supplier_product_name" placeholder="Inserte proveedor deproducto *" {...register('_supplier_product_name', {required: true})} />
                <input type="text" name="supplier_id" id="supplier_id" placeholder="Insert supplier ID" {...register('supplier_id', {required: true})} />
                <input type="submit" value='Add product' />
                <input type="button" value='Back' onClick={goBack} />
            </form>
            <p>*Insert an existing supplier</p>
        </>
    )
}

export default Newproduct