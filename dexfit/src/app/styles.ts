import styled from "styled-components";
interface TextProps {
  pink?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  background-color: #1e1b2c;
  color: #ff0181;
  font-size: 40px;
  font-weight: 700;
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 100vw;
`;
export const PinkText = styled.div`
  color: #ef3693;
`;
export const TextContainer = styled.div``;

export const WhiteText = styled.div`
  color: white;
`;
export const Text = styled.div<TextProps>`
  color: ${props => (props.pink ? "#ef3693" : "white")};
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
  width: 100%;
  background-color: #ef3693;
  color: white;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: px; 
  padding-right: px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #f687b3;
    color: #000;
  }
`;
