import './our-coffee-single-main.scss';
import coffeeImg from '../../img/coffee-img.png';
import Beans from "../beans/beans";

const OurCoffeeSingleMain = () => {
    return (
        <section className="our-single">
            <div className="container">
                <div className="our-single__wrapper">
                    <div className="our-single__img">
                        <img src={coffeeImg} alt="coffee-img"/>
                    </div>
                    <div className="our-single__right">
                        <h3>About it</h3>
                        <Beans color="black"/>
                        <p>Country: <span>Brasil</span></p>
                        <p>Description: <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
                        <p>Price:<span className="our-single__price">16.99$</span></p>
                    </div>
                </div>
            </div>
        </section>
)
}

export default OurCoffeeSingleMain;