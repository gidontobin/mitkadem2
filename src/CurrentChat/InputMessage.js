function InputMessage(props) {
    return (
        <div class="chat-message clearfix">
            <div class="input-group mb-0">
                <input type="text" class="form-control" placeholder="New message here..."></input>
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa fa-send"></i></span>
                </div>
                <div class="col-lg-6 hidden-sm float-right">
                    <a href="javascript:void(0);" class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-primary"><i class="fa fa-image"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-info"><i class="fa fa-cogs"></i></a>
                    <a href="javascript:void(0);" class="btn btn-outline-warning"><i class="fa fa-question"></i></a>
                </div>
            </div>
        </div>
    );
}

export default InputMessage;




