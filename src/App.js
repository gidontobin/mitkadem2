import './App.css';
import LeftChat from './LeftChat/LeftChat';
import CurrentChat from './CurrentChat/CurrentChat';

function App() {
    return (
        <div>
            <div class="container">
                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="card chat-app">
                            <LeftChat me="Gidon Tobin" />
                            <CurrentChat />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
