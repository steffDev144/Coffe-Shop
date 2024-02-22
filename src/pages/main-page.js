import Header from "../components/header/header";
import MainPageMain from "../components/main-page-main/main-page-main";
import MainPageAbout from "../components/main-page-about/main-page-about";
import MainPageBest from "../components/main-page-best/main-page-best";
const MainPage = () => {
    return (
        <>
            <Header />
            <MainPageMain />
            <MainPageAbout />
            <MainPageBest />
        </>
    )
}

export default MainPage;