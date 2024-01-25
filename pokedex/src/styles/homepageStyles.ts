import { styled } from "styled-components"

export const HomeTitle = styled.h1`
  font-size: 4rem;
  font-family: "Preahvihear";
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`

// PokemonGrid styles
export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
