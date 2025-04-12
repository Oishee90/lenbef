/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone, FaPause, FaTimes } from "react-icons/fa";
import voice from "../../../../assets/english.png";
import { useNavigate } from "react-router-dom";
import speaker from "../../../../assets/speaker.png";
import cross from "../../../../assets/cross.png";
import { useTranslation } from "react-i18next";

const English = () => {
  const [aiReply, setAiReply] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [showConversation, setShowConversation] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleShowConversation = () => {
    stopListening();
    navigate("/dashboard/conversation", {
      state: { conversation }, // 👈 pass conversation history
    });
  };
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const getFakeReply = (userText) => {
    const replies = [
      "That's interesting!",
      "Could you say that again?",
      "Great job speaking!",
      "I love the way you said that!",
      "Let's keep practicing!",
    ];
    const random = replies[Math.floor(Math.random() * replies.length)];
    return `${random}`;
  };

  const speakOut = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (transcript && isListening) {
      const timeout = setTimeout(() => {
        const reply = getFakeReply(transcript);
        setAiReply(reply);
        setConversation((prev) => [...prev, { user: transcript, ai: reply }]);
        speakOut(reply);
        resetTranscript();
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [transcript, isListening, resetTranscript]);

  const startListening = () => {
    resetTranscript();
    setAiReply("");
    setIsListening(true);
    setIsPaused(false);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    setIsListening(false);
    setIsPaused(true);
    SpeechRecognition.stopListening();
    speechSynthesis.cancel();
  };

  const showRotate = isListening;
  const showZoom = !isListening && aiReply;

  if (!browserSupportsSpeechRecognition) {
    return (
      <p className="text-red-500 text-center mt-10">
        Your browser doesn't support speech recognition.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between h-full bg-white text-black py-10">
      <h1 className="text-lg font-semibold text-center mb-6 px-4">
        {t("englishPractice.heading")}
      </h1>

      {/* Speaking Image Animation */}
      <div
        className={`w-40 h-40 mb-6 transition-all duration-300 ${
          showRotate ? "rotate-animation" : showZoom ? "zoom-animation" : ""
        }`}
      >
        <img
          src={voice}
          alt="Speaking animation"
          className="w-full h-full object-cover "
        />
      </div>

      {/* AI Reply Section */}
      <div className="text-center text-gray-700 text-sm mb-6 px-4 min-h-[60px] max-w-sm">
        {aiReply ? (
          <div>
            <p className="roboto text-black text-base">{aiReply}</p>
          </div>
        ) : (
          <p className="text-gray-400"> {t("englishPractice.paragraph")}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        {!isListening ? (
          <div
            onClick={startListening}
            className="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg  transition"
          >
            <img src={speaker} alt="" />
          </div>
        ) : (
          <div
            onClick={stopListening}
            className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition"
          >
            <FaPause />
          </div>
        )}

        {/* Show Conversation Button */}
        <div
          onClick={handleShowConversation}
          className="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 transition"
          title="Show Conversation"
        >
          <img src={cross} alt="" />
        </div>
      </div>

      {/* Show All Conversation History */}
      {showConversation && (
        <div className="mt-8 w-full max-w-md px-4 text-left">
          <h2 className="text-lg font-semibold mb-2 text-center">
            🗨️ Conversation History
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg space-y-3 max-h-96 overflow-y-auto">
            {conversation.map((entry, index) => (
              <div key={index} className="bg-white p-3 rounded shadow">
                <p>
                  <strong>You:</strong> {entry.user}
                </p>
                <p>
                  <strong>AI:</strong> {entry.ai}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default English;
