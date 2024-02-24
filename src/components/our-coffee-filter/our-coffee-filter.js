import {Component} from "react";
import './our-coffee-filter.scss';

class OurCoffeeFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnFilter: [
                {title: "Brazil", active: false},
                {title: "Kenya", active: false},
                {title: "Columbia", active: false},
            ]
        }
    }

    onUpdateFilter = (e) => {
        const filter = e.currentTarget.getAttribute("data-filter");
        this.props.onUpdatefilter(filter);
    }
    render() {
        const {btnFilter} = this.state;
        const elements = btnFilter.map(item => {
            let clazz = "filter__item";
            if(item.active) {
                clazz += " filter__item_active";
            }
            return <button onClick={this.onUpdateFilter} className={clazz} data-filter={item.title}>{item.title}</button>
        })
        return (
            <div className="filter">
                <div className="filter__text">Or filter</div>
                <div className="filter__wrapper">
                    {elements}
                </div>
            </div>
        )
    }
}

export default OurCoffeeFilter;