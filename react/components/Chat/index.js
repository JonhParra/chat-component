import React from "react";
import {Helmet} from "react-helmet";


import './global.css';

const Chat = () => {

  const handleClick = (e) => startNeoWebChat()

  return (
    <div>
        <div>
            <Helmet>
                <link rel='stylesheet' href='http://35.196.4.210/CHAT/css/webchat.css' type='text/css' />

                <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>  
                <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js" ></script>
                <script src='https://35.196.4.210/chat/js/webchat.js'></script>
                <script type='text/javascript' language='javascript'>
                    {`
                    $(document).ready(function () {
                        console.log('entrando')
                        let externalKey = "";
                        initWebChat("http","35.196.4.210", "CHAT", "3Hlser5a8Z21YCaDH2Ph49WcEWrLNKhZ1TFBu8gWjJTzd/PFTjEF06ddrdS7vBEzpBWtzvYICeNv5fekUXThV15ifaZgtTpne7ZdjYMGXqBRRBJDaIa9de2FGH1L4voJ2iDpzPLSju1aPkXOJGzyPeqwcfjGj+1yU5iHvH4GOZNdqR+zyLBs5g==", "CHAT COSTA RICA", "#C71616", "448", "401", "3", externalKey);
                        console.log('dentro de la funcion')
                    });
                    `}
                </script>
            </Helmet>
        </div>
      <div className="float">
        <span className="img-btn" onClick={handleClick}></span>
      </div>

    </div>
  );
};

export default Chat;