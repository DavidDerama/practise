import { Link } from "react-router-dom";
import { SearchForm } from "./SearchForm";

export const Header = () => {
  return (
    <header>
      <div className="content">
        <Link to=".." className="home-btn">
          <h1>Autosivusto</h1>
        </Link>
        <SearchForm />
      </div>
    </header>
  );
};
