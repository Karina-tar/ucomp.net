import Pages from "./componets/pages/Pages";
import Footer from "./componets/parts/Footer";
import Header from "./componets/parts/Header";
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Pages />
      </div>
      <Footer />
    </div>
  );
}

export default App;