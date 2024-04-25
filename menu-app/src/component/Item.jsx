/* eslint-disable react/prop-types */
const Item = ({ item, onDelete, onUpdate }) => {
    const handleItemPass = () => {
        onUpdate(item);
    }
    return (
        <tr key={item.itemId}>
            <td>{item.itemName}</td>
            <td>{item.itemPrice}</td>
            <td>{item.itemRating}</td>
            <td><button onClick={handleItemPass}>Edit</button></td>
            <td><button value={item.itemId} onClick={onDelete}>Delete</button></td>
        </tr>
    )
}

export default Item