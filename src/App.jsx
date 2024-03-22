import { useState, useEffect, useRef, useCallback } from 'react';
import axios from "axios";
import './App.css';
import Card from './components/Card/Card';
import './SearchBar.css';

const App = () => {

  const images = ['images/nasa-2W-QWAC0mzI-unsplash.jpg','images/nasa-N3BQHYOVq5E-unsplash.jpg','images/nasa-vhSz50AaFAs-unsplash.jpg','images/neven-krcmarek-9dTg44Qhx1Q-unsplash.jpg','images/planet-volumes-awYEQyYdHVE-unsplash.jpg'];

  let num = Math.floor(Math.random() * 4);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);
  const loaderRef = useRef(null);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchData = useCallback(async () => { 
    if (isLoading) return;

    let url = "https://swapi.dev/api/people/?offset=10";
    if(value && value != "")
        url = `https://swapi.dev/api/people/?search=${value}`;
    
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.data.results]);
      })
     // .catch((err) => console.log(err));
      return res.status(400).send({ error: { message: error.message } });

    setIndex((prevIndex) => prevIndex + 1);

    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    let observer = null;
    /*handlen intersection */
    observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchData();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [fetchData]);

  useEffect(() => {
    const getData = async () => {
         
        let url = "https://swapi.dev/api/people/?offset=10";
        if(value && value != "")
            url = `https://swapi.dev/api/people/?search=${value}`;

      setIsLoading(true);
      try {
        const response = await axios.get(
          url
        );
        setItems(response.data.results);
      } catch (error) {
        //console.log(error);
        return res.status(400).send({ error: { message: error.message } });
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  /*handle search */
  async function handleChange(event) { 
   
   // console.log(event.target.value);
   let url = "https://swapi.dev/api/people/?offset=10&limit=12";
   if(value && value != "")
       url = `https://swapi.dev/api/people/?search=${value}`;

       setIsLoading(true);
       try {
         const response = await axios.get(
           url
         );
         setItems(response.data.results);
       } catch (error) {
         //console.log(error);
         return res.status(400).send({ error: { message: error.message } });
       }
       setIsLoading(false);
     };

return (

<div className='App'>'

<div className='container'>
      <input
        type="text"
        className='textbox'
        placeholder="Search data..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleChange();
        }}
      />
    </div>

{isLoading &&
<div className="loader"></div>
}

      <div className='profile-card'>

         {items.map(item =>{
                return(< Card 
                  
                  name={item.name} 
                  films={item.films} 
                  height={item.height} 
                  mass={item.mass} 
                  birth_year={item.birth_year} 
                  profilePic={images[num]}
                  homeworld={item.homeworld} 
                  />)
         })}

      </div>
  </div>

);

};

export default App;