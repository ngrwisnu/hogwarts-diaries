export async function characterLoader() {
  try {
    const response = await fetch(
      `https://hp-api.herokuapp.com/api/characters`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
