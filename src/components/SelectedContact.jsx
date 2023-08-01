import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchSelectedContact = async () => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedContactId) {
      fetchSelectedContact();
    }
  }, [selectedContactId]);

  const handleGoBack = () => {
    setSelectedContactId(null);
  };

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Selected Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      {/* Display other contact details as needed */}
      <button onClick={handleGoBack}>Go Back to Contact List</button>
    </div>
  );
}