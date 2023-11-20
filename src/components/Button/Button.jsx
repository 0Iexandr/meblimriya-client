import './Button.scss';

const Button = ({ text, onClick, arrow }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
      {arrow ? <span className="button__arrow">→</span> : null}
    </button>
  );
};

export default Button;
