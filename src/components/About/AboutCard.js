import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Beyond the realm of technical expertise lies a profound passion for life's simple joys and the well-being of all creatures. Animals hold a special place in my heart, their companionship a source of boundless joy and inspiration. Equally drawn to the calming embrace of water, whether it's the gentle lapping of waves against the shore or the tranquil depths of a serene lake, I find solace and rejuvenation in its presence. However, my deepest connection lies in the compassionate service to humanity, nurtured during my time in Africa where alongside my father, I dedicated myself to aiding children in orphanages, ensuring they had the necessities and support for a brighter future. This journey has shaped me into a person driven not only by technical pursuits but also by a profound sense of empathy and responsibility towards both animals and people alike.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Earn your success based on service to others, not at the expense of others."
          </p>
          <footer className="blockquote-footer">H. Jackson Brown Jr</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
