
import aboutImg from '../img/our-coffee/aboutImg.png';

import Header from "../components/header/header";
import OurCoffeeMain from "../components/our-coffee-main/our-coffee-main";
import Footer from "../components/footer/footer";
import CoffeeAbout from "../components/coffee-about/coffee-about";
import OurCoffeeSearch from "../components/our-coffee-search/our-coffee-search";
import OurCoffeeFilter from "../components/our-coffee-filter/our-coffee-filter";
import CoffeeList from "../components/coffee-list/coffee-list";


const OurCoffeePage = (props) => {
    const {data, onUpdateTerm, onUpdateFilter} = props;
    const text = <p className="coffee-about__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br/><br/> Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br/> As greatly removed calling pleased improve an. Last ask him cold feel <br/> met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
    return (
        <>
        <Header />

        <OurCoffeeMain />
        <CoffeeAbout title="About our beans" img={aboutImg} text={text} />
        <div className="filter-search">
            <OurCoffeeSearch onUpdateTerm={onUpdateTerm} />
            <OurCoffeeFilter onUpdatefilter={onUpdateFilter}/>
        </div>
        <CoffeeList data={data} />

        <Footer />
        </>
    )
}

export default OurCoffeePage;