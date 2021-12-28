import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.white};
  width: 768px;
  height: 138px;
  border-radius: 10px;

  input {
    border: none;
    margin-left: 20px;
  }

  .inputs {
    display: flex;
    flex-direction: column;

    &:before {
      content: '';
      height: 12px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      width: 100%;
      background: ${({ theme }) => theme.color.purple};
    }

    &__title {
      font-size: 32px;
      margin-top: 24px;
      &::placeholder {
        color: ${({ theme }) => theme.color.black};
      }
    }

    &__detail {
      margin-top: 16px;
    }
  }

  .preview {
    display: flex;
    flex-direction: column;

    &:before {
      content: '';
      height: 12px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      width: 100%;
      background: ${({ theme }) => theme.color.purple};
    }

    &__title {
      margin-left: 20px;
      margin-top: 16px;
      font-size: 32px;
    }

    &__detail {
      margin-left: 20px;
      margin-top: 16px;
      font-size: 14px;
    }

    hr {
      width: 100%;
      margin-top: 12px;
      border: none;
      height: 1px;
      background: ${({ theme }) => theme.color.border_gray};
    }

    &__guide {
      margin-top: 5px;
      margin-left: 20px;
      font-size: 12px;
      color: ${({ theme }) => theme.color.red};
    }
  }
`;
