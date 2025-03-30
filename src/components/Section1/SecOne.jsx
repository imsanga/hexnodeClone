import "./SecOne.css";
import kioskImage from "./assets/hexnode-kiosk.webp";

const SecOne = () => {
  return (
    <section className="secOne">
      <div className="containersecOne">
        <div className="text-container">
          <h1>
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </h1>
          <form
            className="form-container"
            action="https://www.hexnode.com/mobile-device-management/cloud/signup/"
          >
            <input
              type="email"
              name="emailId"
              placeholder="Your Work Email"
              required
            />
            <button type="submit" className="secOne-btn">
              GET STARTED NOW!
            </button>
          </form>
        </div>
        <div className="image-container">
          <img src={kioskImage} alt="Mobile Kiosk" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default SecOne;
