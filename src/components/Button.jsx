export default function Button({ icon, title, handleDelete }) {
  return (
    <button className="btn" onClick={() => handleDelete(title)}>
      <i className={`fa-solid fa-${icon} fa-xl`}></i>
    </button>
  );
}
