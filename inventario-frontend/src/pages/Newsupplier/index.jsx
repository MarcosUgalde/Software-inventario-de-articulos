import { useForm } from 'react-hook-form'
import { useSupInsertion } from '../../hooks'

const goBack = () => {
    window.history.back()
}

function Newsupplier() {
    const { register, handleSubmit } = useForm()
    const doRegisterSup = useSupInsertion()

    return (
        <>
            <h1>Insert supplier information</h1>
            <form onSubmit={handleSubmit(doRegisterSup)}>
                <input type="text" name="supplier_name" id="supplier_name" placeholder="Insert supplier name" {...register('supplier_name', {required: true})} />
                <input type="text" name="contact_sup" id="contact_sup" placeholder="Insert supplier contact information" {...register('contact_sup', {required: true})} />
                <input type="text" name="" id="" placeholder="Insert a short supplier description" {...register('supplier_description', {required: true})}/>
                <input type="submit" value='Add Supplier' />
                <input type="button" value='Back' onClick={goBack}/>
            </form>
        </>
    )
}

export default Newsupplier