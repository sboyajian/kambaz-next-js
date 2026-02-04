"use client";

import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormLabel,
  FormSelect,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function BootstrapLists() {
  return (
    <div id="wd-css-styling-lists">
      <h2>Favorite movies</h2>
      <ListGroup>
        <ListGroupItem active>Aliens</ListGroupItem>
        <ListGroupItem>Terminator</ListGroupItem>
        <ListGroupItem>Blade Runner</ListGroupItem>
        <ListGroupItem>Lord of the Ring</ListGroupItem>
        <ListGroupItem disabled>Star Wars</ListGroupItem>
      </ListGroup>
      <div id="wd-css-hyperlink-list">
        <h3>Favorite books</h3>
        <ListGroup>
          <ListGroupItem
            action
            active
            href="https://en.wikipedia.org/wiki/Dune_(novel)"
          >
            Dune
          </ListGroupItem>
          <ListGroupItem
            action
            href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
          >
            Lord of the Rings
          </ListGroupItem>
          <ListGroupItem
            action
            href="https://en.wikipedia.org/wiki/The_Forever_War"
          >
            The Forever War
          </ListGroupItem>
          <ListGroupItem
            action
            href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
          >
            2001 A Space Odyssey
          </ListGroupItem>
          <ListGroupItem
            action
            disabled
            href="https://en.wikipedia.org/wiki/Ender%27s_Game"
          >
            Enders Game
          </ListGroupItem>
          <ListGroupItem action onClick={() => alert("New book added")}>
            Add another book
          </ListGroupItem>
        </ListGroup>
      </div>
      <div id="wd-css-styling-dropdowns">
        <h3>Dropdowns</h3>
        <FormSelect>
          <option value="0" defaultChecked>
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </FormSelect>
      </div>
      <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <FormCheck
          type="switch"
          defaultChecked={false}
          label="Unchecked switch checkbox input"
        />
        <FormCheck
          type="switch"
          defaultChecked={true}
          label="Checked switch checkbox input"
        />
        <FormCheck
          type="switch"
          defaultChecked={false}
          label="Unchecked disabled switch checkbox input"
          disabled
        />
        <FormCheck
          type="switch"
          defaultChecked={true}
          label="Checked disabled switch checkbox input"
          disabled
        />
      </div>
      <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <FormLabel>Example range</FormLabel>
        <FormRange min="0" max="5" step="0.5" />
      </div>
      <div id="wd-css-styling-addons">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
          <FormControl />
        </InputGroup>
        <InputGroup>
          <FormControl />
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroup>
      </div>
      <div id="wd-css-responsive-forms-1">
        <h3>Responsive forms</h3>
        <Row className="mb-3" controid="email1">
          <FormLabel column sm={2}>
            {" "}
            Email{" "}
          </FormLabel>
          <Col sm={10}>
            <FormControl type="email" defaultValue="email@example.com" />
          </Col>
        </Row>
        <Row className="mb-3" controlid="password1">
          <FormLabel column sm={2}>
            {" "}
            Password{" "}
          </FormLabel>
          <Col sm={10}>
            <FormControl type="password" />
          </Col>
        </Row>
        <Row className="mb-3" controlid="textarea2">
          <FormLabel column sm={2}>
            {" "}
            Bio{" "}
          </FormLabel>
          <Col sm={10}>
            <FormControl as="textarea" style={{ height: "100px" }} />
          </Col>
        </Row>
      </div>
      <div id="wd-css-responsive-forms-2">
        <h3>Responsive forms 2</h3>
        <Form>
          <Row className="mb-3" controlid="formHorizontalEmail">
            <FormLabel column sm={2}>
              {" "}
              Email{" "}
            </FormLabel>
            <Col sm={10}>
              {" "}
              <FormControl type="email" placeholder="Email" />{" "}
            </Col>
          </Row>
          <Row className="mb-3" controlisd="formHorizontalPassword">
            <FormLabel column sm={2}>
              {" "}
              Password{" "}
            </FormLabel>
            <Col sm={10}>
              {" "}
              <FormControl type="password" placeholder="Password" />{" "}
            </Col>
          </Row>
          <fieldset>
            <Row className="mb-3">
              <FormLabel as="legend" column sm={2}>
                {" "}
                Radios{" "}
              </FormLabel>
              <Col sm={10}>
                <FormCheck
                  type="radio"
                  label="First radio"
                  name="formHorizontalRadios"
                  defaultChecked
                />
                <FormCheck
                  type="radio"
                  label="Second radio"
                  name="formHorizontalRadios"
                />
                <FormCheck
                  type="radio"
                  label="Third radio"
                  name="formHorizontalRadios"
                />
                <FormCheck
                  type="radio"
                  label="Remember me"
                  name="formHorizontalRadios"
                />
              </Col>
            </Row>
          </fieldset>
          <Col>
            {" "}
            <Button type="submit">Sign in</Button>{" "}
          </Col>
        </Form>
      </div>
    </div>
  );
}
