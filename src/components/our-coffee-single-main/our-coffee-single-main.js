import './our-coffee-single-main.scss';
import Beans from "../beans/beans";
import {useParams} from "react-router-dom";

const OurCoffeeSingleMain = (props) => {
    const {id} = useParams();
    const item = props.data.filter(item => {
       return item.id === Number(id);
    });
    return (
        <section className="our-single">
                <div className="our-single__wrapper">
                    <div className="our-single__img">
                        <img src={item[0].img.coffeeImg} alt="coffee-img"/>
                    </div>
                    <div className="our-single__right">
                        <h3>{item[0].title}</h3>
                        <Beans color="black"/>
                        <p>Country: <span>{item[0].country}</span></p>
                        <p>Description: <span>{item[0].description}</span></p>
                        <p>Price: <span className="our-single__price">{item[0].price}</span></p>
                    </div>
                </div>
        </section>
)
}

export default OurCoffeeSingleMain;