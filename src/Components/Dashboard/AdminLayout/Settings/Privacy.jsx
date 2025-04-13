import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { GrUpdate } from "react-icons/gr";
import { IoSave } from "react-icons/io5";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const [content, setContent] = useState(`
         <h3>Welcome to [Your App Name] <span> By accessing or using our AI voice cloning platform, you agree to the following terms and conditions.</span></h3>
       
       
         <h4>1. Account & Eligibility</h4>
         <ul>
           <li>Users must be at least [age] years old to create an account.</li>
           <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
           <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
         </ul>
       <br>
         <h4>2. Subscription & Payments</h4>
         <ul>
           <li>Some features require a paid subscription. Fees are billed according to the selected plan.</li>
           <li>Payments are non-refundable unless otherwise stated in our refund policy.</li>
           <li>You can cancel your subscription anytime from the Manage Subscription section.</li>
         </ul>
       
         <h4>3. AI Voice Cloning & Usage</h4>
         <ul>
           <li>Users may upload voice samples for AI training and customization.</li>
           <li>You must have legal rights to any voice or content you upload.</li>
           <li>Generated voices cannot be used for illegal, harmful, or deceptive activities.</li>
         </ul>
       
         <h4>4. Data Privacy & Security</h4>
         <ul>
           <li>We collect and process data in accordance with our Privacy Policy.</li>
           <li>Your voice data is stored securely and may be used to improve AI performance.</li>
           <li>We do not sell user data to third parties.</li>
         </ul>
       
         <h4>5. Prohibited Activities</h4>
         <ul>
           <li>Users must not use the platform for impersonation, fraud, or deceptive practices.</li>
           <li>Violate any laws or third-party rights.</li>
           <li>Attempt to manipulate or misuse the AI system.</li>
         </ul>
       
         <h4>6. Service Availability & Modifications</h4>
         <ul>
           <li>We may update, modify, or discontinue any feature of the platform at any time.</li>
           <li>We are not liable for service disruptions, technical issues, or data loss.</li>
         </ul>
       
         <h4>7. Limitation of Liability</h4>
         <ul>
           <li>We do not guarantee the accuracy or reliability of AI-generated voices.</li>
           <li>We are not responsible for any misuse of generated content.</li>
           <li>Our liability is limited to the extent permitted by law.</li>
         </ul>
       
         <h4>8. Changes to Terms</h4>
         <p>We may update these terms periodically. Continued use of the platform after updates means you accept the changes.</p>
       
         <h4>9. Contact Us</h4>
         `);
  const editor = useRef(null);

  const config = {
    toolbar: {
      items: [
        "bold",
        "italic",
        "underline",

        "align",
        "left",
        "center",
        "right",
      ],
    },
    buttons: ["bold", "italic", "underline", "left", "center", "right"],
    events: {
      // Focus the editor when content is updated to fix cursor movement issues
      afterChange: () => {
        if (editor.current && editor.current.editor) {
          editor.current.editor.focus();
        }
      },
    },
    // Add these specific list editing options
    list: {
      // Allow indenting lists with Tab key
      allowInsertWithTab: true,
      // Fix list alignment issues
      navigateListWithTab: true,
    },
    // Enhance the editor's ability to handle lists
    enterBlock: "p",
    // Improve content editing capabilities
    editorCssClass: "custom-jodit-editor",
  };

  // Add custom CSS to fix lists

  // Fetch content from the API
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const accessToken = localStorage.getItem("accessToken");

  //       if (!accessToken) {
  //         console.error("No access token found!");
  //         return;
  //       }
  //       try {
  //         const response = await fetch(
  //           "http://192.168.10.198:5005/api/policy/privacy",
  //           {
  //             method: "GET",
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `Bearer ${accessToken}`,
  //             },
  //           }
  //         );

  //         const data = await response.json();

  //         if (data.success && data.policy) {
  //           setContent(data.policy.content);
  //           console.log(data.policy.content);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching privacy policy:", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  //   const handleUpdate = async () => {
  //     const accessToken = localStorage.getItem("accessToken");

  //     if (!accessToken) {
  //       console.error("No access token found!");
  //       return;
  //     }
  //     try {
  //       const response = await fetch(
  //         "http://192.168.10.198:5005/api/policy/privacy",
  //         {
  //           method: "PUT",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //           body: JSON.stringify({
  //             content: content,
  //           }),
  //         }
  //       );

  //       const data = await response.json();
  //       if (data.success) {
  //         alert("Privacy policy updated successfully!");
  //       } else {
  //         alert("Failed to update privacy policy.");
  //       }
  //     } catch (error) {
  //       console.error("Error updating privacy policy:", error);
  //     }
  //   };

  useEffect(() => {
    if (editor.current && editor.current.editor) {
      editor.current.editor.focus();
    }
  }, [content]);
  const handleUpdate = () => {
    Swal.fire({
      title: "Success!",
      text: "Privacy policy updated successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  const { t } = useTranslation();
  return (
    <div className="h-full">
      <div className="w-full p-6">
        <div className="rounded-md p-4 jodi text-[#555555] montserrat  jodi">
          <JoditEditor
            ref={editor}
            value={content}
            onblur={(newContent) => setContent(newContent)}
            config={{
              ...config,
              autofocus: true,
            }}
          />
        </div>
        <div className="flex justify-end items-center gap-2 p-4">
          <div onClick={handleUpdate} className="cursor-pointer">
            <button className="px-3 py-2 flex items-center gap-3 poppins font-medium rounded-xl bg-[#317828] text-white cursor-pointer">
              <GrUpdate />   {t("adminPannel.Update")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
