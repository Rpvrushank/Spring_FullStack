/* eslint-disable react/prop-types */
const AddItem = ({ onNewItem, onNewItemName, onNewItemPrice, onNewItemRating, itemName, itemPrice, itemRating }) => {
    return (
        <>
            <p>Add item:</p>
            <form onSubmit={onNewItem}>
                <div>Item Name:
                    <input type="text" value={itemName} onChange={onNewItemName} />
                </div>
                <div>Item Price:
                    <input type="text" value={itemPrice} onChange={onNewItemPrice} />
                </div>
                <div>Item Rating:
                    <input type="text" value={itemRating} onChange={onNewItemRating} />
                </div>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AddItem