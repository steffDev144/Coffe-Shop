import './main-page-main.scss';

import Beans from '../beans/beans';

const MainPageMain = () => {
    return (
        <section className="main">
            <div className="container">
                <h1>Everything You Love About Coffee</h1>
                <Beans color="white" />
                <h2>We makes every day full of energy and taste</h2>
                <h2>Want to try our beans?</h2>
                <a href="/" className="main__more">More</a>
            </div>
        </section>
    )
}

export default MainPageMain;