import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = (id) => {
    const newArray = people.filter((person) => person.id != id);
    setPeople(newArray);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} handleClick={handleClick} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear
        </button>
      </section>
    </main>
  );
};
export default App;
