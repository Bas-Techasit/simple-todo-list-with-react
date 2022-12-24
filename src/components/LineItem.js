

function LineItem({ item, handleOnChange, handleDelete}) {

    return (
        <div>
            <input 
                type="checkbox"
                id={`item-${item.id}`}
                checked={item.isChecked}
                onChange = {() => handleOnChange(item.id)}
            />
            <label htmlFor={`item-${item.id}`}>{item.body}</label>
            <button 
                htmlFor={`item-${item.id}`} 
                type="submit" 
                onClick={() => handleDelete(item.id) }
                > Delete </button>
        </div>
    )
}

export default LineItem;