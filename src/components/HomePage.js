import React, { useState, useEffect } from 'react';
import ListNotes from './ListNotes.js';
import { NavLink } from 'react-router-dom';
import fetchGet from './fetch/fetchGet.js';

function HomePage() {
  const [state, setState] = useState({ notes: [] });

  useEffect(() => {
    fetchGet().then((data) => setState((prev) => ({ ...prev, notes: data })));
  }, []);

  return (
    <div className="center">
      <section className="header">
        <div className="center__title">
          <button>
            <NavLink to="/posts/new">Создать Пост</NavLink>
          </button>
        </div>
      </section>
      {state.notes.length ? <ListNotes list={state.notes} /> : null}
    </div>
  );
}

export default HomePage;
