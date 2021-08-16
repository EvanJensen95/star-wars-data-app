import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <Menu inverted>
      <Container>
        <Link to='/'>
            <Menu.Item name="star wars API"></Menu.Item>
        </Link>
        <Link to='/people'>
        <Menu.Item name="people"></Menu.Item>
        </Link>
        <Link to='/planets'>
        <Menu.Item name="planets"></Menu.Item>
        </Link>
        
        
      </Container>
    </Menu>
  );
}
