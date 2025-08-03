import React from 'react';
import './RobotControlProject.css';

const RobotControlProject = () => {
  return (
    <div className="project-detail">
      <div className="project-hero">
        <h1>Robot Modelling and Control</h1>
        <p className="project-subtitle">Hands-On Exploration of Robot Kinematics, Control, and Motion Planning with the KUKA Robotic Arm</p>
      </div>

      <div className="project-content">
        <section>
          <h2>Introduction</h2>
          <p>
            This project was part of ECE470: Robot Modelling and Control, a joined advanced undergraduate and graduate course at the University of Toronto. Over the span of two months, in a group of three members, worked on a series of interconnected laboratories. These labs focused on implementing advanced robotics concepts using the industrial grade KUKA robotic arm. Through this hands-on experience, we developed a comprehensive understanding of robot kinematics, control, and motion planning. The project began with mathematical modeling using the Denavit-Hartenberg convention and progressed to implementing sophisticated motion planning algorithms with obstacle avoidance.
          </p>
        </section>

        <section>
          <h2>The KUKA Robotic Arm</h2>
          <p>
            The KUKA robotic arm used in this project is a 6-degree-of-freedom articulated manipulator with a three-axis wrist and a gripper.
          </p>
          <div className="diagram-container">
            <img src={`media/robot_arm_diagram.png`} alt="KUKA Robotic Arm Diagram" />
          </div>
        </section> 

        <section>
          <h2>Denavit-Hartenberg Convention</h2>
          <p>
            The Denavit-Hartenberg (DH) convention provides a systematic method for assigning coordinate frames to the links of a robot manipulator. For the KUKA robot, I derived the following DH parameters:
          </p>
          <div className="matrix-container">
            <table>
              <thead>
                <tr>
                  <th>Link</th>
                  <th>α(i-1)</th>
                  <th>a(i-1)</th>
                  <th>d(i)</th>
                  <th>θ(i)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>d₁</td>
                  <td>θ₁</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>-π/2</td>
                  <td>a₁</td>
                  <td>0</td>
                  <td>θ₂</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>0</td>
                  <td>a₂</td>
                  <td>0</td>
                  <td>θ₃</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>-π/2</td>
                  <td>a₃</td>
                  <td>d₄</td>
                  <td>θ₄</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>π/2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>θ₅</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>-π/2</td>
                  <td>0</td>
                  <td>d₆</td>
                  <td>θ₆</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Forward Kinematics</h2>
          <p>
            Forward kinematics determines the position and orientation of the robot's end effector given the joint angles. For the KUKA robot, I implemented a MATLAB function that computes the homogeneous transformation matrix using the DH parameters and joint angles.
          </p>
        </section>

        <section>
          <h2>Inverse Kinematics</h2>
          <p>
            Inverse kinematics determines the joint angles required to achieve a desired end-effector position and orientation. For the KUKA robot, I implemented a kinematic decoupling approach.
          </p>
        </section>

        <section>
          <h2>Robot Calibration and Frame Transformation</h2>
          <p>
            A critical aspect of the project was calibrating the robot to improve the accuracy of the forward kinematics. This was achieved by collecting data pairs, defining a cost function, and minimizing it to find optimal parameters.
          </p>
        </section>

        <section>
          <h2>Pattern Drawing Implementation</h2>
          <p>
            Using the calibrated robot model and inverse kinematics, I implemented functions to make the robot draw patterns on paper, including line segments, circles, and creative patterns such as the water jar seen below.
          </p>
          <div className="image-container">
            <img src={`media/ECE470_jar.jpg`} alt="Pattern Drawing Example" />  
          </div>
        </section>

        <section>
          <h2>Motion Planning with Artificial Potential Fields</h2>
          <p>
            For advanced robot control, I implemented motion planning using the artificial potential field method.
            This approach treats the end-effector as a particle moving in a field with attractive and repulsive forces.
          </p>
          
          <div className="equation-block">
            <p>At the heart of the artificial potential method is the gradient descent algorithm:</p>
            <div className="equation">
              {"q"}<sub>k+1</sub> = {"q"}<sub>k</sub> + α<sub>k</sub> ∑<sub>i=1</sub><sup>6</sup> J<sub>{"o"}i</sub>({"q"}<sub>k</sub>)<sup>T</sup> (F<sub>i,att</sub>({"o"}<sub>i</sub><sup>0</sup>({"q"}<sub>k</sub>)) + F<sub>i,rep</sub>({"o"}<sub>i</sub><sup>0</sup>({"q"}<sub>k</sub>)))
            </div>
            
            <p>The Jacobian block is defined as:</p>
            <div className="equation">
              J<sub>{"o"}i</sub>({"q"}<sub>k</sub>) = [J<sub>v1</sub> ... J<sub>vi</sub> | 0<sub>3×(6-i)</sub>]
            </div>
            
            <p>Each column <em>j</em> of the Jacobian is:</p>
            <div className="equation">
              J<sub>vj</sub> = {"z"}<sub>j-1</sub><sup>0</sup>, if joint j is prismatic<br />
              J<sub>vj</sub> = {"z"}<sub>j-1</sub><sup>0</sup> × ({"o"}<sub>i</sub><sup>0</sup> - {"o"}<sub>j-1</sub><sup>0</sup>), if joint j is revolute
            </div>
            
            <h3>Attractive Field</h3>
            <p>
              The attractive component pulls the end-effector toward the goal. It is computed as:
            </p>
            <div className="equation">
              τ<sub>att</sub> = ∑<sub>i=1</sub><sup>6</sup> J<sub>{"o"}i</sub>({"q"})<sup>T</sup> F<sub>i,att</sub>({"o"}<sub>i</sub><sup>0</sup>({"q"}))<br />
              where<br />
              F<sub>i,att</sub> = -ζ<sub>i</sub> ({"o"}<sub>i</sub><sup>0</sup>({"q"}) - {"o"}<sub>i</sub><sup>0</sup>({"q"}<sub>f</sub>)), if ||Δ{"o"}<sub>i</sub>|| ≤ d<sub>i</sub><br />
              F<sub>i,att</sub> = -d<sub>i</sub> ζ<sub>i</sub> (Δ{"o"}<sub>i</sub>/||Δ{"o"}<sub>i</sub>||), if ||Δ{"o"}<sub>i</sub>||&gt;  d<sub>i</sub>
            </div>
            <p>
              Here, Δ{"o"}<sub>i</sub> = {"o"}<sub>i</sub><sup>0</sup>({"q"}) - {"o"}<sub>i</sub><sup>0</sup>({"q"}<sub>f</sub>), and ζ<sub>i</sub> and d<sub>i</sub> are positive design parameters.
              For initial tests we set ζ<sub>i</sub> = 10<sup>-2</sup> and d<sub>i</sub> = 10<sup>6</sup>, effectively disabling saturation.
            </p>
          </div>
        </section>

        <section>
          <h2>Object Manipulation and Obstacle Avoidance</h2>
          <p>
            The culmination of the project was implementing motion planning for object manipulation while avoiding obstacles. The task involved setting up obstacles, defining waypoints, and executing the planned trajectory with the KUKA robot.
          </p>
          <div className="video-container">
            <video controls>
              <source src={`media/motionplanning.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>
            This robot modelling and control project provided hands-on experience with fundamental robotics concepts, from kinematic modeling to advanced motion planning. The implementation on a real KUKA robot demonstrated the practical application of theoretical concepts and the challenges involved in translating simulations to physical hardware.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RobotControlProject;
