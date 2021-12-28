import styled from 'styled-components';

export const Wrapper = styled.div<{ type: string }>`
  margin-top: 20px;

  input {
    border: none;
    line-height: 24px;
    width: ${({ type }) => (type === 'short' ? 50 : 82)}%;
    background: transparent;
    border-bottom: 1px dashed ${({ theme }) => theme.color.border_gray};
  }
`;
