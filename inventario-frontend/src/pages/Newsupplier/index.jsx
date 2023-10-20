import Styled from './styles'
import { useForm } from 'react-hook-form'
import { useSupInsertion } from '../../hooks'

const goBack = () => {
    window.history.back()
}

function Newsupplier() {
    const { register, handleSubmit } = useForm()
    const doRegisterSup = useSupInsertion()

    return (
        <Styled.Body>
            <h1>Insert supplier information</h1>
            <Styled.Form onSubmit={handleSubmit(doRegisterSup)}>
                <Styled.Input type="text" name="supplier_name" id="supplier_name" placeholder="Insert supplier name" {...register('supplier_name', {required: true})} />
                <Styled.Input type="text" name="contact_sup" id="contact_sup" placeholder="Insert supplier contact information" {...register('contact_sup', {required: true})} />
                <Styled.Input type="text" name="" id="" placeholder="Insert a short supplier description" {...register('supplier_description', {required: true})}/>
                <Styled.Buttons>
                    <Styled.Add type="submit" value='Add Supplier' />
                    <Styled.Back type="button" value='Back' onClick={goBack}/>
                </Styled.Buttons>
            </Styled.Form>
        </Styled.Body>
    )
}

export default Newsupplier