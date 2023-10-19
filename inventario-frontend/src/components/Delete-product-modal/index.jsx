import Styled from './styles'

function DeleteproductModal({ onClose, onDelete, isVisible }) {
    return (
        <Styled.Modal style={{ display: isVisible ? 'block' : 'none' }}>
            <h2>You are going to delete a product</h2>
            <p>Are you sure you want to delete this product?</p>
            <Styled.Buttons>
                <Styled.Delete onClick={onDelete}>Delete</Styled.Delete>
                <Styled.Cancel onClick={onClose}>Cancel</Styled.Cancel>
            </Styled.Buttons>
        </Styled.Modal>
    )
}

export default DeleteproductModal