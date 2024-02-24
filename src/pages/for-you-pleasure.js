import Header from "../components/header/header";
import ForYouPleasureMain from "../components/for-you-pleasure-main/for-you-pleasure-main";
import CoffeeAbout from "../components/coffee-about/coffee-about";
import CoffeeList from "../components/coffee-list/coffee-list";
import Footer from "../components/footer/footer";

import aboutImg from "../img/our-coffee/aboutImg2.png";

const ForYouPleasure = (props) => {
    const text = <p className="coffee-about__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br/><br/> Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br/> As greatly removed calling pleased improve an. Last ask him cold feel <br/> met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.</p>
    return (
        <>
        <Header />
        <ForYouPleasureMain />
        <CoffeeAbout title="About our goods" img={aboutImg} text={text} />
        <CoffeeList data={props.data} />
        <Footer />
        </>
    )
}

export default ForYouPleasure;