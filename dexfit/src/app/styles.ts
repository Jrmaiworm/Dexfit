import styled from "styled-components";
interface TextProps {
  pink?: boolean;
}
interface TitleProps {
  black?: boolean;
}
interface ButtonProps {
  white?: boolean;
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
export const BlackText = styled.div`
  color: black;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  align-self: center;
  justify-content: center;
  padding-bottom: 25px;
`;
export const BlackSubText = styled.div`
  color: black;
  display: flex;
  font-weight: 700;
  font-size: 12px;
  align-self: center;
  justify-content: center;
  padding: 15px 0px 15px;
`;
export const WhiteSubText = styled.div`
  color: white;
  display: flex;
  font-weight: 700;
  font-size: 12px;
  align-self: center;
  justify-content: center;
  padding: 15px 0px 15px;
`;
export const PinkSubText = styled.div`
  color: #ff0181;
  display: flex;
  font-weight: 700;
  font-size: 12px;
  align-self: center;
  justify-content: center;
  padding: 5px;
`;
export const PText = styled.div`
  color: #ff0181;
  display: flex;
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 2px;
`;
export const CardText = styled.div`
  color: white;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  align-self: center;
  justify-content: center;
  padding: 25px 15px 15px;
`;
export const Text = styled.text<TextProps>`
  color: ${(props) => (props.pink ? "rgba(255, 1, 129, 1)" : "white")};
`;

export const HighlightTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Paragraph = styled(WhiteText)`
  font-weight: 400;
`;
export const TextCard = styled(WhiteText)`
  font-weight: 300;
  font-size: 15px;
`;
export const Title = styled.text<TitleProps>`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 5px;
  color: ${(props) => (props.black ? "black" : "white")};
`;

export const Button = styled.a.attrs({
  href: "https://wa.me/47999847270",
  target: "_blank",
})<ButtonProps>`
  height: 78px;
  width: 90%;
  background-color: ${(props) =>
    props.white ? "white" : "rgba(255, 1, 129, 1)"};
  color: ${(props) => (props.white ? "rgba(255, 1, 129, 1)" : "white")};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 15px rgba(255, 1, 128, 1);
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
