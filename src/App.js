import React from "react";
import "./App.css";

function App() {
  const channelUrl = encodeURIComponent("https://whatsapp-test.chatflows.app");

  const handleOpenFacebookPage = () => {
    const fbAppId = "1503713653561470";
    const redirectUri = "https://whatsapp-test.chatflows.app";
    const cbt = Date.now(); // Use current timestamp for cbt
    const fbUrl = `https://www.facebook.com/v2.12/dialog/oauth?app_id=${fbAppId}&cbt=${cbt}&channel_url=${channelUrl}&client_id=${fbAppId}&display=popup&domain=${channelUrl}&e2e=%7B%7D&extras=%7B%22version%22%3A2%2C%22feature%22%3A%22whatsapp_embedded_signup%22%2C%22sessionInfoVersion%22%3A2%7D&fallback_redirect_uri=https%3A%2F%2Fmanychat.com%2Fregistration%2FchannelConnection%2Fwhatsapp&locale=en_US&logger_id=f1f0a5dbc3c56dcc2&origin=1&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token%2Csigned_request%2Cgraph_domain&scope=business_management%2Cwhatsapp_business_management&sdk=joey&version=v2.12`;

    const width = 600;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      fbUrl,
      "FacebookPagePopup",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Business Portfolio and WhatsApp Contact</h1>

        <button onClick={handleOpenFacebookPage}>Open Facebook Page</button>
      </header>
    </div>
  );
}

export default App;
