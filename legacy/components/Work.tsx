"use client";
import { useState, useCallback } from "react";
// import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: 'Movie Recommendation System',
    category: 'Content Recommendation Engine',
    tools: 'Python, scikit-learn, Pandas, NLTK',
    description: 'Built a hybrid recommendation system using ML and fuzzy logic to deliver personalized movie suggestions, improving relevance based on user preferences.',
    image: '/images/movie-rec.png',
    link: 'https://github.com/CoderAnush/MOVIE-RECOMMENDATION-SYSTEM'
  },
  {
    title: 'Live Sign Language Transcript',
    category: 'Computer Vision & Deep Learning',
    tools: 'Python, MediaPipe, LSTM, OpenCV',
    description: 'Developed an LSTM-based neural network leveraging MediaPipe to translate sign language gestures into text in real-time, bridging communication gaps.',
    image: '/images/sign-lang.svg',
    link: 'https://github.com/CoderAnush/LIVE-SIGN-LANGUAGE-TRANSCRIPT'
  },
  {
    title: 'Cricket Match Predictor',
    category: 'Predictive Machine Learning',
    tools: 'Python, XGBoost, Pandas, Numpy',
    description: 'Engineered an XGBoost classification model to predict live T20 cricket match outcomes, providing real-time probability estimates with high accuracy.',
    image: '/images/cricket.svg',
    link: 'https://github.com/CoderAnush/ML-PROJECT'
  },
  {
    title: '3D Interactive Portfolio',
    category: 'Generative AI & 3D Web',
    tools: 'Next.js, Three.js, TypeScript, GSAP',
    description: 'Designed an immersive web experience with custom 3D models and animations, showcasing technical expertise in frontend performance optimization.',
    image: '/images/portfolio.jpg',
    link: 'https://github.com/CoderAnush/ANUSH-PORTFOLIO'
  },
  {
    title: 'AutoIntern AI',
    category: 'AI Job Aggregation Platform',
    tools: 'FastAPI, Scrapy, React, PostgreSQL, Redis, Elasticsearch, BERT',    
    description: 'Architected a scalable semantic search platform aggregating thousands of job listings, helping students match with internships using NLP context.',
    image: '/images/autointern.svg',
    link: 'https://github.com/CoderAnush/AutoIntern'
  },
  {
    title: 'Neural Network Compiler',
    category: 'Compiler Design & Automata Theory',
    tools: 'Python, PyTorch, DFA, Graph Optimization, Benchmarking',
    description: 'Implemented a custom compiler leveraging Deterministic Finite Automata to optimize neural network execution graphs, reducing latency and memory overhead.',
    image: '/images/nn-compiler.svg',
    link: 'https://github.com/CoderAnush/Compiling-Neural-Network-Models-Using-Automata-Theory'
  },
  {
    title: 'IoT Fire Suppression System',
    category: 'Industrial IoT & Embedded Systems',
    tools: 'ESP32, Raspberry Pi Pico, Arduino, MQTT, HTML/CSS/JavaScript',      
    description: 'Constructed an automated hazard monitoring system using MQTT protocols for real-time alerting and physical fire suppression deployment.',
    image: '/images/iot-fire.svg',
    link: 'https://github.com/CoderAnush/IoT-Based-Indoor-Hazard-Monitoring-and-Automated-Fire-Suppression-System-Using-MQTT'
  },
  {
    title: 'Industrial IoT Dashboard',
    category: 'Real-Time Monitoring & ML',
    tools: 'React, FastAPI, Python, Machine Learning, Real-time Analytics',     
    description: 'Deployed an interactive full-stack dashboard parsing live IoT sensor data, enabling predictive maintenance through integrated ML insights.',
    image: '/images/openlab-dashboard.svg',
    link: 'https://github.com/CoderAnush/OPENLAB-PROJECT'
  },
  {
    title: 'Biomedical Waste Segregation & Bin Recommendation',
    category: 'Computer Vision & Healthcare AI',
    tools: 'Python, YOLOv11, Roboflow, OpenCV, Power BI, Streamlit',
    description: 'AI-powered biomedical waste monitoring system using YOLOv11 and Roboflow for real-time object detection. Automatically classifies waste items into 8 categories and recommends the correct disposal bin. Achieved 95.5% mAP@50 with 91.4% Precision and 95.4% Recall. Features CSV logging and Power BI dashboards for analytics.',
    image: '/images/bio-waste-app.png',
    link: 'https://github.com/CoderAnush/Compiling-Neural-Network-Models-Using-Automata-Theory'
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>                        <p className="carousel-description" style={{ fontSize: '14px', color: '#ccc', margin: '15px 0', lineHeight: '1.5' }}>
                          {project.description}
                        </p>                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
