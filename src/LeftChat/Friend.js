

function Friend(props) {
  return (
    <div class="about">
      <div class="name">
        <i class="fa fa-circle online"></i>
        {props.name}
        <span class="status"> {props.min} mins ago </span>
      </div>
      <div class="lastMessege">{props.lastM}</div>

    </div>
  );
}

export default Friend;
