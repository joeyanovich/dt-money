import styled from "styled-components";
// import * as Dialog from '@radix-ui/react-dialog';

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;

  background-color: ${props => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;
  
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  font-weight: bold;

  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};

  &:hover {
    transition: background-color 0.3s;
    
    background-color: ${props => props.theme['green-700']};
  }
`