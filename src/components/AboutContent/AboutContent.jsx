/**@jsx jsx */
/* import React from "react"; */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import * as styles from "./AboutContent.styles";
const AboutContent = () => {
  return (
    <section className="about-page-content-component">
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.aboutPageHeader}>About this App</h1>
          <h3 css={styles.aboutPageSubHeader}>
            What i learn by building this app
          </h3>
        </Item>

        <Item>
          <Container justifyContent="center">
            <p>
              the First App i learn with react , and learn about anything in it
              .
            </p>
          </Container>
        </Item>

        <Item align="center">
          <Link to="/">
            <span css={styles.aboutPageParagraph}>back to homepage</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
