import { styled } from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.border};
`
