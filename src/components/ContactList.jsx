import React from "react"; 
import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";




export default function ContactList({setSelectedContactId}) { 
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
                const result = await response.json()
                setContacts(result)
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchContacts()
    },[])
    

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
            return <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
            />;
        })}
      </tbody>
    </table>
  );
}