import Dropdown from "./Dropdown";
import InputText from "./InputText";
import Button from "../Button";

export default function Form({ handleSubmit, setTitle, setAuthor, setStatus }) {
  return (
    <>
      <form id="articles-form" onSubmit={handleSubmit}>
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
