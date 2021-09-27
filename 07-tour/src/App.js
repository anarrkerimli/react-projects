import React, {useState,useEffect} from 'react';
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([]);

  const fetchData = async()=>{
    setLoading(true);
    try {
      const response = await fetch(url)
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

    useEffect(() => {
      fetchData();
    }, []);
    if(loading){
      return (
        <main>
          <Loading/>
        </main>
      )
    }
    if(tours.length === 0){
      return (
        <main>
          <h3>No Tours Left</h3>
          <button type='button' onClick={()=> setTours(tours)}>Refresh</button>
        </main>
      )
    }
  return (
    <main>
      <Tours/>
    </main>
  );
}

export default App;
