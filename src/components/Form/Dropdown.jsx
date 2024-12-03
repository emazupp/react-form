import "bootstrap/js/dist/dropdown";

export default function Dropdown() {
  return (
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Stato
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            draft
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            published
          </a>
        </li>
      </ul>
    </div>
  );
}
