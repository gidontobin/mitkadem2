import HisMessege from "./HisMessege";
import MyMessege from "./MyMessege";

let itemList = [];
var n = 3;
var message1 = "Hi, how is it going?";
var time1 = "10:00 AM";
var message2 = "Hi, going ok, how are you?";
var time2 = "10:01 AM";


for (let i = 0; i < n; i++) {
  itemList.push(<div><HisMessege message= {message1} time = {time1}/>
  <MyMessege message= {message2} time = {time2}/></div>);
}

function ChatHistory(props) {
    return (
        <div class="chat-history">
            <ul class="m-b-0">
                {itemList}
            </ul>
        </div>
    );
}

export default ChatHistory;


