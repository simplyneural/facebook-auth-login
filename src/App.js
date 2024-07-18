import React, { useState } from "react";
import "./App.css";

function App() {
  const channelUrl = encodeURIComponent("https://whatsapp-test.chatflows.app");
  const [fbAppId, setFbAppId] = useState("356863667241696");
  const [redirectUri, setRedirectUri] = useState(
    "https://whatsapp-test.chatflows.app"
  );
  const [waPhoneNumber, setWaPhoneNumber] = useState(
    "your-whatsapp-phone-number"
  );
  const fallbackRedirectUri = encodeURIComponent(
    "https://manychat.com/registration/channelConnection/whatsapp"
  );
  const redirectUriEncoded = encodeURIComponent(redirectUri);
  // const handleOpenFacebookPage = () => {
  //   const fbAppId = "356863667241696";
  //   const redirectUri = "https://whatsapp-test.chatflows.app";
  //   const cbt = Date.now(); // Use current timestamp for cbt
  //   const fbUrl = `https://www.facebook.com/v2.12/dialog/oauth?app_id=${fbAppId}&cbt=${cbt}&channel_url=${channelUrl}&client_id=${fbAppId}&display=popup&domain=${channelUrl}&e2e=%7B%7D&extras=%7B%22version%22%3A2%2C%22feature%22%3A%22whatsapp_embedded_signup%22%2C%22sessionInfoVersion%22%3A2%7D&fallback_redirect_uri=https%3A%2F%2Fmanychat.com%2Fregistration%2FchannelConnection%2Fwhatsapp&locale=en_US&logger_id=f1f0a5dbc3c56dcc2&origin=1&redirect_uri=${encodeURIComponent(
  //     redirectUri
  //   )}&response_type=token%2Csigned_request%2Cgraph_domain&scope=business_management%2Cwhatsapp_business_management&sdk=joey&version=v2.12`;

  //   const width = 600;
  //   const height = 700;
  //   const left = (window.innerWidth - width) / 2;
  //   const top = (window.innerHeight - height) / 2;

  //   window.open(
  //     fbUrl,
  //     "FacebookPagePopup",
  //     `width=${width},height=${height},top=${top},left=${left}`
  //   );
  // };
  const handleOpenFacebookPage = () => {
    const cbt = Date.now(); // Use current timestamp for cbt
    const fbUrl = `https://www.facebook.com/v2.12/dialog/oauth?app_id=${fbAppId}&cbt=${cbt}&channel_url=${channelUrl}&client_id=${fbAppId}&display=popup&domain=${channelUrl}&e2e=%7B%7D&extras=%7B%22version%22%3A2%2C%22feature%22%3A%22whatsapp_embedded_signup%22%2C%22sessionInfoVersion%22%3A2%7D&fallback_redirect_uri=${fallbackRedirectUri}&locale=en_US&logger_id=f1f0a5dbc3c56dcc2&origin=1&redirect_uri=${redirectUriEncoded}&response_type=token%2Csigned_request%2Cgraph_domain&scope=business_management%2Cwhatsapp_business_management&sdk=joey&version=v2.12`;

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

  const handleOpenWhatsApp = () => {
    const waUrl = `https://wa.me/${waPhoneNumber}`;
    const width = 600;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      waUrl,
      "WhatsAppPopup",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Business Portfolio and WhatsApp Contact</h1>
        <div>
          <label>
            Facebook App ID:
            <input
              type="text"
              value={fbAppId}
              onChange={(e) => setFbAppId(e.target.value)}
              placeholder="Enter Facebook App ID"
            />
          </label>
        </div>
        <div>
          <label>
            Redirect URI:
            <input
              type="text"
              value={redirectUri}
              onChange={(e) => setRedirectUri(e.target.value)}
              placeholder="Enter Redirect URI"
            />
          </label>
        </div>
        <div>
          <label>
            WhatsApp Phone Number:
            <input
              type="text"
              value={waPhoneNumber}
              onChange={(e) => setWaPhoneNumber(e.target.value)}
              placeholder="Enter WhatsApp Phone Number"
            />
          </label>
        </div>
        <button onClick={handleOpenFacebookPage}>Open Facebook Page</button>
        <button onClick={handleOpenWhatsApp}>Contact via WhatsApp</button>
      </header>
    </div>
  );
}

export default App;
