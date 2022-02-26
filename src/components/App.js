import "../styles/App.scss";
import Navigation from "./Navigation";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import HttpService from "../http-service/HttpService";
import { useEffect, useState } from "react";

const service = new HttpService();
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    service.get("/api/user").then((res) => {
      setUser(res);
    });
  }, []);

  if (!user) {
    return <></>;
  }
  return (
    <div className="App">
      <Navigation user={user} />
      <main>
        <div className="container">
          <Cards />
          <Sidebar user={user} />
        </div>
      </main>
    </div>
  );
}

export default App;
