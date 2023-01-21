import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';
import fetchPush from './fetch/fetchPush.js';
import { useParams } from 'react-router-dom';
import fetchGet from './fetch/fetchGet.js';

export default function EditingPage() {
  const [state, setState] = useState({ content: '' });
  const { id } = useParams();

  useEffect(() => {
    fetchGet()
      .then((data) => data.find((item) => item.id === id))
      .then((data) =>
        setState((prev) => ({ ...prev, id: data.id, content: data.content }))
      );
  }, [id]);

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
      <h3>Редактировать</h3>
      <textarea
        value={state.content ? state.content : ''}
        onChange={handleChange}
      ></textarea>
      <button className="cancel-note__btn">
        <NavLink to={`/posts/${id}`}>Отменить</NavLink>
      </button>
      <button className="add-note__btn" onClick={addNote}>
        <NavLink to="/">Сохранить</NavLink>
      </button>
    </div>
  );
}
