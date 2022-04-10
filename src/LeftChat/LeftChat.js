import { propTypes } from "react-bootstrap/esm/Image";
import Friend from "./Friend";

let itemList = [];
var n = 5;
for (let i = 0; i < n; i++) {
  itemList.push(<li class="clearfix"><Friend name="Yossi Cohen" min="2" lastM="Last messege" /></li>);
}

function LeftChat(props) {
  return (
    <div>
      <div id="plist" class="people-list">
        <div>
          <i class="fa fa-circle online"></i>
          {props.me}
        </div>
        <ul class="list-unstyled chat-list mt-2 mb-0">
          {itemList}
        </ul>
      </div>
    </div>
  );
}

export default LeftChat;
