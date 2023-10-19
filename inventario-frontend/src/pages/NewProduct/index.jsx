import Styled from './styles'
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
        <Styled.Body>
            <h2>Insert new product</h2>
            <Styled.Form onSubmit={handleSubmit(doInsertProduct)}>
                <Styled.Inputs>

                    <Styled.Texts>
                        <Styled.Input type="text" name="product_name" id="product_name" placeholder="Insert product name" {...register('product_name', {required: true})}/>
                        <Styled.Input type="text" name="product_description" id="product_description" placeholder="Insert product description" {...register('product_description', {required: true})} />
                        <Styled.Input type="text" name="product_quantity" id="product_quantity" placeholder="Insert quantity provided" {...register('product_quantity', {required: true})} />
                    </Styled.Texts>
                    <br />
                    <Styled.Selectors>
                        <Styled.Field>
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
                        </Styled.Field>
                        <Styled.Field>
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
                        </Styled.Field>
                    </Styled.Selectors>
                </Styled.Inputs>
                <Styled.Buttons>
                    <Styled.Addproduct type="submit" value='Add product' />
                    <Styled.Back type="button" value='Back' onClick={goBack} />
                </Styled.Buttons>
            </Styled.Form>
        </Styled.Body>
    )
}

export default Newproduct