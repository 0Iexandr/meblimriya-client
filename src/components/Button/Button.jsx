import './Button.scss';

import { Link } from 'react-router-dom';

const Button = ({ isLink, to, text, onClick, arrow, white }) => {
  return (
    <div>
      {isLink ? (
        <Link
          to={to}
          className={`button ${white ? 'button__white' : 'button__brown'}`}
          onClick={onClick}
          target="_blank"
        >
          {text}
          {arrow ? <span className="button__arrow">→</span> : null}
        </Link>
      ) : (
        <button
          className={`button ${white ? 'button__white' : 'button__brown'}`}
          onClick={onClick}
        >
          {text}
          {arrow ? <span className="button__arrow">→</span> : null}
        </button>
      )}
    </div>
  );
};

export default Button;
