
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import data from "../data";

const Services = () => {
    return (
        <>
            <Navbar />

            <section className="section-content">
                <div className="container">
                    <div className="row mt-5">
                        <h2 className="text-center">Welcome to Services Page!!!</h2>
                        {
                            data.map((item, ind) => {
                                return (
                                    <div className="col-4 form-group" key={ind}>
                                        <div className="card m-5">
                                            <img src={`../images/${item.image}`} alt="" height="250px" />
                                            <div className="text-center">
                                                <h3>{item.title}</h3>
                                                <Link className="btn btn-default" to={`/services/${item.id}`}>Visit Page</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Services;