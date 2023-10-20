import Styled from './styles'
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
    
    console.log('Product in update page: ', product)

    return (
        <Styled.Body>
        {product.data ? (
            <>
                <h3>Updating product</h3>
                <Styled.Form onSubmit={handleSubmit(doUpdateProduct)}>
                    <Styled.Inputs>
                        <Styled.Texts>
                            <Styled.Input type="text" name="productId" id="productId" {...register('productId', {required: true})} value={product?.data[0].id} />
                            <Styled.Input type="text" name="product_name" id="product_name" placeholder="Insert product name" {...register('product_name', {required: true})}  />
                            <Styled.Input type="text" name="product_description" id="product_description" placeholder="Insert product description" {...register('product_description', {required: true})} defaultValue={product?.data[0].product_description} />
                            <Styled.Input type="text" name="product_quantity" id="product_quantity" placeholder="Insert quantity provided" {...register('product_quantity', {required: true})} defaultValue={product?.data[0].product_quantity} />
                        </Styled.Texts>
                        <br />
                        <Styled.Selectors>
                            <Styled.Field>
                                <label htmlFor="supliers">Select a supplier</label>
                                <select name="suppliers" id="suppliers" {...register('_supplier_product_name', {required: true})} defaultValue={product?.data[0]._supplier_product_name} >
                                    {suppliers?.map((supplier) => (
                                        <Link href={`/suppliers/${supplier.id}`} key={supplier.supplier_name}>
                                            <option value={supplier?.supplier_name}>
                                                {supplier.supplier_name}
                                            </option>
                                        </Link>
                                            
                                    ) )}
                                </select>
                            </Styled.Field>
                            <Styled.Field>
                                <label htmlFor="sup">Select supplier id value</label>
                                <select name="sup" id="sup" {...register('supplier_id', {required: true})} defaultValue={product?.data[0]._supplier_product_name} >
                                    {suppliers?.map((supplier) => (
                                        <Link href={`/suppliers/${supplier.id}`} key={supplier.id}>
                                            <option value={supplier?.id}>
                                                {supplier.supplier_name}
                                            </option>
                                        </Link>                          
                                    ) )}
                                </select>
                            </Styled.Field>
                        </Styled.Selectors>
                    </Styled.Inputs>
                    <Styled.Buttons>
                        <Styled.Update type="submit" value='Update' />
                        <Styled.Back type="button" value='Back' onClick={goBack} />
                    </Styled.Buttons>
                </Styled.Form>
            </>
        ) : (
            <p>Loading product information...</p>
        )}
        </Styled.Body>
    )
}

export default Updateproduct