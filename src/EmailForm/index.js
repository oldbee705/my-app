import { useImmer } from 'use-immer';
// import { useState } from 'react';

function EmailForm() {
  // const [person, setPerson] = useState({
  const [person, updatePerson] = useImmer({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    // person.firstName = e.target.value;
    updatePerson(draft => {
      draft[e.target.name] = e.target.value;
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name = 'firstName'
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name = 'lastName'
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name = 'email'
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

export default EmailForm;