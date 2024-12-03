import Dropdown from "./Dropdown";
import InputText from "./InputText";
import Button from "./Button";
import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputText text="Titolo" setFunction={setTitle} />
        <InputText text="Autore" />

        <div className="d-flex justify-content-between">
          <Dropdown />
          <Button text="Invia" />
        </div>
      </form>
    </>
  );
}
