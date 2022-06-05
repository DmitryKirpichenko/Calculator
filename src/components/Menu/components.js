import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuHrefStyle = styled.a`
    outline: none;
    text-decoration: none;
    a:link{
      color : white;
    }
    a:visited{
      color : white;
    }
  }
`;
// const Link = ({className, children}) => (
//   <a className={className}>{children}</a>
// )

export const MenuLinkStyle = styled(Link)`
    padding: 0 0 0 6px;
    cursor: pointer;
    :link{
      color : white;
    }
    :visited{
      color : white;
    }
    :hover {
    color: black;
    }

`;
