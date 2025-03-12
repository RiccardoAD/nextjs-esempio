// app/prove/fetch-server/page.tsx

export default async function UsersPage() {
    // Eseguo una fetch verso un endpoint di test
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // Converto la risposta in JSON
    const users = await res.json();
  
    // Renderizzo la pagina
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Utenti (Server Fetch)</h1>
        <div className="grid gap-4">
          {users.map((user: any) => (
            <div key={user.id} className="p-4 bg-zinc-800 rounded">
              <h2 className="font-bold">{user.name}</h2>
              <p className="text-zinc-400">{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }