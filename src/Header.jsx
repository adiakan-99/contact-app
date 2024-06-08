import { useNavigate } from "react-router-dom"
import { db } from "./firebase";
import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";

const Header = () => {
  let navigate = useNavigate();

  const [contactData, setContactData] = useState([]);

  const [filteredContactData, setFilteredContactData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  function addTheContact() {
    navigate("/add");
  }

  useEffect(function () {
    db.collection("contact-collection").orderBy("contactName", "asc").onSnapshot(function (snapshot) {
      setContactData(snapshot.docs.map(function (info) {
        return { docID: info.id, docData: info.data() };
      }))
    })
  }, [])

  function collectTheData(event) {
    const query = event.target.value.toLowerCase()
    setSearchQuery(query);
    setFilteredContactData(contactData.filter(function (contact) {
      if (contact.docData.contactName.toLowerCase().includes(query)) {
        return contact;
      }
    }))
  }

  return (
    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
      <div className="row mb-3" style={{ display: "flex", alignItems: "center" }}>
        <div className="col-md-6 col-sm-6">
          <input className="form-control" type="text" placeholder="Search Contact here..." onChange={collectTheData} />
        </div>
        <div className="col-md-4 col-sm-6">
          <button className="btn btn-success ml-2" onClick={addTheContact}><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
      {
        (filteredContactData.length === 0 && searchQuery != "") ?
          <h5 style={{fontStyle: "italic"}}>No Contacts found!</h5> :
          (filteredContactData.length == 0) ?
            contactData.map(function (contact) {
              return <ContactCard contactName={contact.docData.contactName} contactNumber={contact.docData.contactNumber} contactEmail={contact.docData.contactEmail} docID={contact.docID} />
            }) :
            filteredContactData.map(function (contact) {
              return <ContactCard contactName={contact.docData.contactName} contactNumber={contact.docData.contactNumber} contactEmail={contact.docData.contactEmail} docID={contact.docID} />
            })
      }
    </div>
  )
}

export default Header