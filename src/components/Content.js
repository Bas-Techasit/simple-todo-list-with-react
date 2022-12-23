import ItemList from "./ItemList";

function Content({Items, setItem}) {

    return (
        <div>
            <ItemList 
                Items = {Items} 
                setItem = {setItem}
            />
        </div>
    );
}

export default Content;