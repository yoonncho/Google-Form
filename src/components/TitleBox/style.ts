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
  }

  .title-input {
    font-size: 32px;
    margin-top: 24px;

    &::placeholder {
      color: ${({ theme }) => theme.color.black};
    }
  }

  .detail-input {
    margin-top: 16px;
  }
`;
