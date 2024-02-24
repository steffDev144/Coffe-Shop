import './coffee-list.scss';
import CoffeeListItem from "../coffee-list-item/coffee-list-item";

const coffeeList = (props) => {
    const {data} = props;
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeListItem
                key={id}
                {...itemProps} />
        )
    })
    return (
        <ul className="coffee-list__wrapper">
            {elements}
        </ul>
    )
}

export default coffeeList;