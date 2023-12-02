import './Button.scss';

const Button = ({ text, onClick, arrow, white }) => {
  return (
    <button
      className={`button ${white ? 'button__white' : 'button__brown'}`}
      onClick={onClick}
    >
      {text}
      {arrow ? <span className="button__arrow">→</span> : null}
    </button>
  );
};

export default Button;
