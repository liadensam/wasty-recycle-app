import React from 'react';

import Tip from './tip.jsx'
import Menu from '../../components/Menu';

const Tips = ({tipsArray}) => {

	return (
    <>
    <Menu/>
		<main>
      {tipsArray.map((tip, index) => 
        <Tip
        key = {index}
        name = {tip.name}
        text = {tip.text}
      />)}

		</main>

    </>
	);
}

export default Tips;

