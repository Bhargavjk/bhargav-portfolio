import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.email && (
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=jkbhargav007@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-icon-only rounded-circle ml-1 btn-white"
  >
    <span className="btn-inner--icon">
      <i className="fa fa-envelope" />
    </span>
  </a>
)}

      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}

      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;