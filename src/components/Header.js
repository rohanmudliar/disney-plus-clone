import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      <NavMenu>
        <Link to="/">
          <img src="/images/home-icon.svg" alt="home" />
          <span>Home</span>
        </Link>
        <Link to="#">
          <img src="/images/search-icon.svg" alt="search" />
          <span>Search</span>
        </Link>
        <Link to="/detail">
          <img src="/images/watchlist-icon.svg" alt="detail" />
          <span>Detail</span>
        </Link>
        <Link to="#">
          <img src="/images/original-icon.svg" alt="originals" />
          <span>original</span>
        </Link>
        <Link to="#">
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>Movies</span>
        </Link>
        <Link to="#">
          <img src="/images/series-icon.svg" alt="series" />
          <span>Series</span>
        </Link>
      </NavMenu>

      <Link to="/login">
      < UserImg src="https://avatars.githubusercontent.com/u/44732632?v=4" />
      </Link>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b1b;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: white;
    font-weight: 600;
    display: flex;
    text-decoration: none;
    gap: 6px;
    align-items: center;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms ease-out;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
