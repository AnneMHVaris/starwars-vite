import { useState, useEffect, useRef, useCallback } from 'react';
import axios from "axios";
import './Modal.css' 

/* show HomeWorld modal */
const HomeWorldModal = ({name, profilePic, handleClose, homeworld}) => {

   let [items, setItems] = useState([]);
  //  let [items, setItems] = doGetRequest([]);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(2);
    const loaderRef = useRef(null);
    const [serverUrl, setServerUrl] = useState(homeworld);

 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
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
  });

  useEffect((homeworld) => { 
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          serverUrl
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

//console.log(items);

  return (
    <div className="modal-backdrop">

        <div className="modal-small">
            
            <div className="modal-body">
               <div className='modal-name'>{items.name}</div>
               <div className='modal.role'>Terrain: {items.terrain}</div>
               <div className='modal.role'>Climate: {items.climate}</div>
               <div className='modal.role'>Number of residents: {items.population}</div>
              
            </div>
            <button className="close-btn" onClick={()=> handleClose()}>Close</button>
        </div>

    </div>
  );
};

export default HomeWorldModal;