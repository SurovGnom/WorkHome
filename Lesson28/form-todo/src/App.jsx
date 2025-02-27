import './App.css'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormTodo =Yup.object().shape({
    task: Yup.string()
        .min(5,"Занадто мало!")
        .required(),
    desc: Yup.string()
        .min(5,'Занадто мало!!')
        .required(),
})

function App() {

  return (
    <div>
        <h2>Todo List</h2>
        <Formik
        initialValues={{
            task: "",
            desc: "",
        }}
        validationSchema={FormTodo}
        onSubmit={ (value) => {
            const ul = document.createElement("ul");
            ul.classList.add("list-group");
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            const h3 = document.createElement("h3");
            const span = document.createElement("span");
            h3.textContent = value.task;
            span.textContent = value.desc;

            li.appendChild(h3);
            li.appendChild(span);
            ul.appendChild(li);
            document.body.appendChild(ul);


        }}
        >
            {({ errors, touched }) => (
            <Form>
                <label htmlFor="task">Task</label>
                <Field id="task" name="task" placeholder="Task"></Field>
                {errors.task && touched.task ? (
                    <div>{errors.task}</div>
                ) : null}
                <label htmlFor="desc">Description</label>
                <Field id="desc" name="desc" placeholder="Description"/>
                {errors.desc && touched.desc ? (
                    <div>{errors.desc}</div>
                ) : null}
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </Form>
                )}
        </Formik>
    </div>
  )
}

export default App
