import './main-page-best.scss';
import firstBest from '../../img/our-best/firstBest.png';
import secondBest from '../../img/our-best/secondBest.png';
import threeBest from '../../img/our-best/threeBest.png';

const MainPageBest = () => {
    return (
        <section className="best">
            <div className="container">
                <h3>Our best</h3>
                <ul className="best__wrapper">
                    <li className="best__item">
                        <a href="/">
                            <img src={firstBest} alt="1" className="best__item_img"/>
                            <span className="best__item_title">Solimo Coffee Beans 2 kg</span>
                            <span className="best__item_price">7.63$</span>
                        </a>
                    </li>
                    <li className="best__item">
                        <a href="/">
                            <img src={secondBest} alt="2" className="best__item_img"/>
                            <span className="best__item_title">Presto Coffee Beans 1 kg</span>
                            <span className="best__item_price">10$</span>
                        </a>
                    </li>
                    <li className="best__item">
                        <a href="/">
                            <img src={threeBest} alt="3" className="best__item_img"/>
                            <span className="best__item_title">AROMISTICO Coffee 1 kg</span>
                            <span className="best__item_price">6.99$</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default MainPageBest;