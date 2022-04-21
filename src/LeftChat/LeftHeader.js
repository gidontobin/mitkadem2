

function LeftHeader(props) {
  return (

    <div class="chat-header2">
      <img src="/IMG_0062.jpg" width="50" height="50"></img>
      {props.me}
      <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-user-plus"></i></a>    
    </div>


  );
}

export default LeftHeader;