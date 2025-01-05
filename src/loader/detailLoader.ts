export async function detailLoader({ request, params }) {
  const id = params.id;

  try {
    const response = await fetch(`http://localhost:3000/api/${id}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
