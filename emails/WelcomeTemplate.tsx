import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body style={body}>
        <Container>
          <Text style={heading}>Hello {name}</Text>
        </Container>
      </Body>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff"
};
const heading: CSSProperties = {
  fontSize: "32px"
};

export default WelcomeTemplate;
