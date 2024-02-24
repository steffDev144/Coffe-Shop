

const CoffeeListItem = (props) => {
    const {img, title, country, price} = props;
    return (
        <li className="coffee-list__item">
            <div className="coffee-list__item_img">
                <img src={img.coffeeImg} alt="coffee-img"/>
            </div>
            <div className="coffee-list__item_title">{title}</div>
            <div className="coffee-list__item_subtitle">{country}</div>
            <div className="coffee-list__item_price">{price}</div>
        </li>
    )
}

export default CoffeeListItem;