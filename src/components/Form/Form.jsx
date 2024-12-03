import Dropdown from "./Dropdown";
import InputText from "./InputText";
import Button from "../Button";

export default function Form({ handleCreate, setTitle, setAuthor, setStatus }) {
  return (
    <>
      <form onSubmit={handleCreate}>
        <InputText text="Titolo" setFunction={setTitle} />
        <InputText text="Autore" setFunction={setAuthor} />

        <div className="d-flex justify-content-between">
          <Dropdown setStatus={setStatus} />
          <button type="submit" className="btn btn-primary">
            Invia
          </button>
        </div>
      </form>
    </>
  );
}
