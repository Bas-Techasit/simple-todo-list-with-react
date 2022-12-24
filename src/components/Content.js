import ItemList from "./ItemList";

function Content({items, setItem}) {

    return (
        <div>
           
            <ItemList 
                items = {items} 
                setItem = {setItem}
            />
        </div>
    );
}

export default Content;