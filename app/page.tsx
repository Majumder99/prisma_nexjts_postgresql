/* eslint-disable @next/next/no-async-client-component */
"use client";

import { submitTask } from "@/action/actions";
import prisma from "@/lib/db";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Task Lists
      </h1>
      <form
        action={submitTask}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-6"
      >
        <div className="flex items-center border-b border-gray-300 py-2">
          <input
            type="text"
            placeholder="Enter Task"
            name="title"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Add Task
          </button>
        </div>
      </form>

      <ul className="w-full max-w-md bg-white rounded-lg shadow-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-4 border-b border-gray-200"
          >
            <span className="text-gray-800">{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
