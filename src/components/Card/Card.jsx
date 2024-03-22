import './Card.css'
import Modal from '../Modal/Modal';
import { useState } from 'react';

/* show card  */
const Card = ({id, name, profilePic, films, height, mass, birth_year, homeworld}) => { 

const [showModal, setShowModal] = useState(false)

const handleClose = () => {setShowModal(false)}

const images = ['images/nasa-2W-QWAC0mzI-unsplash.jpg','images/nasa-N3BQHYOVq5E-unsplash.jpg','images/nasa-vhSz50AaFAs-unsplash.jpg','images/neven-krcmarek-9dTg44Qhx1Q-unsplash.jpg','images/planet-volumes-awYEQyYdHVE-unsplash.jpg'];

let num = Math.floor(Math.random() * 4);

  return (
    <>  
        <div className="card">
            <div className="number">{id}</div> 
            <div>
                <img className="profile-pic" src={images[num]} alt="profile picture" />
            </div>
            <div className="descr">
                <p className="name">{name}</p>
                <button className="learn-more" onClick={() => setShowModal(true)}>Click to learn more</button>
                
            </div>
        </div>

         {showModal && <Modal name={name} height={height} mass={mass} birth_year={birth_year} films={films} profilePic={images[num]} homeworld={homeworld} handleClose={handleClose}/>}
        
    </>
  );
};

export default Card;
