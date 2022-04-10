function ChatHeader(props) {
    return (
        <div>
            <div class="chat-header clearfix">
                <div class="row">
                    <div class="about"></div>
                    <div class="col-lg-6">
                        <div class="name">
                            <i class="fa fa-circle online"></i>
                            {props.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;