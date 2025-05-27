import Home from "./components/Home/Home";
import Footer from "./Footer";
import Header from "./header";

function App() {
  return (
    <>
      <Header />
      <main className="fix">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
