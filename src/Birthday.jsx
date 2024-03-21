function Birthday({ id, name, age, image, handleClick }) {
  return (
    <article className="person">
      <img src={image} alt={image} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
        <button
          type="button"
          className="btn"
          style={{ marginTop: '5px' }}
          onClick={() => {
            handleClick(id);
          }}
        >
          delete
        </button>
      </div>
    </article>
  );
}
export default Birthday;
