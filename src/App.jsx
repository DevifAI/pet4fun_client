import Header from "./header";
import Home from "./components/Home/Home";
import Footer from "./Footer";

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
