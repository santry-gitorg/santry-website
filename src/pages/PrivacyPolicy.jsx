import "./PrivacyPolicy.css";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Header from "../components/Header";
import logo from "../assets/logos/santry-logo.png";

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <Header />

      <main className="privacy-content">
        {/* Hero Section */}
        <motion.section
          className="privacy-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="privacy-hero-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Shield size={64} className="privacy-hero-icon" />
            </motion.div>
            <motion.h1
              className="privacy-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Privacy <span className="gradient-text">Policy</span>
            </motion.h1>
            <motion.p
              className="privacy-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Effective Date: November 20, 2025 | Last Updated: November 20, 2025
            </motion.p>
          </div>
        </motion.section>

        {/* Privacy Content Section */}
        <motion.section
          className="privacy-document"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="document-container">
            <motion.div
              className="document-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="privacy-intro">
                <p>
                  <strong>Developer:</strong> Pratik Bhattacharjee ("Service Provider")
                </p>
                <p>
                  <strong>App Name:</strong> Santry
                </p>
                <p>
                  This Privacy Policy explains how Santry ("Application", "App") collects, uses, stores, and protects your information when you use our mobile application on iOS or Android.
                </p>
                <p>
                  <strong>By using Santry, you consent to the practices described in this Policy.</strong>
                </p>
              </div>

              <div className="privacy-section">
                <h2>1. Information We Collect</h2>
                <p>We collect two types of information:</p>
                
                <h3>1.1 User-Provided Information</h3>
                <p>When you create an account or interact with the App, you may provide:</p>
                <ul>
                  <li>Email address</li>
                  <li>Password</li>
                  <li>Name</li>
                  <li>Food and household inventory data (items, expiry dates, quantities)</li>
                  <li>Dietary preferences or restrictions (optional)</li>
                  <li>Receipt images that you upload for scanning</li>
                  <li>Text generated from voice input (we do not upload your audio — only the transcript)</li>
                </ul>
                
                <p><strong>We do not collect:</strong></p>
                <ul>
                  <li>Profile photos</li>
                  <li>Precise or background location data</li>
                  <li>Health condition data</li>
                  <li>Biometric identifiers</li>
                  <li>Raw voice recordings</li>
                </ul>
                
                <h3>1.2 Automatically Collected Information</h3>
                <p>When you use the App, we may automatically collect:</p>
                <ul>
                  <li>Device identifiers</li>
                  <li>Push notification token</li>
                  <li>Operating system and device model</li>
                  <li>IP address</li>
                  <li>App activity (e.g., screens viewed, time spent)</li>
                  <li>Crash logs and diagnostics</li>
                  <li>Aggregated usage analytics</li>
                </ul>
                <p>
                  This helps us maintain app performance, detect bugs, and improve features.
                </p>
              </div>

              <div className="privacy-section">
                <h2>2. How We Use Your Information</h2>
                <p>We use your data for the following purposes:</p>
                
                <h3>2.1 Core App Functionality</h3>
                <ul>
                  <li>Creating and managing your Santry account</li>
                  <li>Storing your household inventory</li>
                  <li>Predicting expiry dates (using internal models)</li>
                  <li>Sending reminders and push notifications</li>
                  <li>Generating nutritional insights</li>
                  <li>Providing recipes and food recommendations</li>
                </ul>
                
                <h3>2.2 Receipt Processing</h3>
                <p>
                  Receipt images uploaded by you are processed on our servers to extract item information.
                </p>
                
                <h3>2.3 AI and Machine Learning</h3>
                <p>
                  To provide Santry's AI-driven features, we may send text or images (such as receipt text or item descriptions) to third-party models:
                </p>
                <ul>
                  <li>OpenAI → text processing (recipes, predictions, suggestions)</li>
                  <li>Google Imagen 3 → image generation</li>
                  <li>Other similar trusted AI service providers in the future</li>
                </ul>
                <p>
                  These providers process your data only to perform the functions requested. They do not train their foundation models on your data.
                </p>
                
                <h3>2.4 Analytics and Improvements</h3>
                <p>We may use aggregated analytics to:</p>
                <ul>
                  <li>Improve app performance</li>
                  <li>Understand user interactions</li>
                  <li>Prioritize new features</li>
                </ul>
                <p>We use:</p>
                <ul>
                  <li>Google Analytics / Firebase Analytics</li>
                  <li>Posthog</li>
                  <li>Firebase Crashlytics</li>
                </ul>
                
                <h3>2.5 Communication</h3>
                <p>We may contact you to:</p>
                <ul>
                  <li>Provide service-related notifications</li>
                  <li>Send product updates or feature announcements</li>
                  <li>Send optional marketing emails (you can opt out anytime)</li>
                </ul>
                <p>
                  We never share your email with advertisers.
                </p>
              </div>

              <div className="privacy-section">
                <h2>3. Third-Party Services</h2>
                <p>Santry uses the following third-party providers, each with their own privacy policies:</p>
                <ul>
                  <li>Firebase Auth</li>
                  <li>Firebase Cloud Messaging</li>
                  <li>Firebase Analytics</li>
                  <li>Firebase Crashlytics</li>
                  <li>RevenueCat (subscription management)</li>
                  <li>OpenAI API</li>
                  <li>Google Imagen 3</li>
                  <li>AWS Cloud (US-East-1) for storage</li>
                  <li>Posthog</li>
                </ul>
                <p>
                  We share only the minimum necessary data with these providers.
                </p>
                <p>
                  <strong>We do not sell, rent, or trade personal information with any advertisers or unrelated third parties.</strong>
                </p>
              </div>

              <div className="privacy-section">
                <h2>4. Data Storage and Security</h2>
                
                <h3>4.1 Where Data Is Stored</h3>
                <p>Your data is stored on trusted cloud providers including:</p>
                <ul>
                  <li>Amazon Web Services (AWS) (currently US-East-1)</li>
                  <li>Other reputable cloud regions if required for performance</li>
                </ul>
                
                <h3>4.2 Security Measures</h3>
                <p>We protect your data using:</p>
                <ul>
                  <li>HTTPS encryption in transit</li>
                  <li>AES-256 encryption at rest (cloud default)</li>
                  <li>Strict access controls</li>
                  <li>Authentication and logging systems</li>
                </ul>
                <p>
                  Only the developer (Pratik Bhattacharjee) has controlled access for debugging and support.
                </p>
              </div>

              <div className="privacy-section">
                <h2>5. Data Retention & Deletion</h2>
                
                <h3>5.1 Retention</h3>
                <p>
                  We retain your data only while your account is active.
                </p>
                
                <h3>5.2 Account Deletion</h3>
                <p>
                  You can request full account deletion inside the app or by emailing <a href="mailto:support@santry.app">support@santry.app</a>.
                </p>
                <p>Upon deletion:</p>
                <ul>
                  <li>All your personal information is deleted</li>
                  <li>All inventory items and receipt images are deleted</li>
                  <li>All cloud-stored data linked to your account is deleted</li>
                  <li>We may retain non-personal, aggregated analytics for service improvement</li>
                </ul>
                <p>
                  <strong>We do not retain data after your account is deleted.</strong>
                </p>
              </div>

              <div className="privacy-section">
                <h2>6. Children's Privacy (Under 13)</h2>
                <p>
                  Santry is intended for individuals aged 13 and above.
                </p>
                <p>
                  We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has created an account, we will delete it promptly.
                </p>
                <p>
                  Parents or guardians may contact us at <a href="mailto:support@santry.app">support@santry.app</a> for removal requests.
                </p>
              </div>

              <div className="privacy-section">
                <h2>7. Your Rights</h2>
                <p>Depending on your region (GDPR, CCPA, etc.), you may have rights including:</p>
                <ul>
                  <li>Access your data</li>
                  <li>Correct your data</li>
                  <li>Delete your data</li>
                  <li>Export your data</li>
                  <li>Withdraw consent for marketing</li>
                  <li>Object to certain processing activities</li>
                </ul>
                <p>
                  To exercise these rights, contact: <a href="mailto:support@santry.app">support@santry.app</a>
                </p>
              </div>

              <div className="privacy-section">
                <h2>8. Global Compliance (GDPR & CCPA)</h2>
                
                <h3>GDPR</h3>
                <p>For users in the European Union:</p>
                <ul>
                  <li>Legal bases for processing may include consent, contractual necessity, and legitimate interest.</li>
                  <li>You may email us to exercise GDPR rights.</li>
                </ul>
                
                <h3>CCPA / CPRA</h3>
                <p>Santry:</p>
                <ul>
                  <li>Does not sell personal data</li>
                  <li>Does not use data for advertising profiling</li>
                  <li>Processes data only for app functionality</li>
                </ul>
                <p>
                  California users may request data deletion or access via email.
                </p>
              </div>

              <div className="privacy-section">
                <h2>9. Data Sharing</h2>
                <p>We may share your data only:</p>
                <ul>
                  <li>With trusted service providers listed in this Policy</li>
                  <li>To comply with legal obligations (e.g., subpoenas, court orders)</li>
                  <li>To protect our rights, safety, and prevent fraud</li>
                  <li>To perform app functions such as AI processing</li>
                </ul>
                <p>
                  <strong>We do not give third parties independent rights to use your information.</strong>
                </p>
              </div>

              <div className="privacy-section">
                <h2>10. Push Notifications</h2>
                <p>Santry uses Firebase Cloud Messaging to send:</p>
                <ul>
                  <li>Expiry reminders</li>
                  <li>Inventory alerts</li>
                  <li>Service updates</li>
                </ul>
                <p>
                  You can disable push notifications through your device settings.
                </p>
              </div>

              <div className="privacy-section">
                <h2>11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy to reflect new features or legal requirements. The updated Policy will always be available at: <a href="https://santry.app/privacy-policy" target="_blank" rel="noopener noreferrer">https://santry.app/privacy-policy</a>
                </p>
                <p>
                  Continued use of the App means you accept the updated terms.
                </p>
              </div>

              <div className="privacy-section">
                <h2>12. Contact Us</h2>
                <p>
                  If you have questions, concerns, or deletion requests, contact:
                </p>
                <p>
                  📧 <a href="mailto:support@santry.app">support@santry.app</a>
                </p>
                <p>
                  👤 Developer: Pratik Bhattacharjee
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Santry Logo" className="footer-logo-image" />
          </div>
          <div className="footer-text">
            <p>
              &copy; 2025 Santry. Reducing food waste, one household at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;

