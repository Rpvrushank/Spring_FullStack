/* eslint-disable react/prop-types */

const UpdateItem = ({ item, onNewItemName, onNewItemPrice, onNewItemRating, onUpdateItem }) => {
    return (
        <>
            <p>Updated item:</p>
            <form onSubmit={onUpdateItem}>
                <div>Item Name:
                    <input type="text" defaultValue={item.itemName} onChange={onNewItemName} />
                </div>
                <div>Item Price:
                    <input type="text" defaultValue={item.itemPrice} onChange={onNewItemPrice} />
                </div>
                <div>Item Rating:
                    <input type="text" defaultValue={item.itemRating} onChange={onNewItemRating} />
                </div>
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default UpdateItem