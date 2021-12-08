import { useNavigate } from 'react-router';

import './style.scss';
import Menu from '../../components/Menu';



const Directions = () =>{

  
  const navigate = useNavigate();
  
  const redirectToGoogle = () => {
  
    navigate('/')
  }


  
  return (
    <>
    <Menu />
    <main>
    </main>
    <footer><button className="button__item" onClick={redirectToGoogle}>Get Directions</button></footer>
    </>
  );
}

export default Directions;