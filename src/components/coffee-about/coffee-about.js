import './coffee-about.scss';
import Beans from "../beans/beans";

const CoffeeAbout = (props) => {
    const {title, img, text} = props;
    return (
        <section className="coffee-about">
            <div className="container">
                <div className="coffee-about__wrapper">
                    <div className="coffee-about__img">
                        <img src={img} alt="aboutImg"/>
                    </div>
                    <div className="coffee-about__right">
                        <h3>{title}</h3>
                        <Beans color="black"/>
                        {text}
                    </div>
                </div>
                <hr className="coffee-about__line"/>
            </div>
        </section>
    )
}

export default CoffeeAbout;