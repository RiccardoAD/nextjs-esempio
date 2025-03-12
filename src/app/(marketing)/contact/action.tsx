"use server";

export async function submitContact(formData: FormData) {
  // Simula un ritardo di 2 secondi (ad esempio per un'operazione lato server)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Controllo che tutti i campi siano compilati
  if (!name || !email || !message) {
    return {
      message: "Tutti i campi sono obbligatori",
      type: "error" as const,
    };
  }

  // Genera casualmente un errore (es. 1% di probabilità)
  if (Math.random() > 0.99) {
    return {
      message: "Qualcosa è andato storto, riprova",
      type: "error" as const,
    };
  }

  // Se tutto va bene, restituisce messaggio di successo
  return {
    message: "Messaggio inviato con successo!",
    type: "success" as const,
  };
}