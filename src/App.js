import React, { useState } from "react";
import "./App.css";

function App() {
  const [fbAppId, setFbAppId] = useState("532160876956612");
  const [redirectUri, setRedirectUri] = useState("https://charflows.app");
  const [waPhoneNumber, setWaPhoneNumber] = useState("+15556212510");

  const handleOpenFacebookPage = () => {
    const fbUrl = `https://www.facebook.com/v2.12/dialog/oauth?client_id=${fbAppId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&display=popup&response_type=token,signed_request,graph_domain&scope=public_profile`;

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
