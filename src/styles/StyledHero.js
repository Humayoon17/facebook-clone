import styled from 'styled-components';
import defaultImage from '../images/details-4.jpeg';

const StyledHero = styled.header`
  min-height: 60vh;
  background-image: url(${(props) => props.image || defaultImage});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledHero;
