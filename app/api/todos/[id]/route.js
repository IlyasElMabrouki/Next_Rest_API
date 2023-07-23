import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function GET(request) {
  const id = request.url.slice(request.url.lastIndexOf('/')+1)
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const todo = await res.json();
  if (!todo.id) return NextResponse.json({"message":"Todo Not Found"});
  return NextResponse.json(todo);
}
