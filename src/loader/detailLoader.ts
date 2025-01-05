import { LoaderFunctionArgs } from "react-router";

export async function detailLoader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  try {
    const response = await fetch(
      `https://hp-api.herokuapp.com/api/characters/${id}`,
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
