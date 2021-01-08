import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useReducer, useState } from "react";
import Todo from "../components/reducer/Todo.js";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, complete: !todo.complete };

        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

export default function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Use Reducer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "30px" }}>
          React Reducer
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}

        <h2>
          <Link href="/">
            <a
              style={{
                color: "#0070f3",
                textDecoration: "underline",
              }}
            >
              Home
            </a>
          </Link>
        </h2>
      </main>
    </div>
  );
}
