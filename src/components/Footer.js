import React from 'react';
import FA from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import Wrapper from '../styledComponents/FooterWrapper';

function Footer() {
  return (
    <Wrapper>
      <a href="https://github.com/RichAbrahams">
        <span>Created by Rich Abrahams</span>
        <FA
          className="fa-github"
          name="fa-github"
          size="2x"
        />
      </a>
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
