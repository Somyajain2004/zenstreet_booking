import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/availableSessions.css';


const AvailSessionDesign = () => {
  const [selectedDuration, setSelectedDuration] = useState("60 min");

  const sessions = [
    {
      title: "Group Therapy",
      price: 3200,
      features: [
        "Joint Evaluation",
        "Communication Exercises",
        "Conflict Resolution",
        "Goal Setting",
        "Follow-up plan",
      ],
    },
    {
      title: "Individual Therapy",
      price: 3200,
      features: [
        "Joint Evaluation",
        "Communication Exercises",
        "Conflict Resolution",
        "Goal Setting",
        "Follow-up plan",
      ],
    },
    {
      title: "Couple Therapy",
      price: 3200,
      features: [
        "Joint Evaluation",
        "Communication Exercises",
        "Conflict Resolution",
        "Goal Setting",
        "Follow-up plan",
      ],
    },
  ];

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    // Trigger disappearing animation by adding a class
    const floatingDiv = document.getElementById("floating-div");
    floatingDiv.classList.add("slide-up");
    setTimeout(() => {
      setIsVisible(false); // Remove the div from the DOM after animation
    }, 1000); // Match the animation duration
  };

  if (!isVisible) return null;

  return (
    <div style={{ padding: "1.25rem", fontFamily: "Poppins, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <Image
              src="/images/Frame 239.svg"
              alt="Back"
              width={26}
              height= {26}
              style={{ marginRight: "0.5rem" }}
            />
            <h3>Available sessions</h3>
      </div>

      <div
        id="floating-div"
        className="floating-div"
        style={{
          backgroundColor: "#C2E1F9",
          border: "0.125rem solid #0085D0",
          padding: "0.625rem 1.5rem",
          margin: "1.25rem auto",
          marginBottom:"1.5rem",
          borderRadius: "0.875rem",
          display: "flex",
          alignItems: "center",
          width: "22rem",
          position: "relative",
        }}
      >
        <img
          src="/images/ri_information-line.svg"
          alt="Info"
          style={{ width: "1.5rem", marginRight: "8px" }}
        />
        <p style={{ margin: 0, fontSize: "14px" }}>
          Click on the duration to see the pricing details
        </p>
        <button
          style={{
            background: "none",
            border: "none",
            marginLeft: "auto",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={handleClose}
        >
          ✕
        </button>
      </div>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {sessions.map((session, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "10px",
              padding: "20px",
              width: "300px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ margin: "0 0 10px" }}>₹ {session.price} / session</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              {["45 min", "60 min", "90 min"].map((duration) => (
                <button
                  key={duration}
                  style={{
                    backgroundColor:
                      selectedDuration === duration ? "#fff" : "#007BFF",
                    color: selectedDuration === duration ? "#007BFF" : "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedDuration(duration)}
                >
                  {duration}
                </button>
              ))}
            </div>
            <h3 style={{ margin: "20px 0 10px" }}>{session.title}</h3>
            <ul style={{ textAlign: "left", margin: "0 0 20px", padding: "0 15px" }}>
              {session.features.map((feature, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#007BFF",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Proceed
            </button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default AvailSessionDesign;