import "./Categories.css"

function Categories() {
    return (
        <div className="catalog-categories">
            <button className="categories-button"> <a href="">ВОДА</a></button>
            <button className="categories-button categories-button-drinks"> <a href="">НАПИТКИ</a></button>
            <button className="categories-button"> <a href="">ПОМПЫ</a></button>
            <button className="categories-button"> <a href="">ДОПОЛНИТЕЛЬНО</a></button>
        </div>
    );
}

export default Categories;