const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./route");

require('dotenv').config()

const app = express();
app.use('/', routes);
const PORT = process.env.PORT || 5000;


mongoose.connect("mongodb+srv://eremeevroma3:"+process.env.DB_PASSWORD+"@todo.6g3sv.mongodb.net/?retryWrites=true&w=majority&appName=Todo").then(() => {
    console.log("Підключено до MongoDB");
}).catch(err => {
    console.error("Помилка підключення до MongoDB:", err);
});

const TodoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    desc: { type: String, required: true },
    completed: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", TodoSchema);

app.use(cors());
app.use(express.json());


app.get("/todos", async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: "Помилка отримання TODO" });
    }
});


app.post("/todos", async (req, res) => {
    try {
        const { text,desc} = req.body;
        const newTodo = new Todo({ text,desc});
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        res.status(400).json({ message: "Помилка створення TODO" });
    }
});


app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { text, completed } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true, runValidators: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: "ID не знайдено" });
        }
        res.json(updatedTodo);
    } catch (error) {
        res.status(400).json({ message: "Невірний ID" });
    }
});


app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: "ID не знайдено" });
        }
        res.json({ message: "TODO видалено" });
    } catch (error) {
        res.status(400).json({ message: "Невірний ID" });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на порті http://localhost:${PORT}`);
});
