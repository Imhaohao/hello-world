import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import GoogleAnalytics from './components/GoogleAnalytics';
import Header from './components/Header';
import CountrySlider from './components/CountrySlider';
import Hero from './components/Hero';
import Donation from './components/Donation';
import FAQ from './components/FAQ';
import Stories from './components/Stories';
import MentorshipWidget from './components/MentorshipWidget';
import Footer from './components/Footer';
import MentorDirectory from './components/MentorDirectory';
import MentorProfile from './components/MentorProfile';
import MentorReviewPage from './components/MentorReviewPage';
import MissionPage from './pages/MissionPage';
import ImpactPage from './pages/ImpactPage';
import ShareStoryPage from './pages/ShareStoryPage';
import MentorResourcesPage from './pages/MentorResourcesPage';
import ContactPage from './pages/ContactPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ImpactReportPage from './pages/ImpactReportPage';
import SignupSuccessPage from './pages/SignupSuccessPage';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import ReviewApproval from './components/ReviewApproval';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <GoogleAnalytics />
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
              <Header />
              <CountrySlider />

              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      
                      {/* Find Mentors Section - Moved to top */}
                      <div id="mentors">
                        <MentorDirectory />
                      </div>

                      <div className="pt-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column: Our Mission */}
                            <div className="space-y-8 order-2 lg:order-1">
                              <div>
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                  Our{" "}
                                  <span className="text-orange-500">
                                    Mission
                                  </span>
                                </h2>
                                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                  <p>
                                    Private college counseling is overpriced and
                                    inaccessible. Why should some students have
                                    an advantage simply because their families
                                    can afford expensive consultants?
                                  </p>
                                  <p>
                                    That's why we created{" "}
                                    <strong>Boundarie</strong> - to provide free
                                    online one-on-one meetings between high
                                    schoolers and college students who have been
                                    through the exact same process.
                                  </p>
                                  <p>
                                    College students have wisdom and first-hand
                                    experience that can make all the difference
                                    in the college application journey.
                                  </p>
                                </div>

                                <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 rounded-r-lg">
                                  <p className="text-orange-800 dark:text-orange-200 font-bold text-lg">
                                    As a 501c(3) non-profit organization,
                                    Boundarie is fully dedicated to making sure
                                    high school students feel more confident and
                                    prepared in the college application process.
                                  </p>
                                </div>
                              </div>

                              {/* Three Feature Blocks */}
                              <div className="grid grid-cols-1 gap-6">
                                <div className="flex items-start space-x-4">
                                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                      className="w-6 h-6 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                                      College Student Mentors
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                      Real mentors who've just been through the
                                      college application process and can share
                                      their firsthand experience.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                      className="w-6 h-6 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                                      One-on-One Sessions
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                      Private, personalized meetings focused on
                                      your specific needs and college
                                      application goals.
                                    </p>
                                  </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg
                                      className="w-6 h-6 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                                      100% Free Service
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                      As a 501c(3) nonprofit, all our services
                                      are completely free with no hidden costs
                                      or fees.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                  href="/mission"
                                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                                >
                                  Learn About Our Mission
                                </a>
                                <a
                                  href="/impact"
                                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center"
                                >
                                  See Our Impact
                                </a>
                              </div>
                            </div>

                            {/* Right Column: Three Simple Steps */}
                            <div id="mentor-section" className="order-1 lg:order-2">
                              <MentorshipWidget />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Stories />
                      
                      {/* Ready to Start Your College Journey? - Moved after Stories */}
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
                        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your College Journey?
                          </h2>
                          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                            Join hundreds of students who have already found
                            their path with Boundarie. Your future starts with
                            one free mentoring session.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                              href="#mentors"
                              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
                            >
                              Find Your Mentor
                            </a>
                            <a
                              href="/mission"
                              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <Stories />
                      
                      {/* Ready to Start Your College Journey? - Moved after Stories */}
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
                        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Start Your College Journey?
                          </h2>
                          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                            Join hundreds of students who have already found
                            their path with Boundarie. Your future starts with
                            one free mentoring session.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                              href="#mentors"
                              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
                            >
                              Find Your Mentor
                            </a>
                            <a
                              href="/mission"
                              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <Donation />
                      <FAQ />
                    </>
                  }
                />
                <Route path="/mission" element={<MissionPage />} />
                <Route path="/impact" element={<ImpactPage />} />
                <Route path="/share-story" element={<ShareStoryPage />} />
                <Route
                  path="/mentor-resources"
                  element={<MentorResourcesPage />}
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route
                  path="/success-stories"
                  element={<SuccessStoriesPage />}
                />
                <Route path="/impact-report" element={<ImpactReportPage />} />
                <Route path="/signup-success" element={<SignupSuccessPage />} />
                <Route path="/mentors" element={<MentorDirectory />} />
                <Route path="/mentor/:id" element={<MentorProfile />} />
                <Route
                  path="/mentor-review/:id"
                  element={<MentorReviewPage />}
                />
                <Route
                  path="/review/:mentorId"
                  element={<MentorReviewPage />}
                />
                <Route
                  path="/admin/reviews"
                  element={<ReviewApproval isAdmin={true} />}
                />
                <Route path="/terms" element={<TermsOfUse />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
