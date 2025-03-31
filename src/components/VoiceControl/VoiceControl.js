import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VoiceControl = () => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
      handleCommand(command);
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  const handleCommand = (command) => {
    if (command.includes("experience")) {
      navigate("/experience"); // Navigate to Experience page
    } else if (command.includes("skills")) {
      navigate("/skills"); // Navigate to Skills page
      speakText("Your skills are React, Node.js, MongoDB, Express, and more.");
    } else if (command.includes("projects")) {
      navigate("/projects"); // Navigate to Projects page
    } else if (command.includes("contact")) {
      navigate("/contact"); // Navigate to Contact page
    }
    else if (command.includes("about")) {
      navigate("/about"); // Navigate to About page
    }
    else if (command.includes("resume")) {
      window.open("https://drive.google.com/file/d/1LkuLexbsGdQw4PkqEqyyGf1rq74V3Emc/view?usp=sharing", "_blank");
    }
    else if (command.includes("linkedin")) {
      window.open("https://www.linkedin.com/in/pradhumna-sawalkar-08265a257/", "_blank");
    }
    else if (command.includes("github")) {
      window.open("https://github.com/pradhumnaDsawalkar?tab=repositories", "_blank");
    }
    else if(command.includes("home")){
      navigate("/");
    }
  };

  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return null; // No UI needed
};

export default VoiceControl;
