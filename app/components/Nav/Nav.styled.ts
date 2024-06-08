import styled from "styled-components";
import { device } from "@/app/styles/variables.styled";

export const HeaderWrapper = styled.header`
  margin-bottom: 0;

  @media ${device.tablet} {
    max-width: 750px;
    padding: 16px 0 5px 0;
  }
  @media ${device.laptop} {
    max-width: 970px;
  }
  @media ${device.laptopL} {
    max-width: 1170px;
  }
`;

export const NavigationWrapper = styled.nav``;
