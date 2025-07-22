import React from 'react';
import { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { COMPANY_INFO } from '../config/constants';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/', { state: { scrollToFooter: true } });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-apple transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-accent-600" />
              <span className="text-title font-semibold text-gray-900 dark:text-white">Privacy Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
          
          <div className="mb-8">
            <h1 className="text-display font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-accent-600" />
              Privacy Policy
            </h1>
            <p className="text-body text-gray-600 dark:text-gray-300">
              <strong>Effective Date:</strong> January 21, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              
              <p className="text-body-large leading-relaxed">
                At <strong className="text-gray-900 dark:text-white">{COMPANY_INFO.name}</strong>, we are committed to protecting your privacy and being transparent about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding your data when you use our services, websites, and applications.
              </p>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
                
                <h3 className="text-title font-semibold text-gray-900 dark:text-white mb-3">Personal Information You Provide</h3>
                <p className="mb-4">We collect information you provide directly to us, including:</p>
                <ul className="space-y-2 ml-6 list-disc mb-6">
                  <li>Contact information such as your name, email address, and phone number</li>
                  <li>Account credentials and profile information</li>
                  <li>Communications you send to us</li>
                  <li>Information you provide when using our AI services</li>
                </ul>
                
                <h3 className="text-title font-semibold text-gray-900 dark:text-white mb-3">Information We Collect Automatically</h3>
                <p className="mb-4">When you use our services, we automatically collect certain information:</p>
                <ul className="space-y-2 ml-6 list-disc mb-6">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, features used)</li>
                  <li>Log information and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="text-title font-semibold text-gray-900 dark:text-white mb-3">Third-Party Integrations</h3>
                <p className="mb-4">For services like our Email Aggregator that integrate with third-party platforms:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Email metadata and content (with your explicit consent)</li>
                  <li>Authentication tokens for service integration</li>
                  <li>Data necessary to provide the requested functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Provide, maintain, and improve our AI services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Develop new products and services</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">3. Information Sharing and Disclosure</h2>
                <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                
                <h3 className="text-title font-semibold text-gray-900 dark:text-white mb-3">Service Providers</h3>
                <p className="mb-4">We may share information with trusted third-party service providers who assist us in operating our services, subject to confidentiality agreements.</p>
                
                <h3 className="text-title font-semibold text-gray-900 dark:text-white mb-3">Legal Requirements</h3>
                <p className="mb-4">We may disclose information when required by law or to protect our rights, property, or safety, or that of our users or others.</p>
                
                <h3 className="text-title font-semibold text-gray-900 dark:text-white mb-3">Business Transfers</h3>
                <p>In connection with any merger, sale of assets, or acquisition, your information may be transferred as part of that transaction.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
                <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p className="mt-4">However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">5. Your Rights and Choices</h2>
                <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong>Objection:</strong> Object to certain processing of your information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us using the information provided below.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">6. Third-Party Services and APIs</h2>
                <p className="mb-4">Our services may integrate with third-party platforms and APIs. When you connect these services:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>We comply with the respective platform's terms and policies</li>
                  <li>We only access data necessary for the functionality you've requested</li>
                  <li>You can revoke access permissions at any time through the third-party platform</li>
                  <li>We adhere to industry standards for API security and data handling</li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">7. Data Retention</h2>
                <p className="mb-4">We retain your personal information for as long as necessary to:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Provide our services to you</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our services and develop new features</li>
                </ul>
                <p className="mt-4">When information is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">8. International Data Transfers</h2>
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">10. Changes to This Privacy Policy</h2>
                <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Post the updated policy on our website</li>
                  <li>Update the "Effective Date" at the top of this policy</li>
                  <li>Notify you of material changes via email or through our services</li>
                  <li>Provide you with the opportunity to review changes before they take effect</li>
                </ul>
                <p className="mt-4">Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
                <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">📧 Email:</p>
                    <div className="ml-6 space-y-1">
                      {COMPANY_INFO.emails.map((email, index) => (
                        <p key={index}>
                          <a href={`mailto:${email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{email}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">🌐 Website:</p>
                    <p className="ml-6">
                      <a href="https://www.agnivah.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.agnivah.com</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">📞 Phone:</p>
                    <div className="ml-6 space-y-1">
                      {COMPANY_INFO.phones.map((phone, index) => (
                        <p key={index}>
                          <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-blue-600 dark:text-blue-400 hover:underline">{phone}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">📍 Address:</p>
                    <p className="ml-6 text-gray-600 dark:text-gray-300">{COMPANY_INFO.address}</p>
                  </div>
                </div>
              </section>

              <div className="mt-12 p-6 bg-accent-50 dark:bg-accent-900/20 rounded-2xl border border-accent-200 dark:border-accent-700">
                <p className="text-accent-800 dark:text-accent-200 font-medium">
                  <strong>Your Privacy Matters:</strong> We are committed to protecting your privacy and handling your data responsibly. If you have any concerns about how we process your information, please don't hesitate to reach out to us.
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;