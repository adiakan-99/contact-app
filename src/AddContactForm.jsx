import { useState } from "react"
import { db } from "./firebase.js";
import { useLocation, useNavigate } from "react-router-dom";

const AddContactForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { docID, contactName, contactNumber, contactEmail } = location.state || {};

    const [name, setName] = useState(contactName || "");
    const [number, setNumber] = useState(contactNumber || "");
    const [email, setEmail] = useState(contactEmail || "");

    function collectContactName(event) {
        setName(event.target.value);
    }

    function collectContactNumber(event) {
        setNumber(event.target.value);
    }

    function collectContactEmail(event) {
        setEmail(event.target.value);
    }

    function saveTheContact() {
        // Save the data in the database

        if (docID !== undefined) {
            db.collection("contact-collection").doc(docID).update({
                contactName: name,
                contactNumber: number,
                contactEmail: email
            })
        } else {
            db.collection("contact-collection").add({
                contactName: name,
                contactNumber: number,
                contactEmail: email
            })
        }

        navigate("/")
    }

    function cancelContact() {
        navigate("/");
    }

    return (
        <div style={{ padding: "10px" }}>
            <h2>Enter Contact Details:</h2>
            <div className="row" style={{ marginBottom: "10px" }}>
                <div className="col-md-8">
                    <input type="text" className="form-control" placeholder='Enter Contact Name...' onChange={collectContactName} value={name} />
                </div>
            </div>
            <div className="row" style={{ marginBottom: "10px" }}>
                <div className="col-md-8">
                    <input type="number" className="form-control" placeholder='Enter Contact Number...' onChange={collectContactNumber} value={number} />
                </div>
            </div>
            <div className="row" style={{ marginBottom: "10px" }}>
                <div className="col-md-8">
                    <input type="email" className="form-control" placeholder='Enter Contact Email...' onChange={collectContactEmail} value={email} />
                </div>
            </div>
            <button className="btn btn-success" style={{ margin: "5px" }} onClick={saveTheContact}>
                Save <i className="fa-solid fa-floppy-disk"></i>
            </button>
            <button className="btn btn-danger" onClick={cancelContact}>
                Cancel <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    )
}

export default AddContactForm