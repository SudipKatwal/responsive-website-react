
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import data from "../data";


const ServiceDetail = () => {

    const [detail, setDetail] = useState({});
    
    const { id } = useParams();
    
    useEffect(() => {
        const filter = data.filter((item) => {
            return (parseInt(item.id) === parseInt(id));
        });
        setDetail(filter[0]);
    },[id]);

    return (
        <>
            <Navbar />

            <section className="section-content">
                <div className="container">
                    <div className="mt-5">
                        <h2>Welcome to Service Detail Page!!! </h2>
                        <div className="card p-5">
                            <img src={`../images/${detail.image}`}  alt={detail.title} width="350px" />
                            <div>
                                <h3>{detail.title}</h3>
                                <p> { detail.content} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ServiceDetail;