import { useState } from "react";
import "./SecFour.css";
import deployment from "./assets/effortless-kiosk-deployement-image.webp";
import brandVisibility from "./assets/customized-interface-image.webp";
import moreHexnode from "./assets/power-up-protection-image.webp";
import appSecurity from "./assets/secure-app-ecosystem.webp";
import userInterface from "./assets/easy-to-use-interface-image.webp";

const features = [
  {
    title: "Effortless kiosk deployment & management",
    content:
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
    image: deployment,
  },
  {
    title: "Customized interface for brand visibility",
    content:
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
    image: brandVisibility,
  },
  {
    title: "What more can you do with Hexnode kiosk?",
    content:
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
    image: moreHexnode,
  },
  {
    title: "Secure and update your app ecosystem",
    content:
      "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
    image: appSecurity,
  },
  {
    title: "Provide an easy-to-use interface for end-users",
    content:
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
    image: userInterface,
  },
];

const SecFour = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="feature-section-container">
      <h1 className="feature-section-header">
        What additional possibilities does the <br />
        Kiosk mode offer?
      </h1>

      <div className="feature-section-content">
        <div className="feature-image-card">
          <img
            src={selectedFeature.image}
            alt={selectedFeature.title}
            className="feature-display-image"
          />
        </div>

        <div className="feature-list-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <button
                className={`feature-title-button ${
                  selectedFeature.title === feature.title ? "active" : ""
                }`}
                onClick={() => setSelectedFeature(feature)}
              >
                {feature.title}
              </button>

              {selectedFeature?.title === feature.title && (
                <>
                  <p className="feature-description1">{feature.content}</p>
                  <div className="feature-description2">
                    <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                      TRY FOR FREE &gt;
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecFour;
