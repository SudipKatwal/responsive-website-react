import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />

            <section className="section-content">
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-7 pt-5"><br/><br/><br/><br/>
                            <h1>WELCOME TO HOME PAGE</h1><br/>
                            <h3>Grow your bussiness with Digitate Nepal</h3>
                            <p>This is HOME page and We are the team of developer</p>
                        </div>
                        <div className="col-5 p-5">
                            <img src="./images/home.png" width="100%" alt="Digitate Nepal" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;