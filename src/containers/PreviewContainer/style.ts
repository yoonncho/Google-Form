import styled from 'styled-components';

export const Wrapper = styled.div<{ isNecessary: boolean }>`
  background: ${({ theme }) => theme.color.white};
  width: 768px;
  height: 240px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  height: auto !important;

  .title {
    font-size: 16px;
  }

  .title_necessary {
    font-size: 16px;
    color: ${({ theme }) => theme.color.red};
    font-weight: bold;
    margin-left: 5px;
  }
`;
