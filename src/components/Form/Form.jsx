import Dropdown from "./Dropdown";

export default function Form() {
  return (
    <>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Titolo
        </span>
        <input type="text" class="form-control" placeholder="..." />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          Autore
        </span>
        <input type="text" class="form-control" placeholder="..." />
      </div>

      <Dropdown />
    </>
  );
}
