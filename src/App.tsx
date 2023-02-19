import { useState, useEffect } from "react";
import "./app.scss";
import Header from "./components/Header";

export default function App() {
  //Determines if dropdown menus are hidden
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Enter":
          setIsHidden(false);
          break;
        case "Escape":
          setIsHidden(true);
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <div className="App">
      <Header isHidden={isHidden} setIsHidden={setIsHidden} />
    </div>
  );
}
