export async function fetchRandomUser() {
  const response = await fetch("https://randomuser.me/api/");
  if (!response.ok) {
    throw new Error("Failed to fetch random user");
  }
  const data = await response.json();
  return data.results[0]; // Renvoie les informations sur le premier utilisateur dans la liste
}
