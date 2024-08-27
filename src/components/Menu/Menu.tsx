import { BiHeart, BiHome, BiSearch, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";

export const Menu = () => {
  return (
    <StyledMenu>

      <StyledWrapperMenu>

        <StyledMenuItem>
          <BiHome size="1.5rem" color="#38aede" />
          <Link to="/">Inicio</Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <BiSearch size="1.5rem" color="#38aede" />
          <Link to="/busca">Busca</Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <BiHeart size="1.5rem" color="#38aede" />
          <Link to="/favoritos">Favoritos</Link>
        </StyledMenuItem>

        <StyledMenuItem>
          <BiUserCircle size="1.5rem" color="#38aede" />
          <Link to="/perfil">Perfil</Link>
        </StyledMenuItem>

      </StyledWrapperMenu>
    </StyledMenu>
  )
}
