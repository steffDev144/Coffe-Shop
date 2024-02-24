
import './our-coffee-filter.scss';

const OurCoffeeFilter = () => {
    return (
        <div className="filter">
            <div className="filter__text">Or filter</div>
            <div className="filter__wrapper">
                <button className="filter__item">Brazil</button>
                <button className="filter__item">Kenya</button>
                <button className="filter__item">Columbia</button>
            </div>
        </div>
    )
}

export default OurCoffeeFilter;