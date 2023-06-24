import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #1e1b2c;
  color: #ff0181;
  font-size: 40px;
  font-weight: 700;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 444px;
  margin-left: 99px;
`;

export const WhiteText = styled.div`
  color: white;
`;

export const HighlightTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Paragraph = styled(WhiteText)`
  font-size: 24px;
  font-weight: 400;
`;

export const Button = styled.div`
  height: 78px;
  width: 420px;
  background-color: #ef3693;
  color: white;

  font-weight: 700;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
