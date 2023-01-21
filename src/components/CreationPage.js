import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import fetchPush from './fetch/fetchPush.js';
import _ from 'lodash';

export default function CreationPage() {
  const [state, setState] = useState({ id: _.uniqueId(), content: '' });

  const handleChange = (e) => {
    const { value } = e.target;

    setState((prev) => ({ ...prev, content: value }));
  };

  const addNote = () => {
    if (state.content.length === 0) return;
    const responce = fetchPush(state).then((data) => data.json());
  };

  return (
    <div className="wrapper__add-note">
      <h3>New Note</h3>
      <textarea value={state.content} onChange={handleChange}></textarea>
      <button className="add-note__btn" onClick={addNote}>
        <NavLink to="/">Add</NavLink>
      </button>
    </div>
  );
}
