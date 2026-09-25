import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main className="page-error">

      <div className="page-error-card">

        <div className="page-error-code">
          404
        </div>

        <div className="page-error-icon">
          🔎
        </div>

        <h1>
          Page Not Found
        </h1>

        <p>
          The page you are trying to open does not
          exist or the URL may be incorrect.
        </p>

        <div className="page-error-path">
          {location.pathname}
        </div>

        <button
          type="button"
          onClick={() => {
            navigate("/");

            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "instant",
            });
          }}
        >
          ← Go to Home
        </button>

      </div>

    </main>
  );
};

export default PageNotFound;