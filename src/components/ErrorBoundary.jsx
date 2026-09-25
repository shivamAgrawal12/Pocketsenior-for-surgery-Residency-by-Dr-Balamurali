import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      "Application Error:",
      error
    );

    console.error(
      "Error Info:",
      errorInfo
    );
  }

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.hash = "#/";
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="page-error">

          <div className="page-error-card">

            <div className="page-error-code">
              !
            </div>

            <div className="page-error-icon">
              ⚠️
            </div>

            <h1>
              This page could not be loaded
            </h1>

            <p>
              Something went wrong while loading
              this page. The website is still
              working, but this particular page
              encountered an error.
            </p>

            <div className="page-error-actions">

              <button
                type="button"
                onClick={this.handleReload}
              >
                ↻ Try Again
              </button>

              <button
                type="button"
                onClick={this.handleHome}
              >
                ← Go to Home
              </button>

            </div>

            {import.meta.env.DEV &&
              this.state.error && (
                <details className="page-error-details">
                  <summary>
                    Technical details
                  </summary>

                  <pre>
                    {this.state.error.message}
                  </pre>
                </details>
              )}

          </div>

        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;