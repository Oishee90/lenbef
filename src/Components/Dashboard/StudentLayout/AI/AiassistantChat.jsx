/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import back from "../../../../assets/back.png";
import voice from "../../../../assets/voiceStart.png";
import link from "../../../../assets/link.png";
import up from "../../../../assets/right.png";
import speaker from "../../../../assets/speaker.png";
import Popular from "../../../../assets/Popular.png";
import RichTextDisplay from "./RichTextDisplay/RichTextDisplay";
import { FaMicrophone } from "react-icons/fa";

const AiassistantChat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { grade, subject } = location.state || {};

  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [messages, setMessages] = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messageContainerRef = useRef(null);
  const [isVoicePopupOpen, setIsVoicePopupOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");

  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.continuous = true;
      recognition.interimResults = true;

      let finalTranscript = "";

      recognition.onresult = (event) => {
        let interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + " ";
          } else {
            interimTranscript += transcript;
          }
        }

        // Show combined (final + interim) in UI
        setRecognizedText(finalTranscript + interimTranscript);
      };

      recognition.onend = () => {
        if (isListening) {
          recognition.start(); // auto-restart if still listening
        }
      };

      recognitionRef.current = recognition;
    }
  }, [isListening]);
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const startVoiceRecognition = () => {
    setRecognizedText("");
    setIsVoicePopupOpen(true);
  };

  const handleTapToSpeak = () => {
    if (recognitionRef.current) {
      setRecognizedText("");
      setIsListening(true);
      recognitionRef.current.start();
    }
  };
  const handleTapToStop = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      console.log("Stopped listening");
    }
  };

  const handleAddRecognizedText = () => {
    setMessage(recognizedText.trim());
    setIsVoicePopupOpen(false);
    setIsListening(false);
    setRecognizedText(""); // এখানে clear করে দাও
  };

  const handleClosePopup = () => {
    setIsVoicePopupOpen(false);
    setIsListening(false);
    setRecognizedText(""); // এটা দরকার
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };
  const handleBack1 = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleLinkClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
      } else {
        setImagePreview("");
      }
    }
  };

  const handleSend = () => {
    if (message.trim() === "" && !selectedFile) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
      file: selectedFile,
      filePreview: imagePreview,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setSelectedFile(null);
    setImagePreview("");

    setIsBotTyping(true);
    setTimeout(() => {
      setIsBotTyping(false);

      let botReply = "";
      if (message.toLowerCase().includes("hello")) {
        botReply = "Hi there! How can I help you today?";
      } else if (message.toLowerCase().includes("what is photosynthesis")) {
        botReply = `Photosynthesis is a process used by plants to convert light energy into chemical energy. 🌱`;
      } else {
        botReply = "I'm still learning. Could you please ask something else?";
      }

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: botReply,
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full flex flex-col justify-between px-4 h-full py-4 overflow-hidden roboto">
      <div
        ref={messageContainerRef}
        className="flex-1 overflow-y-auto mt-4 mb-2 space-y-3"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`px-3 py-2 rounded-lg w-fit max-w-[80%] ${
              msg.sender === "user" ? " self-end ml-auto" : " self-start"
            }`}
          >
            <div className="flex flex-col gap-2">
              {msg.filePreview && (
                <img
                  src={msg.filePreview}
                  alt="sent"
                  className="mt-2 max-h-48 rounded-lg border"
                />
              )}
              {!msg.filePreview && msg.file && (
                <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-2 w-full max-w-md">
                  <div className="bg-pink-500 p-2 rounded text-white mr-2 text-sm">
                    📄
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{msg.file.name}</p>
                    <p className="text-xs text-gray-500">Document</p>
                  </div>
                </div>
              )}
              {msg.text && (
                <div className="flex items-center gap-2 p-2 rounded-lg">
                  {msg.sender === "bot" && (
                    <img
                      src={Popular}
                      alt="Bot Logo"
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div
                    className={`flex flex-1 items-start gap-2 p-2 rounded-full  roboto font-normal  ${
                      msg.sender === "user"
                        ? "bg-[#317828] self-end ml-auto text-white"
                        : "text-black  self-start"
                    }`}
                  >
                    <RichTextDisplay content={msg.text} />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isBotTyping && (
          <div className="px-3 py-2 rounded-lg w-fit self-start animate-pulse flex items-center gap-2">
            <img
              src={Popular}
              alt="Bot Logo"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 rounded-full animate-pulse bg-gray-700 dark:bg-gray-700"></div>
              <div className="w-2 h-2 rounded-full animate-pulse bg-gray-700 dark:bg-gray-700"></div>
              <div className="w-2 h-2 rounded-full animate-pulse bg-gray-700 dark:bg-gray-700"></div>
            </div>
          </div>
        )}
      </div>

      <div className="border rounded-xl px-4 py-2 shadow w-full">
        {selectedFile && (
          <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-2 w-full max-w-md">
            <div className="bg-pink-500 p-2 rounded text-white mr-2 text-sm">
              📄
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">Document</p>
            </div>
            <button
              onClick={() => {
                setSelectedFile(null);
                setImagePreview("");
              }}
              className="text-gray-400 hover:text-gray-600 text-sm"
            >
              ✕
            </button>
          </div>
        )}

        {imagePreview && (
          <div className="mb-2">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-xs max-h-60 rounded-lg border"
            />
          </div>
        )}

        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={handleLinkClick}>
            <img src={link} alt="link" />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 outline-none bg-transparent text-sm"
            placeholder="Ask me anything"
          />

          {(message.trim() !== "" || selectedFile) && (
            <div className="cursor-pointer" onClick={handleSend}>
              <img src={up} alt="send" />
            </div>
          )}

          <div className="cursor-pointer" onClick={startVoiceRecognition}>
            <img src={voice} alt="voice" />
          </div>
        </div>
      </div>

      {isVoicePopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/3 py-10  relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-400"
            >
              ✕
            </button>

            {!isListening && recognizedText === "" && (
              <>
                <div className="w-full ">
                  <h2 className=" text-3xl font-bold mb-4 ">Voice Input</h2>
                  <p className="text-gray-600 mb-4 ">
                    Click the microphone to start speaking
                  </p>
                  <div
                    className="flex flex-col  font-bold justify-center items-center mt-9"
                    onClick={handleTapToSpeak}
                  >
                    <button className="text-black px-4 py-7 rounded">
                      <img src={speaker} alt="mic" className="" />
                      <span className="mt-7"> </span>
                    </button>
                  </div>
                  <h1 className=" text-black flex justify-center items-center">
                    Tap to Speak
                  </h1>
                  <div className="flex justify-center items-center mt-9">
                    <button className="text-white px-4 py-2 rounded-lg bg-[#D8D8D8]">
                      Add
                    </button>
                  </div>
                </div>
              </>
            )}

            {isListening && (
              <>
                <div className="w-full">
                  <h2 className="text-3xl font-bold mb-4">Listening...</h2>
                  <p className="text-gray-600 mb-4">
                    Speak now. We'll stop if you pause.
                  </p>

                  <div className="flex flex-col font-bold justify-center items-center mt-9">
                    <button className="text-black px-4 py-7 rounded relative">
                      {/* The pulsing circle */}
                      <div className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping"></div>

                      {/* The mic icon */}
                      <img src={speaker} alt="mic" className="relative " />
                    </button>
                  </div>

                  <div className="flex justify-center items-center mt-[5.5rem]">
                    <button
                      onClick={handleTapToStop}
                      className="text-white px-4 py-2 rounded-lg bg-[#e23636]"
                    >
                      Stop Listening
                    </button>
                  </div>
                </div>
              </>
            )}

            {!isListening && recognizedText !== "" && (
              <>
                <h2 className="text-lg font-bold mb-2">Recognized Text</h2>
                <p className="text-sm text-gray-700 mb-4">{recognizedText}</p>
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={handleAddRecognizedText}
                >
                  <button className="bg-gradient-to-r from-[#317828] to-[#5BDE4A] hover:bg-[#2d7224] text-white px-4 py-2 rounded-lg">
                    Add to Chat
                  </button>
                  <button
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={handleClosePopup}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiassistantChat;
