import {Component} from 'react';
import coffeeImg from './img/coffee-img.png';
// import MainPage from "./pages/main-page";
// import OurCoffeePage from "./pages/our-coffee-page";
import OurCoffeeSingle from "./pages/our-coffee-single";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, img: {coffeeImg}, title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99$"},
                {id: 2, img: {coffeeImg}, title: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99$"},
                {id: 3, img: {coffeeImg}, title: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "6.99$"},
            ]
        }
    }
  render() {
    // const {data} = this.state;
    return (
      <div className="App">
          {/*<MainPage/>*/}
          {/*<OurCoffeePage data={data}/>*/}
          <OurCoffeeSingle />
      </div>
    );
  }
}

export default App;
