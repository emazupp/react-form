export default function Button({ icon, title, handleFunction }) {
  return (
    <button className="btn btn-danger" onClick={() => handleFunction(title)}>
      <i className={`fa-solid fa-${icon} fa-xl`}></i>
    </button>
  );
}
