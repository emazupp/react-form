import Dropdown from "./Dropdown";
import InputText from "./InputText";
import Button from "./Button";

export default function Form({ handleSubmit, setTitle, setAuthor }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputText text="Titolo" setFunction={setTitle} />
        <InputText text="Autore" setFunction={setAuthor} />

        <div className="d-flex justify-content-between">
          <Dropdown />
          <Button text="Invia" />
        </div>
      </form>
    </>
  );
}
