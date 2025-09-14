// montamos nuestro servidor

// importamos las dependencias
import express from "express"; // framework para montar el servidor
import cors from "cors"; // para permitir peticiones desde el frontend
import dotenv from "dotenv"; // para gestionar variables de entorno

// configuramos variables de entorno con dotenv
dotenv.config();

// creamos la aplicacion de express
const app = express();
const PORT = process.env.PORT || 3001;

// middlewares para parsear JSON
app.use(
  cors({
    origin: "http://localhost:5173", // URL por defecto de frontend
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json()); // para parsear JSON en el body de las peticiones

let tasks = [
  { id: 1, title: "Apreder React", complete: false },
  { id: 2, title: "Tarea 1", complete: false },
  { id: 3, title: "Tarea 3", complete: false },
];

// rutas endpoint
// GET para obtener todas la tareas que tengo en mi lista
app.get("/api/tasks", (req, res) => {
  console.log("alguien pidio las tareas");
  res.json(tasks);
});

// get para ontener una tarea por su id
app.get("/api/tasks/:id", (req, res) => {
  const { id } = req.params; // sacamos el id de los parametros de la ruta
  const task = tasks.find((t) => t.id === parseInt(id)); // buscamos la tarea por u id

  if (!task) {
    return res.status(404).json({ error: "Tarea no encontrada" }); //
  }

  res.json(task); // devolvemos la tarea encontrada
});

// POST: Crear nueva tarea
app.post('/api/tasks', (req, res) => {
    // 👨‍🏫 DIÁLOGO: "req.body tiene los datos que envía React"
    const { title } = req.body;
 
    if (!title) {
        return res.status(400).json({ error: 'El título es requerido' });
    }
 
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    };
 
    tasks.push(newTask);
    console.log('✅ Nueva tarea creada:', newTask);
    res.status(201).json(newTask);
});
 
// PUT: Actualizar tarea (marcar como completada)
app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
 
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
 
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
 
    tasks[taskIndex].completed = completed;
    console.log('📝 Tarea actualizada:', tasks[taskIndex]);
    res.json(tasks[taskIndex]);
});
 
// DELETE: Eliminar tarea
app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
 
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    }
 
    const deletedTask = tasks.splice(taskIndex, 1);
    console.log('🗑️ Tarea eliminada:', deletedTask[0]);
    res.json({ message: 'Tarea eliminada correctamente' });
});
 
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log('📝 Endpoints disponibles:');
    console.log('   GET    /api/tasks');
    console.log('   GET    /api/tasks/:id');
    console.log('   POST   /api/tasks');
    console.log('   PUT    /api/tasks/:id');
    console.log('   DELETE /api/tasks/:id');
});