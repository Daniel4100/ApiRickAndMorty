import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useApiCall from "./hooks/useApiCall";
import InfoLocation from "./components/InfoLocation";
import Form from "./components/Form";
import { useEffect } from "react";
import Residents from "./components/Residents";

let random = Math.ceil(Math.random() * 126);

function App() {
  const [inpurSearch, setInpurSearch] = useState();
  const [nRandom, setnRandom] = useState(random);

  useEffect(() => {
    if (inpurSearch) {
      setnRandom(inpurSearch);
    } else {
      setnRandom(random);
    }
  }, [inpurSearch]);

  const location = useApiCall(
    `https://rickandmortyapi.com/api/location/${nRandom}`
  );

  console.log(location);

  return (
    <div className="App">
      <Form setInpurSearch={setInpurSearch} inpurSearch={inpurSearch} />
      <InfoLocation location={location} />
      <div className="container">
        {location?.residents.map((url) => (
          <Residents key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
