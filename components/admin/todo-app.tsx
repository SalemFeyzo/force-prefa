"use client";

import { tx, id, type User, type InstantObject } from "@instantdb/react";
import { LuTrash } from "react-icons/lu";
import { Checkbox, Input } from "@headlessui/react";
import { db } from "@/lib/instantdb";
import Header from "./header";

export default function TodoApp() {
  const { user } = db.useAuth();
  // Read Data
  const { isLoading, error, data } = db.useQuery({
    todos: {},
  });
  if (isLoading) {
    return <div>Fetching data...</div>;
  }
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  const { todos } = data;

  return (
    <div className="flex flex-col gap-2">
      <Header name="Todos" />
      <div className="flex flex-col gap-2">
        <TodoForm todos={todos} user={user} />
        <TodoList todos={todos} />
        <ActionBar todos={todos} />
      </div>
    </div>
  );
}

// Write Data
// ---------
function addTodo(text: string, authorId: string) {
  const todoId = id();
  db.transact([
    tx.todos[todoId]
      .update({
        text,
        done: false,
        createdAt: Date.now(),
      })
      .link({ author: authorId }),
    tx.authors[authorId].link({
      todos: todoId,
    }),
  ]);
}

function deleteTodo(todo: InstantObject) {
  db.transact(tx.todos[todo.id].delete());
}

function toggleDone(todo: InstantObject) {
  db.transact(tx.todos[todo.id].update({ done: !todo.done }));
}

function deleteCompleted(todos: InstantObject[]) {
  const completed = todos.filter((todo) => todo.done);
  const txs = completed.map((todo) => tx.todos[todo.id].delete());
  db.transact(txs);
}

function toggleAll(todos: InstantObject[]) {
  const newVal = !todos.every((todo) => todo.done);
  db.transact(todos.map((todo) => tx.todos[todo.id].update({ done: newVal })));
}

// Components
// ----------
function TodoForm({
  todos,
  user,
}: {
  todos: InstantObject[];
  user: User | undefined;
}) {
  const { isLoading, error, data } = db.useQuery({
    authors: {
      $: {
        where: {
          userId: user?.id!,
        },
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Uh oh! {error.message}</div>;
  }
  return (
    <div className="relative flex flex-row gap-3">
      <button
        onClick={() => toggleAll(todos)}
        className="rounded-xl bg-gray-600 p-2 hover:bg-gray-900"
      >
        <span>All</span>
      </button>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          addTodo(e.target[0].value, data.authors[0].id);
          e.target[0].value = "";
        }}
      >
        <Input
          className="rounded-xl bg-gray-800 data-[focus]:bg-gray-700 data-[hover]:shadow"
          autoFocus
          placeholder="What needs to be done?"
          type="text"
        />
      </form>
    </div>
  );
}

function TodoList({ todos }: { todos: InstantObject[] }) {
  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex flex-row items-center justify-between rounded-xl bg-gray-700 p-3"
        >
          <Checkbox
            key={todo.id}
            checked={todo.done}
            onChange={() => toggleDone(todo)}
            className="group block size-5 rounded border data-[checked]:bg-yellow-500"
          >
            {/* Checkmark icon */}
            <svg
              className="stroke-white opacity-0 group-data-[checked]:opacity-100"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M3 8L6 11L11 3.5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Checkbox>

          <div>
            {todo.done ? (
              <span style={{ textDecoration: "line-through" }}>
                {todo.text}
              </span>
            ) : (
              <span>{todo.text}</span>
            )}
          </div>
          <LuTrash
            className="h-5 w-5 cursor-pointer text-red-400"
            onClick={() => deleteTodo(todo)}
          />
        </div>
      ))}
    </div>
  );
}

function ActionBar({ todos }: { todos: InstantObject[] }) {
  return (
    <div>
      <div>Remaining todos: {todos.filter((todo) => !todo.done).length}</div>
      <div
        className="cursor-pointer text-red-400 hover:bg-gray-900"
        onClick={() => deleteCompleted(todos)}
      >
        Delete Completed
      </div>
    </div>
  );
}
