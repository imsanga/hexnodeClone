import "./SecSeven.css";
import android from "./assets/android.svg";
import windows from "./assets/windows.svg";
import ios from "./assets/ios.svg";
import androidTV from "./assets/android-tv.svg";
import appleTV from "./assets/apple-tv.svg";
import amzFire from "./assets/amazon-fire.webp";

const platforms = [
  { name: "Android", img: android },
  { name: "Windows", img: windows },
  { name: "iOS", img: ios },
  { name: "Android TV", img: androidTV },
  { name: "Apple TV", img: appleTV },
  { name: "Fire TV", img: amzFire },
];

const SecSeven = () => {
  return (
    <div className="platforms-container-new">
      <h1>Platforms Supported</h1>
      <div className="platforms-grid-new">
        {platforms.map((platform, index) => (
          <div key={index} className="platform-item-new">
            <img
              src={platform.img}
              alt={platform.name}
              className="platform-img-new"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecSeven;
