import Styled from './styles'

function DeleteproductModal({ onClose, onDelete, isVisible }) {
    return (
        <Styled.Modal style={{ display: isVisible ? 'block' : 'none' }}>
            <h2>You are going to delete a product</h2>
            <p>Are you sure you want to delete this product?</p>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onClose}>Cancel</button>
        </Styled.Modal>
    )
}

export default DeleteproductModal