import React from "react";
import "./RoboticArmProject.css";

export default function RoboticArmProject() {
  return (
    <div className="project-detail">
      <div className="project-header">
        <h1>Robotic Arm Coin Sorter</h1>
        <p className="project-subtitle">
          Group project for MIE438 – Microcontrollers and Microprocessors
        </p>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Introduction</h2>
          <p>
            This project involved designing and building a robotic arm capable of sorting Canadian coins both manually and autonomously. It was completed as part of the University of Toronto course MIE438 – Microcontrollers and Microprocessors. The robotic system integrated mechanical, electrical, and software subsystems, including deep learning-based computer vision and real-time embedded control.
          </p>
        </section>

        <section className="project-section">
          <h2>Project Objectives</h2>
          <p>
            The goal was to construct a three-joint robotic arm capable of picking up and sorting coins into bins. This project allowed the group to implement embedded systems, microcontroller programming, and computer vision in a tangible, integrated solution for coin classification and sorting.
          </p>
          <p>
            Below is an image of the final design of the robotic arm system:
          </p>
          <div className="setup-image-container">
            <img
            src={`media/robotic_arm_fd.png`}
            alt="Robotic Arm Side View"
            className="setup-image"
          />
          </div>
          <p>
            In the left there is a view of the camera setup, with a Raspberry Pi 3 running the YOLOv7-tiny model to detect coins in real time. The camera is mounted on a tripod, and the robotic arm is positioned to pick up coins from a flat surface. The setup ensures the camera view does not change with respect to the arm's base, allowing for the 2D coordinates of detected coins to be mapped directly to the arm's workspace.
          </p>
        </section>

        <section className="project-section">
          <h2>Mechanical Design</h2>
          <p>
            The arm used three revolute joints actuated by MG996R high torque servo motors. The structure was designed in SolidWorks and initially assembled using hot glue and 3D printed parts, later reinforced with screws and zip ties. A solenoid served as the magnetic end effector to pick up coins. Forward kinematics were derived from Denavit-Hartenberg parameters, and workspace motion was calibrated manually using lookup tables.
          </p>

          <div className="setup-image2-container">
            <img
              src={`media/robot_coin_cad.png`}
              alt="Robotic Arm Diagram" className="setup-image2"
            />
          </div>
          <p>
            <strong>Joint Position Equations:</strong>
            <div className="equation-box">
              <p>
                x = b₃(cos(θ₁)cos(θ₂)cos(θ₃) - cos(θ₁)sin(θ₂)sin(θ₃)) + b₂(cos(θ₁)cos(θ₂)) <br />
                y = b₃(sin(θ₁)cos(θ₂)cos(θ₃) - sin(θ₁)sin(θ₂)sin(θ₃)) + b₂(sin(θ₁)cos(θ₂)) <br />
                z = b₃(sin(θ₂)cos(θ₃) + cos(θ₂)sin(θ₃)) + b₂(sin(θ₂)) + b₁ 
              </p>
            </div>
          </p>
        </section>

        <section className="project-section">
          <h2>Electrical Design</h2>
          <p>
            The system used a Raspberry Pi 4 as the microcontroller. It drove the servo motors and solenoid through GPIO pins with PWM signals. The power system included a 12V source, DC-DC converter, and relay switch to control the solenoid. The Pi was chosen for its performance, native camera support, and flexibility in handling deep learning workloads. Circuit design emphasized simplicity and direct connection via breadboards.
          </p>
        </section>

        <section className="project-section">
          <h2>Software Design</h2>
          <p>
            Python was used for control logic and vision integration. Early vision systems relied on classical thresholding and edge detection, but were later replaced by a YOLOv7-tiny neural network trained on a custom dataset of labeled Canadian coins.
          </p>
         
          <div className="setup-video-container">
            <video controls className="setup-video">
              <source src={'media/demo_coin_ai_2.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p>
            Object detections were mapped to workspace positions using a lookup table. A class-based servo control
            system and a program state machine were used to switch between manual and autonomous modes. The manual mode allowed precise control of each joint and the solenoid via keyboard inputs, while the autonomous mode used a lookup table for motion planning.
          </p>

          <div className="setup-image-container">
            <img src={`media/coin_fsm.png`} alt="Robotic Arm FSM" className="setup-image" />
          </div>

        </section>

        <section className="project-section">
          <h2>Results</h2>
          <p>
            The system successfully sorted coins in manual and semi-autonomous modes. A trained YOLO model identified coins in real time. Manual mode allowed precise control of each joint and the solenoid via keyboard inputs. Autonomous mode used a lookup table for motion planning, though accuracy varied. Lookup interpolation and detection filtering improved performance, but full autonomy required further development.
          </p>
          <div className="results-video-container">
            <video controls className="results-video">
              <source src={"media/robot_arm_final.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className="project-section">
          <h2>Conclusion & Enhancements</h2>
          <p>
            The project demonstrated an effective integration of embedded systems, mechanical design, and computer vision. Future improvements include more accurate servo power supply, PID control, Wi-Fi/Bluetooth communication, and refined lookup-based inverse kinematics. Further software-level enhancements would support concurrent joint movement and better deep learning inference performance.
          </p>
        </section>
      </div>
    </div>
  );
}
