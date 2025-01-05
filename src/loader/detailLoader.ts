import { LoaderFunctionArgs } from "react-router";

export async function detailLoader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SOME_KEY || "http://localhost:3000"}/api/${id}`,
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
