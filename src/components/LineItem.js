

function LineItem({ id, content, isChecked, handleOnChange, handleDelete}) {

    return (
        <div>
            <input 
                type="checkbox"
                id={`item-${id}`}
                checked={isChecked}
                onChange = {() => handleOnChange(id)}
            />
            <label htmlFor={`item-${id}`}>{content}</label>
            <button 
                htmlFor={`item-${id}`} 
                type="submit" 
                onClick={() => handleDelete(id)}
                > Delete </button>
        </div>
    )
}

export default LineItem;