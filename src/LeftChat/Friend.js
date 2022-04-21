

function Friend(props) {
  return (
    <div>
      <div class="name">
      <img src={props.img} width="50" height="50"></img>
        {props.name}
        <span class="status"> {props.min}</span>
      </div>
      <div class="lastMessege">{props.lastM}</div>

    </div>
  );
}

export default Friend;
