import { useState } from "react";
import "./SecThree.css";
import singleAppImg from "./assets/single-app-kios-image.webp";
import multiAppImg from "./assets/multi-app-kiosk-image.webp";
import webBasedImg from "./assets/web-based-kiosk-image.webp";
import digitalSignageImg from "./assets/digital-signage-kiosk-image.webp";
import asamImg from "./assets/asam-kiosk-image.webp";

const SecThree = () => {
  const [activeMode, setActiveMode] = useState("single");

  const modes = [
    {
      id: "single",
      name: "Single App Kiosk",
      img: singleAppImg,
      head: <h2>Powerful Single-App Kiosk solutions for enhanced control</h2>,
      desc: [
        "Provision the devices to run one specialized application, with limited functionalities.",
        "Customize the device settings to cater to a specific use-case each time.",
        "Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
        "Empower your administrators with full control over the kiosk devices.",
      ],
    },
    {
      id: "multi",
      name: "Multi-App Kiosk",
      img: multiAppImg,
      head: <h2>Elevate efficiency with Multi-App Kiosk</h2>,
      desc: [
        "Limit device access to approved apps, ensuring focus and productivity.",
        "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
        "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
        "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
      ],
    },
    {
      id: "web",
      name: "Web-based Kiosk",
      img: webBasedImg,
      head: <h2>Explore the new way to manage web apps and websites</h2>,
      desc: [
        "Let users access essential and approved web apps, website and files only.",
        "Make the best use of website kiosk with Hexnode's advanced settings.",
        "Tailor your experience to match your unique use case..",
        "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
      ],
    },
    {
      id: "digital",
      name: "Digital Signages",
      img: digitalSignageImg,
      head: <h2>Capture attention with Digital Signage Kiosks</h2>,
      desc: [
        "Transform your devices into captivating digital signage kiosks that grab attention.",
        "Engage your audience with vibrant images and seamless video streaming.",
        "Customize media files with trimming, muting, and background music.",
        "Advertise and show off your brand aesthetics to attract customers in different ways.",
        "Take control with Hexnode to reestablish your brand's presence.",
      ],
    },
    {
      id: "asam",
      name: "ASAM Kiosk",
      img: asamImg,
      head: <h2>Unlock the power of Autonomous Single App Mode (ASAM)</h2>,
      desc: [
        "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
        "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
        "Create focused, efficient and secure digital environments to match your requirements",
        "Configure ASAM effortlessly and elevate your user experience like never before.",
      ],
    },
  ];

  return (
    <div className="kiosk-container">
      <h1>Specific kiosk modes for unique use cases</h1>
      <div className="button-container">
        {modes.map((mode) => (
          <button
            key={mode.id}
            className={activeMode === mode.id ? "active" : ""}
            onClick={() => setActiveMode(mode.id)}
          >
            {mode.name}
          </button>
        ))}
      </div>

      <div className="content">
        {modes.map((mode) =>
          activeMode === mode.id ? (
            <div key={mode.id} className="mode-content">
              <div className="mode-inner">
                <h2>{mode.head}</h2>
                <ul>
                  {mode.desc.map((point, index) => (
                    <li key={index}>
                      <span style={{ color: "green" }}>&#10004;</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              <img src={mode.img} alt={mode.name} />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SecThree;
