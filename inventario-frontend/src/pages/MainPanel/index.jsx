import { useProducts } from "../../hooks"

function MainPanel() {
    const { data: productsInfo }= useProducts()

    return (
        <>
            <h2>Products</h2>
            <table>
                <th>Name</th>
                <th>Description</th>
                <th>Stock</th>
                <th>Supplier</th>
                {productsInfo?.map((product, index) => {
                    return (
                        <>
                            <tr>
                                <td key={index}>{product.product_name}</td>
                                <td>{product.product_description}</td>
                                <td>{product.product_quantity}</td>
                                <td>{product._supplier_product_name}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )
}

export default MainPanel