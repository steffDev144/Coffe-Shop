import {Component} from "react";
import './our-coffee-search.scss';

class OurCoffeeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    render() {
        return(
            <div className="search">
                <label htmlFor="search">Lookiing for</label>
                <input type="text" id="search" placeholder="start typing here..."/>
            </div>
        )
    }
}

export default OurCoffeeSearch;