import Birthday from './Birthday';

function List({ people, handleClick }) {
  return (
    <section>
      {people.map((person) => {
        const { id } = person;
        return <Birthday {...person} key={id} handleClick={handleClick} />;
      })}
    </section>
  );
}
export default List;
