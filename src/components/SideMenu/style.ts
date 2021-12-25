import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 160px;
  top: 0;

  .container {
    ${({ theme }) => theme.flexCenter};
    flex-direction: column;
    justify-content: space-around;
    background: ${({ theme }) => theme.color.white};
    border-radius: 14px;
    width: 56px;
    height: 100px;

    img {
      cursor: pointer;
      width: 38px;
      height: 38px;
    }
  }
`;
