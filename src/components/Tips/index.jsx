import React from 'react';

import Tip from './tip.jsx'

import imgIdea from './img/Idea.gif'

const Tips = ({tipsArray}) => {

	return (
    <>
    <img className="img-tips" src={imgIdea} alt=""/>
		<main className="tips-container">
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

