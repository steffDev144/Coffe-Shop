import {Component} from "react";
import './our-coffee-search.scss';

class OurCoffeeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
    }

    render() {
        return(
            <div className="search">
                <label htmlFor="search">Lookiing for</label>
                <input onChange={this.onUpdateSearch} value={this.state.term} type="text" id="search" placeholder="start typing here..."/>
            </div>
        )
    }
}

export default OurCoffeeSearch;