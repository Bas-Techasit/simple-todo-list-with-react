
function AddItemFrom({ newItem, setNewItem, handleSubmit}) {

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                type="text"
                id="addItem"
                value={newItem}
                required
                onChange={ e => setNewItem(e.target.value)}
            />
            <input type="submit" aria-label="Add"/>
        </form>
    )
}

export default AddItemFrom;