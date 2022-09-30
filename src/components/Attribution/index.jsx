import { useContext } from 'react';
import { StateContext } from '../../context/stateContext';
import './stylesAttribution.css'
const Attribution = () => {

  const { darkMode } = useContext(StateContext)

  return (
    <div className={`attribution ${darkMode ? '' : 'attributionLight'}`}>
      <p>
        Challenge by{" "}
        <a rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a rel="noreferrer" target='_blank' href="https://github.com/lamc305">Luis Medina</a>.
      </p>
    </div>
  );
};

export default Attribution;