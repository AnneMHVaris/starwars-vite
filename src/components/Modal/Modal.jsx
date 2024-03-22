import { useState, useEffect, useRef, useCallback } from 'react';
import './Modal.css' 
import HomeWorldModal from './HomeWorldModal';

/* show modal */
const Modal = ({name, profilePic, handleClose, films, height,mass,birth_year, homeworld}) => {

const [showHomeWorldModal, setShowHomeWorldModal] = useState(false)

const HomeWorldHandleClose = () => {setShowHomeWorldModal(false)}
 
let n = 0;

if(films != undefined)
  n = films.length; 

  return (

    <> 
    <div className="modal-backdrop">

        <div className="modal">
            <img className="modal-img" src={profilePic} alt="profile pic" />
            <div className="modal-body">
               <div className='modal-name'>{name}</div>
               <div className='modal-role'>Height: {height}</div>
               <div className='modal-role'>Mass: {mass}</div>
               <div className='modal-role'>Birth year: {birth_year}</div>
               <div className='modal-role'>Amount of films: {n}</div>
              
            </div>
          
            <button className="learn-more" onClick={() => setShowHomeWorldModal(true)}>Fetch Homeworld Details</button>
            <button className="close-btn" onClick={()=> handleClose()}>Close</button>
        </div>
       
    </div>

    {showHomeWorldModal && <HomeWorldModal name={name} homeworld={homeworld} handleClose={HomeWorldHandleClose}/>}
    </>
  );
};

export default Modal;