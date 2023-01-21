import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import fetchGet from './fetch/fetchGet.js';
import fetchDelete from './fetch/fetchDelete.js';

export default function ViewPost() {
  const [note, setNote] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchGet()
      .then((data) => data.find((item) => item.id === id))
      .then((data) => setNote((prev) => data));
  }, [id]);

  const deleteItem = () => {
    const responce = fetchDelete(id).then((data) => data.json());
  };

  return (
    <>
      <Link to={'/'}>
        <button className="return-homepage">Главная</button>
      </Link>
      <div className="wrapper__note">
        <div className="note__description">{note ? note.content : ''}</div>
        <Link to={`/posts/edit/${id}`}>
          <button>Редактировать</button>
        </Link>
        <Link to={'/'}>
          <button onClick={deleteItem}>Удалить</button>
        </Link>
      </div>
    </>
  );
}
