import "bootstrap/js/dist/dropdown";

export default function Dropdown() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Stato
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            draft
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            published
          </a>
        </li>
      </ul>
    </div>
  );
}
