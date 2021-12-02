import { useNavigate } from 'react-router';

import './style.css';
import Menu from '../../components/Menu';



const Directions = () =>{

  
  const navigate = useNavigate();
  
  const redirectToGoogle = () => {
  
    navigate('/')
  }


  
  return (
    <>
    <header><Menu /></header>
    <main>
    </main>
    <button className="button__item" onClick={redirectToGoogle}>Get Directions</button>
    </>
  );
}

export default Directions;