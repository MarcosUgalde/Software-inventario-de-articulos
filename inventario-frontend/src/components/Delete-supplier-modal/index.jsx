import Styled from './styles'

function DeletesupplierModal({ onClose, onDelete, isVisible }) {
    return (
        <Styled.Modal style={{ display: isVisible ? 'block' : 'none' }}>
            <h2>You are going to delete a supplier</h2>
            <p>Are you sure you want to delete this supplier?</p>
            <Styled.Buttons>
                <Styled.Delete onClick={onDelete}>Delete</Styled.Delete>
                <Styled.Cancel onClick={onClose}>Cancel</Styled.Cancel>
            </Styled.Buttons>
        </Styled.Modal>
    )
}

export default DeletesupplierModal