'use client';
import { useState, useEffect } from 'react';

export default function ClientUsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        Caricamento...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold pb-4">Utenti (Client Fetch)</h1>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user: any) => (
          <div key={user.id} className="p-4 bg-zinc-800 rounded">
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p className="text-zinc-200">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 'use client';: Indica che il componente deve essere renderizzato lato client (necessario se vuoi usare gli hook di React in Next.js 13+).
// useState e useEffect: Hook di React per gestire lo stato locale (users e isLoading) e per eseguire un effetto (la chiamata fetch) quando il componente viene montato.
// fetch: Viene chiamato l’endpoint di test https://jsonplaceholder.typicode.com/users, che restituisce una lista di utenti fittizi.
// setIsLoading(false): Una volta ottenuti i dati, si disattiva lo stato di caricamento.
// Condizione if (isLoading): Mostra un messaggio “Caricamento...” mentre la fetch è in corso.
// Render finale: Mappa l’array di utenti (users) e mostra per ognuno nome ed email.