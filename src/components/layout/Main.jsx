import Form from "../Form/Form";
import { articoli } from "../../data/articoli";
import { useState } from "react";
import Button from "../Button";

export default function Main() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [articles, setArticle] = useState(articoli);

  const handleCreate = (e) => {
    e.preventDefault();
    const newArticle = { title, author, status };
    setArticle([...articles, newArticle]);
  };

  const handleDelete = (title) => {
    setArticle(articles.filter((item) => item.title != title));
  };

  const handleEdit = (event, title) => {
    event.preventDefault();
    const indexEditArticle = articles.findIndex((item) => item.title == title);
    const newArticles = articles;
    newArticles[indexEditArticle].title = editedTitle;
    setArticle(newArticles);
    setEditedTitle("");
  };

  return (
    <main>
      <h2 className="h3">Inserisci articolo</h2>
      <div className="row">
        <div className="col-6">
          <div className="card p-4">
            <Form
              handleCreate={handleCreate}
              setTitle={setTitle}
              setAuthor={setAuthor}
              setStatus={setStatus}
            />
          </div>
        </div>
      </div>

      <div className="row mt-5 g-5">
        {articles.map((item) => {
          return (
            <>
              <div key={item.title} className="col-3">
                <div className="card p-3">
                  <form onSubmit={(event) => handleEdit(event, item.title)}>
                    {item.title && (
                      <p className="d-flex align-items-center gap-1">
                        <b>Titolo:</b>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={item.title}
                          onChange={(e) => setEditedTitle(e.target.value)}
                        />
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
                    <div className="d-flex justify-content-end gap-2">
                      <Button
                        icon="trash"
                        title={item.title}
                        handleFunction={handleDelete}
                      />
                      <button type="submit" className="btn btn-warning">
                        <i className="fa-solid fa-edit fa-xl"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}
