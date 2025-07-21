import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../config/constants';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-apple transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-accent-600" />
              <span className="text-title font-semibold text-gray-900 dark:text-white">Terms of Service</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
          
          <div className="mb-8">
            <h1 className="text-display font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="w-8 h-8 mr-3 text-accent-600" />
              Terms of Service
            </h1>
            <p className="text-body text-gray-600 dark:text-gray-300">
              <strong>Effective Date:</strong> January 21, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              
              <p className="text-body-large leading-relaxed">
                Welcome to <strong className="text-gray-900 dark:text-white">{COMPANY_INFO.name}</strong>. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
                <p className="mb-4">By accessing and using Agnivah's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Use License</h2>
                <p className="mb-4">Permission is granted to temporarily access Agnivah's services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on our services</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="mt-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Agnivah at any time.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h2>
                <p className="mb-4">The materials on Agnivah's services are provided on an 'as is' basis. Agnivah makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                <p>Further, Agnivah does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Limitations</h2>
                <p>In no event shall Agnivah or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Agnivah's services, even if Agnivah or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h2>
                <p className="mb-4">Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>
                <p>By using our services, you agree to the collection and use of information in accordance with our <Link to="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">User Accounts</h2>
                <p className="mb-4">When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.</p>
                <p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Prohibited Uses</h2>
                <p className="mb-4">You may not use our services:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Intellectual Property Rights</h2>
                <p className="mb-4">The service and its original content, features, and functionality are and will remain the exclusive property of Agnivah and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Termination</h2>
                <p className="mb-4">We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                <p>If you wish to terminate your account, you may simply discontinue using the service.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Governing Law</h2>
                <p>These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
                <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</p>
                <p className="italic">By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms.</p>
              </section>

              <section>
                <h2 className="text-headline font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
                <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl space-y-2">
                  <p className="mb-2">
                    📧 <strong>Email:</strong>
                  </p>
                  <div className="ml-6 space-y-1">
                    {COMPANY_INFO.emails.map((email, index) => (
                      <p key={index}>
                        <a href={`mailto:${email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{email}</a>
                      </p>
                    ))}
                  </div>
                  <p className="mt-4">
                    📞 <strong>Phone:</strong>
                  </p>
                  <div className="ml-6 space-y-1">
                    {COMPANY_INFO.phones.map((phone, index) => (
                      <p key={index}>
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-blue-600 dark:text-blue-400 hover:underline">{phone}</a>
                      </p>
                    ))}
                  </div>
                  <p className="mt-4">
                    🌐 <strong>Website:</strong> <a href="https://www.agnivah.com" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.agnivah.com</a>
                  </p>
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
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;