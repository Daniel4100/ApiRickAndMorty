import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useApiCall from "./hooks/useApiCall";
import InfoLocation from "./components/InfoLocation";
import Form from "./components/Form";
import { useEffect } from "react";
import Residents from "./components/Residents";
import axios from "axios";

let random = Math.ceil(Math.random() * 126);

function App() {
  const [inpurSearch, setInpurSearch] = useState();
  const [nRandom, setnRandom] = useState(random);


  useEffect(() => {
    if (inpurSearch) {
      let pivot = finalfinal.filter(e => e.name.includes(inpurSearch))
      // console.log(pivot[0].id)
      setnRandom(pivot[0].id);
    } else {
      setnRandom(random);
    }
  }, [inpurSearch]);

  const location = useApiCall(
    `https://rickandmortyapi.com/api/location/${nRandom}`
  );

  // console.log(location);


  let axioall = []
  const call1 = useApiCall('https://rickandmortyapi.com/api/location?page=1')
  const call2 = useApiCall('https://rickandmortyapi.com/api/location?page=2')
  const call3 = useApiCall('https://rickandmortyapi.com/api/location?page=3')
  const call4 = useApiCall('https://rickandmortyapi.com/api/location?page=4')
  const call5 = useApiCall('https://rickandmortyapi.com/api/location?page=5')
  const call6 = useApiCall('https://rickandmortyapi.com/api/location?page=6')
  const call7 = useApiCall('https://rickandmortyapi.com/api/location?page=7')

  let finalfinal = []
  call1 && axioall.push(call1.results.map(e=> finalfinal.push(e)))
  call2 && axioall.push(call2.results.map(e=> finalfinal.push(e)))
  call3 && axioall.push(call3.results.map(e=> finalfinal.push(e)))
  call4 && axioall.push(call4.results.map(e=> finalfinal.push(e)))
  call5 && axioall.push(call5.results.map(e=> finalfinal.push(e)))
  call6 && axioall.push(call6.results.map(e=> finalfinal.push(e)))
  call7 && axioall.push(call7.results.map(e=> finalfinal.push(e)))
  
  
  // console.log(axioall)
  // console.log(finalfinal)

  return (
    <div className="App">
      <div className="box1">
        <Form setInpurSearch={setInpurSearch} inpurSearch={inpurSearch} finalfinal={finalfinal} />
      </div>
      <div className="box2">
        <InfoLocation location={location} />
      </div>
      
      <div className="container">
        {location?.residents.map((url) => (
          <Residents key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
