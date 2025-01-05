export async function characterLoader() {
  try {
    const response = await fetch("http://localhost:3000/api");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
