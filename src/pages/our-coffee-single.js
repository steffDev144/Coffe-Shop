
import Header from "../components/header/header";
import OurCoffeeMain from "../components/our-coffee-main/our-coffee-main";
import OurCoffeeSingleMain from "../components/our-coffee-single-main/our-coffee-single-main";
import Footer from "../components/footer/footer";

const OurCoffeeSingle = (props) => {
    return (
        <>
            <Header />

            <OurCoffeeMain />
            <OurCoffeeSingleMain data={props.data}/>

            <Footer />
        </>
    )
}

export default OurCoffeeSingle;