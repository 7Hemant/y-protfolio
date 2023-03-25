import "./App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Blog />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
