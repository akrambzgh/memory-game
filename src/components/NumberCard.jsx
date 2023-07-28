/* eslint-disable react/prop-types */

function NumberCard(props) {
  return (
    <div
      className={`card ${props.numbers.status} ${
        props.flipped ? "flipped" : ""
      }`}
      onClick={() => props.clickhandler(props.index)}
    >
      <h1>{props.numbers.num}</h1>
    </div>
  );
}

export default NumberCard;
