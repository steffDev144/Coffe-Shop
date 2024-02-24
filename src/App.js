import {Component} from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import coffeeImg from './img/coffee-img.png';
import MainPage from "./pages/main-page";
import OurCoffeePage from "./pages/our-coffee-page";
import OurCoffeeSingle from "./pages/our-coffee-single";
import ForYouPleasure from "./pages/for-you-pleasure";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, img: {coffeeImg}, title: "AROMIICO Coffee 1 kg", country: "Brazil", price: "6.99$", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {id: 2, img: {coffeeImg}, title: "AROMISddTICO Coffee 2 kg", country: "Columbia", price: "6.99$", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {id: 3, img: {coffeeImg}, title: "AROMISTICO2 Coffee 3 kg", country: "Kenya", price: "6.99$", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                {id: 4, img: {coffeeImg}, title: "AROMISTICO2 Coffee 4 kg", country: "Kenya", price: "6.99$", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
            ],
            term: '',
            filter: '',
        }
    }

    onUpdateTerm = (term) => {
        this.setState({term});
    }
    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    searchData = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.title.indexOf(term) > -1
        })
    }

    filterData = (items, filter) => {
        if (filter === '') {
            return items
        }

        return items.filter(item => {
            return item.country === filter
        })
    }

  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filterData(this.searchData(data, term), filter);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/our-coffee",
            element: <OurCoffeePage data={visibleData} onUpdateTerm={this.onUpdateTerm} onUpdateFilter={this.onUpdateFilter}/>,
        },
        {
            path: "/our-coffee/:id",
            element: <OurCoffeeSingle data={data} />,
        },
        {
            path: "/for-you-pleasure",
            element: <ForYouPleasure data={data} />,
        },
    ]);
    return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
