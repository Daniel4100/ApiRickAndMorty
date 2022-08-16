import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useApiCall from "./hooks/useApiCall";
import InfoLocation from "./components/InfoLocation";
import Form from "./components/Form";
import { useEffect } from "react";
import Residents from "./components/Residents";
import axios from "axios";
import Pagination from "./components/Pagination";

let random = Math.ceil(Math.random() * 126);

function App() {
  const [inpurSearch, setInpurSearch] = useState();
  const [nRandom, setnRandom] = useState(random);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if (inpurSearch) {
      let pivot = finalfinal.filter(e => e.name.includes(inpurSearch))
      // console.log(pivot[0].id)
      setnRandom(pivot[0].id);
      setCurrentPage(1)
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
  
  
  let arrayReisdents = []
  const residentsPerPage = 6
  if (location?.residents.length < residentsPerPage) {
    arrayReisdents = [...location?.residents]
  }else{
    const lastResident = currentPage * residentsPerPage
    arrayReisdents = location?.residents.slice(lastResident - residentsPerPage, lastResident)
  }

  let arrayPages = []
  let quantityPages = Math.ceil(location?.residents.length / residentsPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
  }else{
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }


  return (
    <div className="App">
      <div className="box1">
        <Form setInpurSearch={setInpurSearch} inpurSearch={inpurSearch} finalfinal={finalfinal} />
      </div>
      <div className="box2">
        <InfoLocation location={location} />
      </div>

      <Pagination
      arrayPages={arrayPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      quantityPages={quantityPages}
      />

      <div className="container">
        {arrayReisdents?.map((url) => (
          <Residents key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
