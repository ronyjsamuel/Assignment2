const style = {
  borderSpacing: "5px"
}
const ContactList = (props) => {
  return <table style = {style}   className="contacts-table" >
    <tbody>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
        {contact.map((contact, i)=> {
          return <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            </tr>
        })}

    </tbody>
  </table>
};

const data = [
  {
    name: "Shinto Thomas",
    email: "sthomas@suyati.com",
  },
  {
    name: "Praphul",
    email: "pnangeelil@suyati.com",
  },
  {
    name: "Shamnad V A",
    email: "sabdul@suyati.com",
  },
];


const contactManagement1 = <section id="contact-list">
  <h1>Contacts</h1>
  <ContactList contact={data}></ContactList>
</section>;


const contactManagement = React.createElement(
  "section",
  { id: "contact-list" },
  React.createElement("h1", null, "Contacts"),
  React.createElement(ContactList, { contacts: data }, null)
);

ReactDOM.render(
  contactManagement,
  document.getElementById('react-container')
);