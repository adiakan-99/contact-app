import React from 'react'
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';

const ContactCard = (props) => {

  const navigate = useNavigate();

  function deleteTheContact(receievedDocID) {
    db.collection("contact-collection").doc(receievedDocID).delete();
    alert("Requested contact is deleted");
  }

  function updateTheContact() {
    navigate("/add", { state: { docID: props.docID, contactName: props.contactName, contactNumber: props.contactNumber, contactEmail: props.contactEmail } });
  }  

  return (
    <div className="card" style={{ width: "30rem", marginBottom: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {props.contactName}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Number: {props.contactNumber}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">Email: {props.contactEmail}</h6>
        <button className="btn btn-warning" onClick={updateTheContact} style={{marginRight: "5px"}}><i class="fa-solid fa-pen-to-square"></i></button>
        <button className="btn btn-danger" onClick={function () {
          deleteTheContact(props.docID)
        }
        }><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ContactCard