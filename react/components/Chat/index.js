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
                        initWebChat("http","35.196.4.210", "CHAT", "3Hlser5a8Z21YCaDH2Ph49WcEWrLNKhZ1TFBu8gWjJTzd/PFTjEF06ddrdS7vBEzpBWtzvYICePUnWbOGDCFTKQ8zNyteuBSmHpI6CmdOaaC63T9m0LI4bWw1xHLJUNBKsEIL+MUP/Uf/aUZsAyNPNNuRQlhIRRFCFduK70t8hbCjtp19EXY/g==", "CHAT NICARAGUA", "#C71616", "448", "401", "3", externalKey);
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