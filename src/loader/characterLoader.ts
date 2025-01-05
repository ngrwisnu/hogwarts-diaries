export async function characterLoader() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api`,
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
