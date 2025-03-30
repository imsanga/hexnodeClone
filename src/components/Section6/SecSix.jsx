import "./SecSix.css";
import costco from "./assets/costco.svg";
import saic from "./assets/saic.svg";
import hilton from "./assets/hilton.svg";
import group1 from "./assets/group1-automotive.webp";
import lowes from "./assets/lowes.svg";
import polaris from "./assets/polaris.svg";
import gorillas from "./assets/gorillas.svg";
import wolt from "./assets/wolt.svg";
import marriott from "./assets/marriott-intl.svg";
import merck from "./assets/merck.svg";

const companyLogos = [
  costco,
  saic,
  hilton,
  group1,
  lowes,
  polaris,
  gorillas,
  wolt,
  marriott,
  merck,
];

const SecSix = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {companyLogos.concat(companyLogos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="brand-logo"
            className="carousel-item"
          />
        ))}
      </div>
    </div>
  );
};

export default SecSix;
