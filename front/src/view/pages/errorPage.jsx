import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error">
      <h1>Oops!</h1>
      <h4>Sorry, an unexpected error has occurred.</h4>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
