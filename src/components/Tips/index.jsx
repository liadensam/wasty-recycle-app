import React from 'react';

import Tip from './tip.jsx'
import Menu from '../../components/Menu';
import imgIdea from './img/Idea.gif'

const Tips = ({tipsArray}) => {

	return (
    <>
    <Menu/>
    <img src={imgIdea} alt=""/>
		<main>
      {tipsArray.map((item, index) => 
        <Tip
        key = {index}
        name = {item.name}
        text = {item.text}
      />)}

		</main>

    </>
	);
}

export default Tips;

