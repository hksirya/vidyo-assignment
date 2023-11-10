import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex min-h-screen ">
      <div className="flex flex-col justify-center items-center mx-auto space-y-10">
        <h1 className="font-poppins text-6xl font-bold ">:/ Oops!</h1>
        <p className="font-poppins text-3xl text-zinc-600">
          Sorry, an unexpected error has occurred.
        </p>
      </div>
    </div>
  );
}
