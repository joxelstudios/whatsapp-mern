import React from "react";
import "./App.css";
import { Sidebar } from "./views/sidebar/Sidebar";
import { Chat } from "./views/chat/Chat";
import { CssBaseline } from "@material-ui/core";
import Pusher from "pusher-js";
import axios from "./api/axios";
function App() {
  const [messages, setMessages] = React.useState<any>([])

  React.useEffect(() => {
    axios.get('/messages/sync').then(res => {
      setMessages(res.data)
    })
  },[])
  
  
  React.useEffect(() => {
    const pusher = new Pusher('3b12c96c16cdf6670478', {
      cluster: 'us2'
    });
    
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage : any) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  
  console.log(messages);
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <CssBaseline />
      <div className="App">
        <div className="app__body">
          <Sidebar />
          <Chat messages={messages} />
        </div>
      </div>
    </>
  );
}

export default App;
