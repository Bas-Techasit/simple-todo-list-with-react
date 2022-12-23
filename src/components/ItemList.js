import LineItem from "./LineItem";

function ItemList({ Items, setItem }) {

    let updateItem = '';

    function handleOnChange(id) {
        updateItem = Items.map((item, index) => 
            (index+1) === id ? 
                {
                    ...item,
                    'isChecked': !item.isChecked
                }
                :
                {
                    ...item
                }
        )
        setItem(updateItem);
    }

    function handleDelete(id) {
        updateItem = Items.filter((item) => 
            item.id != id
        )
        setItem(updateItem);
    }

    return (
        <div>
            {
                Items.map((item) => 
                    <LineItem 
                        key = {item.id}
                        id = {item.id}
                        content = {item.content}
                        isChecked = {item.isChecked}
                        handleOnChange = {handleOnChange}
                        handleDelete = {handleDelete}
                    />
                )
            }
        </div>
    );
}

export default ItemList;