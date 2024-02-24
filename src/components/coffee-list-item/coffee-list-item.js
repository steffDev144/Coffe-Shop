

const CoffeeListItem = (props) => {
    const {img, title, country, price} = props;
    return (
        <li className="coffee-list__item">
            <a href="/">
                <div className="coffee-list__item_img">
                    <img src={img.coffeeImg} alt="coffee-img"/>
                </div>
                <div className="coffee-list__item_title">{title}</div>
                <div className="coffee-list__item_subtitle">{country}</div>
                <div className="coffee-list__item_price">{price}</div>
            </a>
        </li>
    )
}

export default CoffeeListItem;