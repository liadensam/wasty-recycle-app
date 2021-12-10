import { useNavigate } from 'react-router';

import './style.scss';




const Directions = () =>{

  
  const navigate = useNavigate();
  
  const redirectToGoogle = () => {
  
    navigate('/')
  }


  
  return (
    <>
   
    <main>
    </main>
    <footer><button className="button__item" onClick={redirectToGoogle}>Get Directions</button></footer>
    </>
  );
}

export default Directions;