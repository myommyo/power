import styled, { css } from "styled-components";

const variStyles = css`
  ${(props) =>
    props.variant === "text" &&
    css`
      min-width: 120px;
      border-radius: 4px;
    `}
  ${(props) =>
    props.variant === "etc" &&
    css`
      min-width: auto;
      font-size: 14px;
      border-radius: 4px;
      padding: 0 12px;
      flex-shrink: 0;
    `}
`;

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 16px;
  height: 40px;

  border: 1px solid #202844;
  border-radius: 8px;
  font-size: 15px;
  color: #fff;
  font-weight: 500;

  color: ${(p) => p.color || "#fff"};
  background: ${(p) => p.background || "#202844"};

  & > svg {
    margin-right: 4px;
  }
  ${(p) =>
    p.primary &&
    css`
      color: #fff;
      background: #202844;
      border-color: #202844;
      &:hover {
        text-decoration: underline;
      }
      &:disabled {
        color: #c8cbd3;
        background: #e9eaf2;
        border-color: #e9eaf2;
        pointer-events: none;
      }
    `}

  ${(p) =>
    p.outlined &&
    css`
      color: #202844;
      background: #fff;
      &:hover {
        text-decoration: underline;
      }
      &:disabled {
        color: #c8cbd3;
        border-color: #c8cbd3;
        pointer-events: none;
      }
    `}

  //스타일정의
  ${variStyles}
`;

function Button({ children, variant, ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
