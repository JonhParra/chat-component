import React from "react";
import {Helmet} from "react-helmet";


import './global.css';

const Chat = () => {

  const handleClick = (e) => {
    startNeoWebChat()
    if(document.querySelector('.span-foco') === null){
      const enLinea = '<div class="span-foco"></div><div class="en-linea">En linea </div>'
      document.querySelector('.WEBCHATTITLE').insertAdjacentHTML('afterend',enLinea)
    }
  }


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
                        console.log('entrando nuevo')
                        let externalKey = "";
                        initWebChat("https","35.196.4.210", "CHAT", "3Hlser5a8Z21YCaDH2Ph49WcEWrLNKhZ1TFBu8gWjJTzd/PFTjEF06ddrdS7vBEzpBWtzvYICeOl8u268mJcj+Xf3sQrE16zlAKe3Z1M8ozLsIIm8MWBfQ9x5eadvm5Dt84Zk0MuF17pHGH/k6LP6YLN7q7c0azKQI8PrRtlbYKzSV2U0cl/Cw==", "¿Necesitas ayuda?", "#C71616", "448", "401", "3", externalKey);
                        console.log('dentro de nuevo')
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