import Form from "../Form/Form";

export default function Main() {
  return (
    <main>
      <h2 className="h3">Inserisci articolo</h2>
      <div className="row">
        <div className="col-6">
          <div className="card p-4">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
