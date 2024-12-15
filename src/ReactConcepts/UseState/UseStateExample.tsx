import React, { useState } from 'react';

export default function UseStateExample() {
  const [firstName, setFirstName] = useState('Jane');
  const [lastName, setLastName] = useState('Jacobs');
  const [editMode, setEditMode] = useState(false);

  const handleEnterEditMode = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  return (
    <form className="flex flex-col text-left">
      <label>
        First name:
        <span className="ml-4">
          {editMode ? (
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          ) : (
            <b>{firstName}</b>
          )}
        </span>
      </label>
      <label>
        Last name:
        <span className="ml-4">
          {editMode ? (
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          ) : (
            <b>{lastName}</b>
          )}
        </span>
      </label>

      {editMode ? (
        <button type="submit" onClick={handleSaveProfile}>
          Save Profile
        </button>
      ) : (
        <button type="submit" onClick={handleEnterEditMode}>
          Edit Profile
        </button>
      )}

      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
