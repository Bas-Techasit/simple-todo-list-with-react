import ItemList from "./ItemList";


function Footer({items}) {

    return (
        <div>
            <p>{items.length} List item{items.length > 1 ? "s" : ""}</p>
        </div>
    );
}

export default Footer;