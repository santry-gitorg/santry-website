import "./Terms.css";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Header from "../components/Header";
import logo from "../assets/logos/santry-logo.png";

function Terms() {
  return (
    <div className="terms-page">
      <Header />

      <main className="terms-content">
        {/* Hero Section */}
        <motion.section
          className="terms-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="terms-hero-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FileText size={64} className="terms-hero-icon" />
            </motion.div>
            <motion.h1
              className="terms-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Terms and <span className="gradient-text">Conditions</span>
            </motion.h1>
            <motion.p
              className="terms-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Effective Date: November 20, 2025 | Last Updated: November 20, 2025
            </motion.p>
          </div>
        </motion.section>

        {/* Terms Content Section */}
        <motion.section
          className="terms-document"
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
              <div className="terms-intro">
                <p>
                  <strong>Developer:</strong> Pratik Bhattacharjee ("Service Provider")
                </p>
                <p>
                  <strong>App Name:</strong> Santry
                </p>
                <p>
                  Please read these Terms and Conditions ("Terms", "Terms of Service") carefully before using the Santry mobile application ("Application", "App"). By downloading, accessing, or using Santry in any manner, you agree to be bound by these Terms.
                </p>
                <p>
                  <strong>If you do not agree with any part of the Terms, you may not use the Application.</strong>
                </p>
              </div>

              <div className="terms-section">
                <h2>1. Eligibility</h2>
                <p>
                  Santry is intended for individuals aged 13 and above.
                </p>
                <p>
                  By using the App, you confirm that you are at least 13 years old.
                </p>
              </div>

              <div className="terms-section">
                <h2>2. Use of the Application</h2>
                <h3>2.1 Personal Use Only</h3>
                <p>
                  Santry is provided solely for personal, non-commercial use. You agree not to use the Application for any business activity without prior written permission.
                </p>
                <h3>2.2 Restrictions</h3>
                <p>You agree not to:</p>
                <ul>
                  <li>Reverse engineer, decompile, or attempt to extract the App's source code</li>
                  <li>Copy, modify, distribute, or create derivative works</li>
                  <li>Reproduce or use AI-generated content to build competing products</li>
                  <li>Interfere with the App's performance, servers, or networks</li>
                  <li>Use the Application for any unlawful, harmful, or abusive purpose</li>
                </ul>
                <p>
                  Violation of these rules may result in termination of your account.
                </p>
              </div>

              <div className="terms-section">
                <h2>3. User Accounts</h2>
                <h3>3.1 Account Creation</h3>
                <p>
                  To use certain features, you must create an account using your name, email address, and password. You are responsible for maintaining the confidentiality of your login credentials.
                </p>
                <h3>3.2 Account Security</h3>
                <p>
                  You agree to notify us immediately at <a href="mailto:support@santry.app">support@santry.app</a> if you suspect unauthorized access to your account.
                </p>
              </div>

              <div className="terms-section">
                <h2>4. Subscriptions & Payments</h2>
                <h3>4.1 Subscription Model</h3>
                <p>Santry offers:</p>
                <ul>
                  <li>Monthly subscriptions</li>
                  <li>Yearly subscriptions</li>
                  <li>Optional free trials</li>
                </ul>
                <p>
                  Subscriptions automatically renew unless cancelled at least 24 hours before the end of the billing period.
                </p>
                <h3>4.2 Billing Provider</h3>
                <p>Payments, billing, refunds, free trials, and renewals are handled through:</p>
                <ul>
                  <li>Apple In-App Purchase (for iOS users)</li>
                  <li>Google Play Billing (for Android users)</li>
                  <li>RevenueCat (as a subscription management layer)</li>
                </ul>
                <h3>4.3 Refunds</h3>
                <p>Refunds must be requested directly through:</p>
                <ul>
                  <li>Apple App Store</li>
                  <li>Google Play Store</li>
                </ul>
                <p>
                  Santry does not issue refunds directly.
                </p>
                <h3>4.4 Cancellation</h3>
                <p>You may cancel your subscription at any time through:</p>
                <ul>
                  <li>App Store subscription settings</li>
                  <li>Google Play subscription settings</li>
                </ul>
                <p>
                  Cancelling stops future renewals but does not refund past charges.
                </p>
              </div>

              <div className="terms-section">
                <h2>5. User Content</h2>
                <h3>5.1 Ownership</h3>
                <p>You retain full ownership of:</p>
                <ul>
                  <li>Receipt images</li>
                  <li>Text you input</li>
                  <li>Food inventory data</li>
                  <li>Dietary preferences</li>
                  <li>Any content you upload or submit</li>
                </ul>
                <h3>5.2 License You Grant Us</h3>
                <p>By using the App, you grant us a limited, non-exclusive license to process your content solely for:</p>
                <ul>
                  <li>Extracting receipt items</li>
                  <li>Providing expiry predictions</li>
                  <li>Generating nutritional insights</li>
                  <li>Delivering recipes</li>
                  <li>Improving app performance</li>
                </ul>
                <p>
                  We do not claim ownership of your data.
                </p>
                <h3>5.3 Prohibited Content</h3>
                <p>You agree not to upload or submit:</p>
                <ul>
                  <li>Harmful, illegal, or abusive content</li>
                  <li>Content containing viruses or harmful code</li>
                  <li>Copyrighted materials you do not have rights to</li>
                  <li>Misleading information intended to manipulate AI output</li>
                </ul>
                <p>
                  The Service Provider may remove content that violates these rules.
                </p>
              </div>

              <div className="terms-section">
                <h2>6. Artificial Intelligence & Accuracy Disclaimer</h2>
                <p>Santry uses artificial intelligence for:</p>
                <ul>
                  <li>Expiry predictions</li>
                  <li>Recipe and food suggestions</li>
                  <li>Text processing (OpenAI)</li>
                  <li>Image generation (Google Imagen)</li>
                </ul>
                <p><strong>Important Notice:</strong></p>
                <p>
                  The Service Provider does not guarantee the accuracy, completeness, or reliability of:
                </p>
                <ul>
                  <li>AI-generated expiry predictions</li>
                  <li>Nutritional insights</li>
                  <li>Recipes or recommendations</li>
                  <li>Any AI-generated content in the App</li>
                </ul>
                <p>
                  These outputs may be imprecise, incomplete, or incorrect.
                </p>
                <p>The App is not intended for:</p>
                <ul>
                  <li>Medical, nutritional, or dietary decision-making</li>
                  <li>Safety-critical or health-related scenarios</li>
                </ul>
                <p>
                  <strong>All decisions regarding consumption or purchase of food remain solely your responsibility.</strong>
                </p>
              </div>

              <div className="terms-section">
                <h2>7. Data & Privacy</h2>
                <p>
                  Your use of the App is also governed by the Santry Privacy Policy, available at:{" "}
                  <a href="https://santry.app/privacy-policy" target="_blank" rel="noopener noreferrer">https://santry.app/privacy-policy</a>
                </p>
                <p>
                  By using the Application, you consent to our data practices as described in that Policy.
                </p>
              </div>

              <div className="terms-section">
                <h2>8. Suspension & Termination</h2>
                <p>We may suspend or terminate your account, without notice, if:</p>
                <ul>
                  <li>You violate these Terms</li>
                  <li>You engage in fraudulent or abusive behavior</li>
                  <li>You interfere with App functionality</li>
                  <li>Required payments fail or recur as unpaid</li>
                  <li>Your activities pose legal or security risks</li>
                </ul>
                <p>
                  You may stop using the App at any time by deleting your account or uninstalling the Application.
                </p>
              </div>

              <div className="terms-section">
                <h2>9. Intellectual Property</h2>
                <p>
                  All trademarks, logos, app designs, branding, software code, models, and UI/UX assets used in Santry are the exclusive property of the Service Provider.
                </p>
                <p>You are not permitted to:</p>
                <ul>
                  <li>Copy</li>
                  <li>Reproduce</li>
                  <li>Modify</li>
                  <li>Distribute</li>
                  <li>Sell</li>
                </ul>
                <p>
                  any part of the Application without written consent.
                </p>
              </div>

              <div className="terms-section">
                <h2>10. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted under applicable law:
                </p>
                <p>
                  The Application is provided "AS IS", without warranties of any kind.
                </p>
                <p>The Service Provider is not liable for:</p>
                <ul>
                  <li>Data loss</li>
                  <li>Inaccurate predictions</li>
                  <li>Incorrect nutritional information</li>
                  <li>Food spoilage</li>
                  <li>Financial loss</li>
                  <li>Damages arising from reliance on AI-generated content</li>
                  <li>Service interruptions, bugs, or outages</li>
                  <li>Loss resulting from unauthorized account access</li>
                </ul>
                <p>
                  <strong>You agree that your use of the App is entirely at your own risk.</strong>
                </p>
              </div>

              <div className="terms-section">
                <h2>11. Updates & Modifications</h2>
                <p>The Service Provider may update or modify:</p>
                <ul>
                  <li>Features</li>
                  <li>Plans</li>
                  <li>Pricing</li>
                  <li>Subscriptions</li>
                  <li>Terms & Conditions</li>
                </ul>
                <p>
                  Updates will be posted on <a href="https://santry.app/terms-and-conditions" target="_blank" rel="noopener noreferrer">https://santry.app/terms-and-conditions</a>.
                </p>
                <p>
                  Continued use of the App after updates indicates acceptance of the new Terms.
                </p>
              </div>

              <div className="terms-section">
                <h2>12. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the <strong>Hong Kong Special Administrative Region (HKSAR)</strong>, without regard to conflict of law principles.
                </p>
                <p>
                  Any disputes shall be resolved exclusively in the courts of Hong Kong SAR.
                </p>
              </div>

              <div className="terms-section">
                <h2>13. Contact Information</h2>
                <p>
                  For questions about these Terms, please contact:
                </p>
                <p>
                  📧 <a href="mailto:support@santry.app">support@santry.app</a>
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

export default Terms;

