async function getData() {
  const res = await fetch('http://localhost:3000/api/todos/1')
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main>
      {
        <h1>{data.title}</h1>
      }
    </main>
  )
}
