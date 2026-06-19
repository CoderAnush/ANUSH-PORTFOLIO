"use client";
// import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
        <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI &amp; Edge Computing Intern</h4>
                <h5>Larsen &amp; Toubro</h5>
              </div>
              <h3>June 2026 · Chennai, India</h3>
            </div>
            <p>
              Developed an AI-based Biomedical Waste Segregation Monitoring System for automated waste classification using Computer Vision. Built and annotated a biomedical waste dataset of 9,124 images across 8 categories using Roboflow. Collaborated in training, testing, and validation of a YOLOv11 Nano object detection model, achieving 95.5% mAP@50 with 91.4% Precision and 95.4% Recall.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Edunet Foundation</h5>
              </div>
              <h3>06/2025 - 07/2025</h3>
            </div>
            <p>
              Completed a 4-week AICTE-Microsoft internship focused on AI, ML, and Azure Cloud. Built a supervised ML model in Python for cricket match outcome prediction, including data preprocessing, feature selection, and model evaluation.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Electrical & Computer Engineering</h4>
                <h5>Amrita Vishwa Vidyapeetham</h5>
              </div>
              <h3>08/2023 - Present</h3>
            </div>
            <p>
              Pre-final year B.Tech student with a strong focus on core electrical concepts, machine learning, data analysis, programming, and applied problem-solving through coursework and hands-on projects.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary Schooling</h4>
                <h5>Delhi Public School, Ruby Park</h5>
              </div>
              <h3>03/2009 - 04/2023</h3>
            </div>
            <p>
              Completed senior secondary education with a strong foundation in mathematics, science, and computer science. Actively participated in academic and extracurricular activities, developing discipline, problem-solving skills, and a consistent learning mindset.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
