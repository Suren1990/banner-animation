import { images } from "./assets/images";
import "./style.scss";

function App() {
  return (
    <div className="banner">
      <div className="banner__top">
        <div className="banner__image_wrap">
          <img
            src={images.Banner}
            srcSet={`${images.Banner2x} 2x`}
            className="banner__image"
            alt="banner"
          />
        </div>
        <div className="banner__top_info">
          <div className="banner__top_info_inner">
            <div className="banner__text_wrapper">
              <p className="banner__top_text banner__text_animation">
                new collection
              </p>
            </div>
            <div className="banner__title_wrapper">
              <h1 className="banner__top_title banner__text_animation">
                Eget Tortor,
              </h1>
            </div>
            <div className="banner__title_wrapper">
              <h2 className="banner__top_title banner__text_animation">
                Mollis Habitasse.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__bottom">
        <div className="banner__bottom_inner">
          <div className="banner__text_wrapper banner__mb1">
            <p className="banner__bottom_text banner__bottom_animation">sale up to 50%</p>
          </div>
          <div className="banner__title_wrapper">
            <h2 className="banner__bottom_title banner__bottom_animation">
              Pulvinar Amet Morbi
            </h2>
          </div>
          <div className="banner__title_wrapper">
            <h2 className="banner__bottom_title banner__bottom_animation">
              Efficitur Justo
            </h2>
          </div>
          <div className="banner__model_wrap">
            <img
              src={images.Model}
              srcSet={`${images.Model2x} 2x`}
              className="banner__model_image"
              alt="model"
            />
          </div>
          <p className="banner__bottom_description">
            Nunc venenatis adipiscing mauris lorem non risus molestie ut. Dolor
            ex. Cras sodales efficitur nec
          </p>
          <a href="/#" className="banner__shop">
            Shop All
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
