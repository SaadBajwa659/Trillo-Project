import "../styles/Base.scss";
import "../styles/Layout.scss";
import "../styles/Components.scss";
import { IoMdHome, IoMdSearch } from "react-icons/io";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { HiKey } from "react-icons/hi";
import { ImMap2 } from "react-icons/im";
import { GrStar } from "react-icons/gr";
import { ImLocation, ImBookmark } from "react-icons/im";
import { SiGooglechat } from "react-icons/si";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <img src="images/logo.png" alt="trillo logo" className="logo" />

        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search Hotels"
          />
          <button className="search__button">
            {/* <svg className="search__icon">
                <use xlinkhref="../images/sprite.svg#icon-magnifying-glass"></use>
              </svg> */}
            {/* <img
                src="images/magnifier.png"
                style={{ width: "22px", height: "22px" }}
                alt="sprite"
                className="search__icon"
              /> */}
            <IoMdSearch
              style={{
                height: "22px",
                width: "22px",
                // paddingRight: "5px",
              }}
              color="grey"
            />
          </button>
        </form>

        <nav className="user-nav">
          <div className="user-nav__icon-box">
            {/* <svg className="user-nav__icon">
                <use xlinkhref="../images/sprite.svg#icon-bookmark"></use>
              </svg> */}
            {/* <img
                src="images/bookmark.png"
                style={{ width: "22px", height: "22px" }}
                alt="sprite"
                className="user-nav__icon"
              /> */}
            <ImBookmark
              style={{
                height: "22px",
                width: "22px",
                // paddingRight: "5px",
              }}
              color="grey"
            />
            <span className="user-nav__notification">7</span>
          </div>
          <div className="user-nav__icon-box">
            <ul id="options" className="optionsMenu" >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, similique?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                quas?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                ex?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                vel.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, a?
              </p>
            </ul>
            <Link to={"/notifications"}>
              <SiGooglechat
                style={{
                  height: "22px",
                  width: "22px",
                  cursor: "pointer",
                  // paddingRight: "5px",
                }}
                color="grey"
                id="optionsMenuTree"
              />
            </Link>
            <span className="user-nav__notification">13</span>
          </div>
          <div className="user-nav__user">
            <img
              src="images/user.jpg"
              alt="User"
              className="user-nav__user-photo"
            />
            <span className="user-nav__user-name">Jonas</span>
          </div>
        </nav>
      </header>

      <div className="content">
        <nav className="sidebar">
          <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
              <a href="/" className="side-nav__link">
                <IoMdHome
                  style={{
                    height: "22px",
                    width: "22px",
                    // paddingRight: "2px",
                  }}
                  color="#fff"
                />
                {/* <img
                src="images/home.png"
                style={{ width: "22px", height: "22px"}}
                alt="sprite"
                className="side-nav__icon"
              /> */}
                <span>Hotel</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="/" className="side-nav__link">
                <RiFlightTakeoffFill
                  style={{
                    height: "22px",
                    width: "22px",
                    // paddingRight: "5px",
                  }}
                  color="#fff"
                />
                {/* <img
                src="images/flight.png"
                style={{ width: "22px", height: "22px"}}
                alt="sprite"
                className="side-nav__icon"
              /> */}
                <span>Flight</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="/" className="side-nav__link">
                <HiKey
                  style={{
                    height: "22px",
                    width: "22px",
                    // paddingRight: "5px",
                  }}
                  color="#fff"
                />
                {/* <img
                    src="images/key.png"
                    style={{ width: "22px", height: "22px" }}
                    alt="sprite"
                    className="side-nav__icon"
                  /> */}
                <span>Car rental</span>
              </a>
            </li>
            <li className="side-nav__item">
              <a href="/" className="side-nav__link">
                <ImMap2
                  style={{
                    height: "22px",
                    width: "22px",
                    // paddingRight: "2px",
                  }}
                  color="#fff"
                />
                {/* <img
                    src="images/location.png"
                    style={{ width: "22px", height: "22px" }}
                    alt="sprite"
                    className="side-nav__icon"
                  /> */}
                <span>Tours</span>
              </a>
            </li>
          </ul>

          <div className="legal">
            &copy; 2017 by trillo. All rights reserved.
          </div>
        </nav>

        <main className="hotel-view">
          <div className="gallery">
            <figure className="gallery__item">
              <img
                src="images/hotel-1.jpg"
                alt="hotel 1"
                className="gallery__photo"
              />
            </figure>
            <figure className="gallery__item">
              <img
                src="images/hotel-2.jpg"
                alt="hotel 2"
                className="gallery__photo"
              />
            </figure>
            <figure className="gallery__item">
              <img
                src="images/hotel-3.jpg"
                alt="hotel 3"
                className="gallery__photo"
              />
            </figure>
          </div>

          <div className="overview">
            <h1 className="overview__heading">Hotel Las Palmas</h1>
            <div className="overview__stars">
              <GrStar
                className="overview__icon-star"
                style={{
                  height: "22px",
                  width: "22px",
                  // paddingRight: "2px",
                }}
                color="var(--color-primary)"
              />
              <GrStar
                className="overview__icon-star"
                style={{
                  height: "22px",
                  width: "22px",
                  // paddingRight: "2px",
                }}
                color="var(--color-primary)"
              />
              <GrStar
                className="overview__icon-star"
                style={{
                  height: "22px",
                  width: "22px",
                  // paddingRight: "2px",
                }}
                color="var(--color-primary)"
              />
              <GrStar
                className="overview__icon-star"
                style={{
                  height: "22px",
                  width: "22px",
                  // paddingRight: "2px",
                }}
                color="var(--color-primary)"
              />
              <GrStar
                className="overview__icon-star"
                style={{
                  height: "22px",
                  width: "22px",
                  // paddingRight: "2px",
                }}
                color="var(--color-primary)"
              />
            </div>

            <div className="overview__location">
              <ImLocation
                className="overview__icon-location"
                style={{
                  height: "22px",
                  width: "22px",
                  // paddingRight: "2px",
                }}
                color="var(--color-primary)"
              />
              <button className="btn-inline">Albuferia, Portugal</button>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-average">8.6</div>
              <div className="overview__rating-count">429 votes</div>
            </div>
          </div>

          <div className="detail">
            <div className="description">
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                nisi dignissimos debitis ratione sapiente saepe. Accusantium
                cumque, quas, ut corporis incidunt deserunt quae architecto
                voluptate.
              </p>
              <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae
                architecto voluptate delectus, inventore iure aliquid aliquam.
              </p>
              <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Perfect for families</li>
              </ul>
              <div className="recommend">
                <p className="recommend__count">
                  Lucy and 3 others friend recommend this hotel.
                </p>
                <div className="recommened__friends">
                  <img
                    src="images/user-3.jpg"
                    alt="Friend 1"
                    className="recommend__photo"
                  />
                  <img
                    src="images/user-4.jpg"
                    alt="Friend 2"
                    className="recommend__photo"
                  />
                  <img
                    src="images/user-5.jpg"
                    alt="Friend 3"
                    className="recommend__photo"
                  />
                  <img
                    src="images/user-6.jpg"
                    alt="Friend 4"
                    className="recommend__photo"
                  />
                </div>
              </div>
            </div>

            <div className="user-reviews">
              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi, totam, itaque officia ex.
                </blockquote>
                <figcaption className="review__user">
                  <img
                    src="images/user-1.jpg"
                    alt="User 1"
                    className="review__photo"
                  />
                  <div className="review__user-box">
                    <p className="review__user-name">Nick Smith</p>
                    <p className="review__user-date">Feb 23rd, 2017</p>
                  </div>
                  <div className="review__rating">7.8</div>
                </figcaption>
              </figure>

              <figure className="review">
                <blockquote className="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  doloremque architecto dicta animi.
                </blockquote>
                <figcaption className="review__user">
                  <img
                    src="images/user-2.jpg"
                    alt="User 2"
                    className="review__photo"
                  />
                  <div className="review__user-box">
                    <p className="review__user-name">Mary Thomas</p>
                    <p className="review__user-date">Sep 13th, 2017</p>
                  </div>
                  <div className="review__rating">9.3</div>
                </figcaption>
              </figure>
              <button className="btn-inline">
                Show all <span>&rarr;</span>
              </button>
            </div>
          </div>
          <div className="cta">
            <h2 className="cta__book-now">
              Good news! we have 4 free rooms for your selected dates!
            </h2>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">Only 4 rooms left</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
