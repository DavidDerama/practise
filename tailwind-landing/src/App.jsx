import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-gabarito">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
