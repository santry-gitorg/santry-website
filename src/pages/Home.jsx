import "./Home.css";

import {
  Activity,
  BellRing,
  Brain,
  ChefHat,
  Package,
  ShoppingCart,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import appMockup from "../assets/images/AppMockupSplashScreen.png";
import logo from "../assets/logos/santry-logo.png";
import Header from "../components/Header";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        easeOutQuart * (end - startValue) + startValue
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

      // Send email to Google Sheets via Google Apps Script
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      setIsSubmitted(true);
      setIsSubmitting(false);
      setEmail(""); // Clear the email field
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to submit email:", error);
      // Still show success to user even if submission fails
      setIsSubmitted(true);
      setIsSubmitting(false);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  // Smooth scroll handler
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="home">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-tagline"
              >
                Your AI Kitchen Assistant
              </motion.div>
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="gradient-text">Stop Wasting Food.</span>
                <br />
                Start Saving Money.
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Too busy to track groceries? Santry is your intelligent kitchen
                assistant that automatically manages your inventory, suggests
                recipes based on what you love, and ensures nothing goes to
                waste.
              </motion.p>
              <motion.a
                href="#waitlist"
                className="hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Join iOS Waitlist
              </motion.a>
            </motion.div>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                className="app-mockup-container"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={appMockup}
                  alt="Santry App"
                  className="app-mockup-image"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <motion.section
          id="problem"
          className="problem"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Hidden Cost in Your Kitchen
            </motion.h2>
            <motion.p
              className="problem-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              You're busy. Between work, family, and life, who has time to
              manage a kitchen? But without tracking what you have, perfectly
              good food—and your hard-earned money—goes straight to the trash.
            </motion.p>

            <div className="problem-stats-grid">
              <motion.div
                className="problem-stat-large"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="stat-visual">
                  <div className="stat-number-large">
                    $<AnimatedCounter end={2850} duration={2.5} />
                  </div>
                </div>
                <div className="stat-description">
                  Average household food waste per year
                </div>
              </motion.div>

              <div className="problem-facts">
                <motion.div
                  className="problem-fact-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="fact-number">
                    <AnimatedCounter end={119} duration={2} /> billion lbs
                  </div>
                  <div className="fact-text">
                    of food wasted annually in the US alone
                  </div>
                </motion.div>
                <motion.div
                  className="problem-fact-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="fact-number">
                    <AnimatedCounter end={38} duration={1.5} />%
                  </div>
                  <div className="fact-text">
                    of all food produced goes to waste
                  </div>
                </motion.div>
                <motion.div
                  className="problem-fact-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="fact-number">
                    $<AnimatedCounter end={408} duration={2} /> billion
                  </div>
                  <div className="fact-text">
                    total economic cost of food waste in the US
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="problem-narrative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p>
                <strong>You don't have time for complex systems.</strong> That's
                why Santry does the heavy lifting. Snap a photo, speak what you
                bought, or let AI identify it—then relax while Santry tracks
                everything, reminds you before food expires, and suggests
                delicious recipes you'll actually want to make.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          className="how-it-works"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="gradient-text">Zero Effort</span> Tracking
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              No time for manual entry? Choose the method that fits your
              lifestyle—takes seconds, not minutes
            </motion.p>

            <div className="methods-grid">
              {[
                {
                  visual: "receipt-visual",
                  title: "AI Receipt Scan",
                  description:
                    "Just finished shopping? Snap your receipt. Our AI reads it and adds everything instantly. Done in 5 seconds.",
                  inDevelopment: false,
                },
                {
                  visual: "voice-visual",
                  title: "Voice Input",
                  description:
                    "Hands full? Just say what you bought while unpacking. AI transcription handles the rest—completely hands-free.",
                  inDevelopment: false,
                },
                {
                  visual: "ai-visual",
                  title: "Photo Recognition",
                  description:
                    "Snap a quick photo of your groceries. Our AI identifies and catalogs everything automatically. No typing required.",
                  inDevelopment: true,
                },
              ].map((method, index) => (
                <motion.div
                  key={method.title}
                  className="method-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <div className={`method-visual ${method.visual}`}></div>
                  <h3 className="method-title">
                    {method.title}
                    {method.inDevelopment && (
                      <span className="dev-badge">In Development</span>
                    )}
                  </h3>
                  <p className="method-description">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="features"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Kitchen Intelligence That Works For{" "}
              <span className="gradient-text">You</span>
            </motion.h2>

            <div className="features-grid">
              {[
                {
                  bg: "inventory-bg",
                  icon: Package,
                  title: "Smart Inventory",
                  description:
                    "Automatic tracking of everything in your pantry, fridge, and freezer. Always know what you have—no mental gymnastics required.",
                  inDevelopment: false,
                },
                {
                  bg: "expiry-bg",
                  icon: BellRing,
                  title: "AI Expiry Alerts",
                  description:
                    "Get intelligent notifications before food goes bad. Our AI learns your usage patterns to give you perfectly-timed reminders.",
                  inDevelopment: false,
                },
                {
                  bg: "recipe-bg",
                  icon: ChefHat,
                  title: "AI Recipe Matching",
                  description:
                    "Get recipes tailored to what you have AND what you love. AI-powered suggestions that match your taste preferences and dietary needs.",
                  inDevelopment: false,
                },
                {
                  bg: "nutrition-bg",
                  icon: Activity,
                  title: "Nutrition Insights",
                  description:
                    "Eat well without the guesswork. AI analyzes nutrition and provides personalized suggestions that match your health goals.",
                  inDevelopment: false,
                },
                {
                  bg: "ai-bg",
                  icon: Brain,
                  title: "Adaptive Learning",
                  description:
                    "Gets smarter every day. AI learns your eating habits, dietary preferences, and family favorites to serve you better over time.",
                  inDevelopment: true,
                },
                {
                  bg: "shopping-bg",
                  icon: ShoppingCart,
                  title: "Predictive Shopping Lists",
                  description:
                    "Never forget what you need. AI predicts what you'll run out of based on consumption patterns and suggests what you'll actually eat.",
                  inDevelopment: true,
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="feature-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className={`feature-visual-bg ${feature.bg}`}>
                      <div className="feature-icon-container">
                        <IconComponent
                          className="feature-icon"
                          size={48}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">
                        {feature.title}
                        {feature.inDevelopment && (
                          <span className="dev-badge">In Development</span>
                        )}
                      </h3>
                      <p className="feature-description">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          id="mission"
          className="mission"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-container">
            <div className="mission-content">
              <div className="mission-text">
                <motion.h2
                  className="mission-title"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Your Kitchen Assistant, Always Working
                </motion.h2>
                <motion.p
                  className="mission-description"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  You're juggling a lot. Work deadlines, family obligations, a
                  social life you're trying to maintain. Who has time to be a
                  kitchen manager too?
                </motion.p>
                <motion.p
                  className="mission-description"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <strong>That's where Santry comes in.</strong> Think of us as
                  the household help you wish you had—tracking your food,
                  planning meals around your preferences, reminding you before
                  things expire, and making sure you eat well without the mental
                  load.
                </motion.p>
                <motion.p
                  className="mission-description"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  We're here to give busy people back their time and peace of
                  mind. Less waste, better nutrition, zero stress—all happening
                  quietly in the background while you live your life.
                </motion.p>
              </div>
              <motion.div
                className="mission-stats"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  { number: "40%", label: "of food is wasted" },
                  { number: "$1,500", label: "avg. family waste/year" },
                  { number: "Zero", label: "our goal for your waste" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Final CTA / Waitlist Section */}
        <motion.section
          id="waitlist"
          className="final-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-container">
            <motion.h2
              className="cta-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Get Your Kitchen Assistant
            </motion.h2>
            <motion.p
              className="cta-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join the waitlist and be first to experience effortless kitchen
              management when Santry launches on iOS.
            </motion.p>

            {!isSubmitted ? (
              <motion.form
                onSubmit={handleEmailSubmit}
                className="waitlist-form"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  type="submit"
                  className="cta-button-large"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <p>✓ Welcome! We'll notify you when we launch.</p>
              </motion.div>
            )}

            <motion.p
              className="cta-note"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Launching first on iOS • December 2025
            </motion.p>
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
            <div className="footer-links">
              <a href="/terms-and-conditions">Terms and Conditions</a>
              <span className="footer-separator">•</span>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
