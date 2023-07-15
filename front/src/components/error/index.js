import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1
        style={{
          fontFamily: "Amatic SC, cursive",
          fontSize: "45px",
          color: "#222222",
        }}
      >
        Упс...
      </h1>
      <p
        style={{
          fontFamily: "Amatic SC, cursive",
          fontSize: "35px",
          color: "#696969",
        }}
      >
        Извините, произошла непредвиденная ошибка.
      </p>
      <p>
        {/* @ts-ignore */}
        <i
          style={{
            fontFamily: "Amatic SC, cursive",
            fontSize: "25px",
            color: "#696969",
          }}
        >
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
