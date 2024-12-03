import Dropdown from "./Dropdown";
import InputText from "./InputText";
import Button from "./Button";

export default function Form() {
  const handleSubmit = () => {
    alert("form inviato");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputText text="Titolo" />
        <InputText text="Autore" />

        <div className="d-flex justify-content-between">
          <Dropdown />
          <Button text="Invia" />
        </div>
      </form>
    </>
  );
}
