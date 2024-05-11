import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MovieRecommendationSystem from "../../Assets/Projects/Movie Recommendation System.png";
import FraudDetection from "../../Assets/Projects/FraudDetection.png";
import Pyrax from "../../Assets/Projects/Pyrax.png";
import Solar from "../../Assets/Projects/Solar.png";
import SAT from "../../Assets/Projects/SAT.png";
import EVCS from "../../Assets/Projects/EVCS.png";
import Physdreamer from "../../Assets/Projects/Physdreamer.png";
import ImageCreation from "../../Assets/Projects/ImageCreation.png";
import ObjectDetection from "../../Assets/Projects/ObjectDetection.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my favorite projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Physdreamer}
              isBlog={false}
              title="Physdreamer"
              description="PhysDreamer is a novel approach that enables users to interact with 3D objects in a physics-based virtual environment by generating videos. It combines advances in 3D scene representation learning and video prediction models to create a system that can generate realistic videos of 3D objects in motion, responding to user inputs and adhering to the laws of physics. By interacting with the generated videos, users can manipulate the objects, apply forces, and observe the resulting physical interactions and object motions. This physics-based video generation approach opens up new possibilities for interactive applications, such as gaming, design, and education, where users can explore and experiment with virtual 3D environments in an intuitive and immersive manner."
              ghLink="https://github.com/kashishdatta/PhysDreamer/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageCreation}
              isBlog={false}
              title="Image Creation"
              description="Image-Creation is a beginner-level project that demonstrates how to generate realistic images from scratch using Generative Adversarial Networks (GANs) implemented in PyTorch. GANs are a type of deep learning model that pits two neural networks against each other: a generator that creates fake images, and a discriminator that tries to distinguish between real and fake images. Through this adversarial training process, the generator learns to produce increasingly convincing fake images that can fool the discriminator into thinking they are real. The end result is a set of generated images that closely resemble real images, often indistinguishable to the human eye. This project serves as an introduction to GANs and their ability to generate realistic synthetic data, with applications in various domains such as computer vision, art, and data augmentation."
              ghLink="https://github.com/kashishdatta/Image-Creation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SAT}
              isBlog={false}
              title="SAT to IMG"
              description="This project involves building an image-to-image translation model using generative adversarial networks (GANs) implemented in PyTorch. It utilizes the Satellite-Map Image dataset, which consists of satellite images and their corresponding map representations. The objective is to train a GAN model that can generate realistic map images from input satellite images, or vice versa. The model architecture consists of two main components: a generator and a discriminator. The generator follows a U-Net-like autoencoder structure, taking an input image from one domain (e.g., satellite) and generating a corresponding image in the other domain (e.g., map). The discriminator, similar to a binary classifier, aims to distinguish between real and generated images, providing adversarial training to improve the generator's performance. This project showcases the power of GANs in image translation tasks and has applications in various domains, such as remote sensing, urban planning, and cartography."
              ghLink="https://github.com/kashishdatta/Sat-to-img"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ObjectDetection}
              isBlog={false}
              title="Object Detection"
              description="Object-Detection is a project that demonstrates real-time object detection in a 2-second video clip. It combines the power of PyTorch, a popular deep learning library, and OpenCV, a computer vision library, to perform object detection on the video frames. The project utilizes a pre-trained SSD model, which is a type of convolutional neural network architecture designed for efficient and accurate object detection. By processing each frame of the video, the SSD model can identify and localize objects of interest, such as dogs and people. The detected objects are then highlighted with bounding boxes and labeled accordingly. This application showcases the integration of deep learning models with computer vision techniques, enabling real-time object detection in video streams, which can be useful in various domains, including surveillance, robotics, and augmented reality applications."
              ghLink="https://github.com/kashishdatta/Object-Detectioin"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Solar}
              isBlog={false}
              title="Solar X-ray Monitor's Data Analysis System and Intensity Classification"
              description="This project focuses on analyzing data from solar X-ray monitors aboard the Chandrayaan-2 orbiter to monitor and predict space weather conditions. It involves collecting and pre-processing solar X-ray data, applying data cleaning and transformation techniques to prepare it for analysis. Machine learning algorithms are then employed to classify different levels of solar intensity based on historical data. This classification system aids in monitoring and predicting space weather events, which can impact various Earth-based and space-based technologies. Additionally, the project includes the development of visualization tools that represent solar intensity data in a clear and interpretable manner for scientists and researchers. By leveraging advanced data analysis techniques and machine learning, this project contributes to our understanding of solar activities and their potential impacts, ultimately enhancing our preparedness for space weather events."
              ghLink="https://github.com/kashishdatta/solar-xray-monitor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EVCS}
              isBlog={false}
              title="Optimal Placement of EVCS on the Highways"
              description="This project aims to determine the optimal locations for installing electric vehicle charging stations (EVCS) along highways. It involves analyzing various factors such as traffic patterns, travel distances, existing infrastructure, and geographical constraints to identify the most suitable sites for EVCS deployment. By leveraging data analytics and optimization techniques, the project seeks to maximize the coverage and accessibility of charging stations while minimizing the overall installation and maintenance costs. The optimal placement of EVCS on highways is crucial for promoting the widespread adoption of electric vehicles by addressing range anxiety concerns and ensuring a seamless long-distance travel experience for EV owners. This project has the potential to accelerate the transition towards sustainable transportation by providing a comprehensive and efficient charging infrastructure along major transportation routes."
              ghLink="https://github.com/kashishdatta/Optimal-Placement-of-EVCS-on-Highways"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieRecommendationSystem}
              isBlog={false}
              title="MovieSpot"
              description="A Movie Recommendation System project aims to develop an intelligent system that suggests movies tailored to a user's preferences and interests. By leveraging machine learning algorithms and data analysis techniques, the system processes a vast database of movie information, user ratings, and viewing histories. It then employs collaborative filtering or content-based filtering approaches to identify patterns and similarities between movies and user preferences. The system can provide personalized recommendations based on a user's previous ratings, watched movies, or similarities to other users with shared tastes. Additionally, it may incorporate content analysis, such as genre, director, actors, and plot summaries, to recommend movies that align with a user's preferences. The project's goal is to enhance the movie-watching experience by presenting users with curated and relevant movie recommendations, reducing the time and effort required to discover enjoyable films."
              ghLink="https://github.com/kashishdatta/MovieSpot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pyrax}
              isBlog={false}
              title="Pyrax"
              description="Pyrax is an IoT-based fire safety alert system designed to address the lack of strict fire safety standards in India. Inspired by a tragic fire incident that endangered the lives of 22 students, this system aims to provide a robust and efficient fire detection and response mechanism. It consists of a hardware component placed near fire extinguishers, equipped with a button or flame sensor. When a fire is detected, either by pressing the button three times or through the flame sensor, the system triggers an alarm, cuts off power in the affected area, activates battery-operated red lights, and sounds a siren. Simultaneously, it sends an alert message and location details to relevant authorities, such as fire stations, hospitals, and department heads, through a dedicated webpage. This smart city initiative streamlines the fire response process, reduces reaction time, and facilitates timely assistance, potentially preventing collateral damage and saving lives."
              ghLink="https://github.com/Kashishdatta/Pyrax"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FraudDetection}
              isBlog={false}
              title="Fraud Detection"
              description="Fraud Detection from Bank Records using ML is a project that aims to develop a robust system for identifying fraudulent transactions within a bank's financial records. By leveraging advanced machine learning algorithms and techniques, the system analyzes vast amounts of transactional data, including account details, transaction amounts, locations, and timestamps. It employs supervised learning models, trained on labeled datasets of fraudulent and legitimate transactions, to learn patterns and anomalies that may indicate fraudulent activities. The system continuously monitors incoming transactions, flagging suspicious ones based on the learned patterns and predefined risk thresholds. This proactive approach helps banks detect and prevent fraudulent activities in real-time, safeguarding their customers' financial assets and maintaining the integrity of the banking system. The project showcases the power of machine learning in enhancing security and fraud prevention measures within the financial sector."
              ghLink="https://github.com/kashishdatta/FraudDetection"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
