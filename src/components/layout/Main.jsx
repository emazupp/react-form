import Form from "../Form/Form";
import { articoli } from "../../data/articoli";
import { useState } from "react";
import Button from "../Button";

export default function Main() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const [articles, setArticle] = useState(articoli);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, author, status };
    setArticle([...articles, newArticle]);
  };

  const handleDelete = (title) => {
    setArticle(articles.filter((item) => item.title != title));
  };

  return (
    <main>
      <h2 className="h3">Inserisci articolo</h2>
      <div className="row">
        <div className="col-6">
          <div className="card p-4">
            <Form
              handleSubmit={handleSubmit}
              setTitle={setTitle}
              setAuthor={setAuthor}
              setStatus={setStatus}
            />
          </div>
        </div>
      </div>

      <div className="row mt-5 g-5">
        {articles.map((item, index) => {
          return (
            <>
              <div key={index} className="col-3">
                <div className="card p-3">
                  {item.title && (
                    <p>
                      <b>Titolo:</b> {item.title}
                    </p>
                  )}
                  {item.author && (
                    <p>
                      <b>Autore:</b> {item.author}
                    </p>
                  )}
                  {item.status && (
                    <p>
                      <b>Stato:</b> {item.status}
                    </p>
                  )}
                  <div className="d-flex justify-content-end">
                    <Button
                      icon="trash"
                      title={item.title}
                      handleFunction={handleDelete}
                    />
                    <Button
                      icon="edit"
                      title={item.title}
                      handleFunction={handleDelete}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
