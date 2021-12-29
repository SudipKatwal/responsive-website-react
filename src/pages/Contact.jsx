import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
    const [forms,setForms] = useState({});

    const inputChanged = (event) => {
        const { name, value } = event.target;
        setForms((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(forms);
        alert('I am submitted!');
    }

    return (
        <>
            <Navbar />

            <section className="section-content">
                <div className="container">
                    <div className="contact-form mt-5">
                        <h2>Welcome to Contact Page!!!</h2>
                        <form className="form" onSubmit={submitForm}>
                            <div className="form-group mt-4">
                                <input type="text" placeholder="Enter your name" className="form-control" name="name" onChange={inputChanged} value={forms.name}/>
                            </div>
                            <div className="form-group mt-4">
                                <input type="text" className="form-control" placeholder="Enter your email" name="email" onChange={inputChanged} value={forms.email}/>
                            </div>
                            <div className="form-group mt-4">
                                <textarea className="form-control" rows="5" placeholder="Enter your message here" name="message" onChange={inputChanged} value={forms.message}></textarea>
                            </div>
                            <div className="form-group mt-4">
                                <input type="submit" className="btn btn-success btn-lg" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;