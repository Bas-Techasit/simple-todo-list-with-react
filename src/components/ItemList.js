import LineItem from "./LineItem";

function ItemList({ items, setItem }) {

    let updateItem = '';

    function handleOnChange(id) {
        updateItem = items.map((item) => 
            item.id === id ? {
                    ...item,
                    'isChecked': !item.isChecked
                }
                :
                {
                    ...item
                }
        )
        console.log(id);
        setItem(updateItem);
    }

    function handleDelete(id) {
        updateItem = items.filter((item) => item.id != id);
        setItem(updateItem);
    }

    return (
        <div>
            {
               items.length === 0 ? "Empy"
               : items.map((item) => 
                    <LineItem 
                        key = {item.id}
                        item = {item}
                        handleOnChange = {handleOnChange}
                        handleDelete = {handleDelete}
                    />
                )
            }
        </div>
    );
}

export default ItemList;

// 1 <- 0
// 3 <- 1
