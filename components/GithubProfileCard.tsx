import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import SocialLinks from "./SocialLinks";
import { contact } from "../portfolio";

const GithubProfileCard = () => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container>
        <div className="p-2">
          <Row>
            <Col className="order-lg-2" lg="4">
              <img
                src={contact.avatar_image_path}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                alt="Bhargav"
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>

            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">{contact.title}</h2>

              <p className="lead text-white mt-3">
                {contact.description}
              </p>

              <a
                href={contact.location_map_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light mt-3"
              >
                <i className="ni ni-pin-3 text-info mr-2" />
                {contact.address}
              </a>

              <div className="mt-4">
                <SocialLinks />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;