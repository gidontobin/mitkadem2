import ChatHeader from "./ChatHeader";
import ChatHistory from "./ChatHistory";
import InputMessage from "./InputMessage";

function CurrentChat(props) {
  return (
    <div className="CurrentChat">
      <div class="chat">
        <ChatHeader name="Yossi Cohen" />
        <ChatHistory />
        <InputMessage />
      </div>
    </div>
  );
}

export default CurrentChat;
