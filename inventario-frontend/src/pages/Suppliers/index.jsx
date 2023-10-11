import { useSuppliers } from "../../hooks";

const Suppliers = () => {
    const { data: suppliersInfo } = useSuppliers()

    return (
        <>
            <h2>Suppliers</h2>
            <table>
                <th>Name</th>
                <th>Contact</th>
                <th>Description</th>
                {suppliersInfo?.map((supplier, index) => {
                    return (
                        <>
                            <tr>
                                <td key={index}>{supplier.supplier_name}</td>
                                <td>{supplier.contact_sup}</td>
                                <td>{supplier.supplier_description}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )
}

export default Suppliers