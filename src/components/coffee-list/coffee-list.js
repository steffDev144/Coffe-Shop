import './coffee-list.scss';
import CoffeeListItem from "../coffee-list-item/coffee-list-item";

const coffeeList = (props) => {
    const {data} = props;
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeListItem
                key={id}
                id={id}
                {...itemProps} />
        )
    })
    return (
        <section className="coffee-list">
            <div className="container">
                <ul className="coffee-list__wrapper">
                    {elements}
                </ul>
            </div>
        </section>
    )
}

export default coffeeList;