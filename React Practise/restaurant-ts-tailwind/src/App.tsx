import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-gabarito bg-dark scrollbar-thumb-sky-700 scrollbar-track-sky-300">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
