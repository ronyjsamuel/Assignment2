import React from "react";

const ContactList = ({ contacts }) => {
  let contact1 = contacts;
  const deleteAllContact = () => {
    alert("work in progress");
    contact1 =[];
  }



  return (
    <table className="contacts-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {contact1.map((contact, i) => (
          <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td onClick={deleteAllContact}>CLEAR ALL CONTACTS</td>


          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
