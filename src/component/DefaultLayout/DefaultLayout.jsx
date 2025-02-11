import { GithubOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import "./DefaultLayout.css";

const DefaultLayout = ({ children }) => {
  const history = useHistory();

  const navigateToAuthenticationPage = () => {
    history.push("/authentication");
  };
  const navigateToPhoneNumbersPage = () => {
    history.push("/phone-numbers");
  };

  return (
    <>
      <div className="default-layout-container container grid-lg">
        <header className="navbar bg-primary" style={{ padding: ".5em" }}>
          <section className="navbar-section">
            <span
              className="btn btn-link text-light"
              onClick={navigateToAuthenticationPage}
            >
              Authentication
            </span>
            <span
              className="btn btn-link text-light"
              onClick={navigateToPhoneNumbersPage}
            >
              Messages
            </span>
          </section>
          <section className="navbar-center hide-xs">
            <span className="h5">Dealer Acumen SMS Tool</span>
          </section>
        </header>
      </div>
      <div
        className="default-layout-container container grid-lg text-left"
        style={{ marginTop: "1em" }}
      >
        {children}
      </div>
    </>
  );
};

export default DefaultLayout;
