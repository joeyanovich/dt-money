import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;

    border-radius: 6px;
    border: 0;

    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;

    font-weight: bold;

    border: 1px solid ${(props) => props.theme['green-300']};
    background-color: transparent;
    color: ${(props) => props.theme['green-300']};

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      border-color: ${(props) => props.theme['green-500']};
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};

      transition:
        background-color 0.3s,
        color 0.3s,
        border-color 0.3s;
    }
  }
`
