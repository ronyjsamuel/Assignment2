import React from "react";

export const ContactList = (props) => {
   const {contacts, deleteContact} = props;
  // const deleteAllContact = () => {
  //   alert("work in progress");
  //   contact1 =[];
  // }



  return (
    <table className="contacts-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {contacts.map((contact, i) => (
          <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td onClick={()=>deleteContact(contact.id)}>CLEAR CONTACT</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
