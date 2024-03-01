import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0; //mesmo que top: 0; bottom: 0; left: 0; right: 0;

  background-color: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  padding: 2.5rem 3rem;

  border-radius: 6px;

  background-color: ${props => props.theme['gray-800']};

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;

      border-radius: 6px;
      border: 0;

      background-color: ${props => props.theme["gray-900"]};
      color: ${props => props.theme["gray-300"]};

      &::placeholder {
        color: ${props => props.theme["gray-500"]};
      }
    }
    button[type="submit"] {
      height: 58px;
      margin-top: 1.5rem;
      padding: 0 1.25rem;

      border: 0;
      border-radius: 6px;
      cursor: pointer;

      font-weight: bold;

      background-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${props => props.theme["green-700"]};
        transition: background-color 0.3s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  line-height: 0;

  border: 0;
  cursor: pointer;

  background-color: transparent;
  color: ${props => props.theme["gray-500"]};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;

  border: 0;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${props => props.theme["gray-700"]};
  color: ${props => props.theme["gray-300"]};

  svg {
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]}
  }

  &[data-state='unchecked']:hover {
    background-color: ${props => props.theme["gray-600"]};
    transition: background-color 0.3s;
  }

  &[data-state='checked'] {
    color: ${props => props.theme.white};
    background-color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme["red-500"]};

    svg {
      color: ${props => props.theme.white};
    }
  }
`