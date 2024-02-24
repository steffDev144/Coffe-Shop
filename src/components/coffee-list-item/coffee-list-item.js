import {Link} from "react-router-dom";


const CoffeeListItem = (props) => {
    const {img, title, country, price, id} = props;
    const link = "/our-coffee/" + id;
    return (
        <li className="coffee-list__item">
            <Link to={link}>
                <div className="coffee-list__item_img">
                    <img src={img.coffeeImg} alt="coffee-img"/>
                </div>
                <div className="coffee-list__item_title">{title}</div>
                <div className="coffee-list__item_subtitle">{country}</div>
                <div className="coffee-list__item_price">{price}</div>
            </Link>
        </li>
    )
}

export default CoffeeListItem;