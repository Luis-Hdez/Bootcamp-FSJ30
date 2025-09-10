import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
const API_URL = "http://localhost:3001/api/tasks/";
const POST_URL = "http://localhost:3001/api/tasks";
const PUT_URL = "http://localhost:3001/api/tasks/";

function App() {
  const [task, setTask] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchTasks = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching tasks:", error));
    //maperar data desde la api
  };

  const onSubmitForm = (data) => {
    fetch(POST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        description: data.description || "",
        completed: data.status === "completed" ? true : false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Tarea creada:", data);
        fetchTasks(); // refrescar lista después de crear
        limpirarFormulario();
      })
      .catch((error) => console.error("Error creando tarea:", error));
  };

  const limpirarFormulario = () => {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("completed").checked = false;
    document.getElementById("incomplete").checked = false;
  };

  const postTask = () => {
    fetch(POST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Tarea agregada desde el front",
        completed: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error creating task:", error));
  };

  const updateTask = (id) => {
    fetch(`${PUT_URL}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Tarea actualizada desde el front",
        completed: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchTasks();
        console.log(data);
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  const deleteTask = (id) => {
    fetch(`${API_URL}${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error deleting task:", error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)} className="container mt-4 col-md-6">
        {/* Campo Título */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-bold">
            Escribe tarea
          </label>
          <input
            type="text"
            id="title"
            className={`form-control ${errors.title ? "is-invalid" : ""}`}
            {...register("title", { required: "El título es obligatorio" })}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>

        {/* Campo Descripción */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label fw-bold">
            Descripción
          </label>
          <input
            type="text"
            id="description"
            className="form-control"
            {...register("description")}
          />
        </div>

        {/* Radio Buttons Estado */}
        <div className="mb-3">
          <label className="form-label fw-bold">Estado:</label>
          <div className="d-flex gap-3">
            <div className="form-check">
              <input
                type="radio"
                value="completed"
                id="completed"
                className="form-check-input"
                {...register("status", { required: "Selecciona un estado" })}
              />
              <label htmlFor="completed" className="form-check-label">
                Completada
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                value="incomplete"
                id="incomplete"
                className="form-check-input"
                {...register("status")}
              />
              <label htmlFor="incomplete" className="form-check-label">
                Incompleta
              </label>
            </div>
          </div>
          {errors.status && (
            <div className="text-danger small mt-1">
              {errors.status.message}
            </div>
          )}
        </div>

        {/* Botón Submit */}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Agregar tarea
          </button>
        </div>
      </form>

      <section className="container mt-4">
        {task.map((task) => (
          <div key={task.id} className="col-sm-6 col-md-6 col-lg-4 mb-4">
            <div
              className={`card h-100 ${
                task.completed ? "border-success" : "border-primary"
              }`}
            >
              <div className="card-header d-flex justify-content-between align-items-center">
                <span
                  className={`badge ${
                    task.completed ? "bg-success" : "bg-warning"
                  }`}
                >
                  {task.completed ? "Completada" : "Pendiente"}
                </span>
                <div>
                  <button className="btn btn-sm btn-outline-primary me-1">
                    ✏️
                  </button>
                  {/* <button className="btn btn-sm btn-outline-danger">🗑️</button> */}
                  <button className="btn btn-sm btn-outline-danger" onClick={() => deleteTask(task.id)}>🗑️</button>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                {task.description && (
                  <p className="card-text text-muted">{task.description}</p>
                )}

                <div className="d-flex justify-content-between align-items-center mt-3">
                  {/* <small className="text-muted">ID: #{task.id}</small> */}
                  <button
                    className={`btn btn-sm ${
                      task.completed  
                        ? "btn-outline-warning"
                        : "btn-outline-success"
                    }`}
                  >
                    {task.completed ? "Marcar pendiente" : "Marcar completada"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
