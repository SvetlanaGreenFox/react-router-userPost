import React from 'react';
import Note from './Note.js';
import { Link } from 'react-router-dom';

function ListNotes({ list }) {
  return (
    <div className="wrapper__list-notes">
      {list.length ? (
        list.map(({ id, content }) => {
          return (
            <div
              key={id}
              className="wrapper__note"
            >
              <div className="note">
                <Link to={`/posts/${id}`}>
                  <Note content={content} />
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p>No notes</p>
      )}
    </div>
  );
}

export default ListNotes;
