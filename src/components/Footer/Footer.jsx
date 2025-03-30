import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="wrapper0">
        <div className="register-box wrapper">
          <h1>Sign up and try Hexnode free for 14 days!</h1>

          <form
            className="input-group"
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

          <p>
            No credit cards required.{" "}
            <a href="https://www.hexnode.com/mobile-device-management/request-demo/">
              Request a demo &gt;
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="wrapper1">
        <div className="bottom-bar wrapper">
          <p>Terms of Use - Privacy - Cookies</p>
          <p>Copyright &copy; 2025 Mitsogo Inc. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
