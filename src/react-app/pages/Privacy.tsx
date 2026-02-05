import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <Header />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                        <p className="text-gray-500 mb-8">Last updated Feb 3, 2026</p>

                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Thank you for choosing to be part of our community at Rising Health Insurance Agency FL LLC, doing business as Health Coverage Search ("Health Coverage Search", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at contact@healthcoveragesearch.com.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                When you visit our website https://healthcoveragesearch.com (the "Website"), and more generally, use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it.
                            </p>

                            {/* Table of Contents */}
                            <section className="mb-8 p-6 bg-gray-50 rounded-2xl">
                                <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
                                <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
                                    <li>What Information Do We Collect?</li>
                                    <li>How Do We Use Your Information?</li>
                                    <li>Will Your Information Be Shared With Anyone?</li>
                                    <li>Who Will Your Information Be Shared With?</li>
                                    <li>Text Messaging Consent and Data Use</li>
                                    <li>Do We Use Cookies and Other Tracking Technologies?</li>
                                    <li>Do We Use Google Maps Platform APIs?</li>
                                    <li>How Long Do We Keep Your Information?</li>
                                    <li>How Do We Keep Your Information Safe?</li>
                                    <li>Do We Collect Information From Minors?</li>
                                    <li>What Are Your Privacy Rights?</li>
                                    <li>Controls for Do-Not-Track Features</li>
                                    <li>Do California Residents Have Specific Privacy Rights?</li>
                                    <li>Do We Make Updates to This Notice?</li>
                                    <li>How Can You Contact Us About This Notice?</li>
                                </ol>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">1. What Information Do We Collect?</h2>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal information you disclose to us</h3>
                                <p className="text-gray-500 italic mb-4">In Short: We collect personal information that you provide to us.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    <strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses; mailing addresses; contact preferences; utility company; monthly payment; sunlight on the roof; property type; estimated credit score; and other similar information.
                                </p>

                                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Information automatically collected</h3>
                                <p className="text-gray-500 italic mb-4">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Website.
                                </p>
                                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                                    <li><strong>Log and Usage Data:</strong> Service-related, diagnostic, usage and performance information our servers automatically collect.</li>
                                    <li><strong>Device Data:</strong> Information about your computer, phone, tablet or other device you use to access the Website.</li>
                                    <li><strong>Location Data:</strong> Information about your device's location, which can be either precise or imprecise.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">2. How Do We Use Your Information?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect or receive:</p>
                                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                                    <li>To facilitate account creation and logon process</li>
                                    <li>To post testimonials with your consent</li>
                                    <li>Request feedback about your use of our Website</li>
                                    <li>To enable user-to-user communications</li>
                                    <li>To manage user accounts</li>
                                    <li>Fulfill and manage your orders</li>
                                    <li>To deliver and facilitate delivery of services to the user</li>
                                    <li>To respond to user inquiries/offer support to users</li>
                                    <li>To send you marketing and promotional communications</li>
                                    <li>Deliver targeted advertising to you</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">3. Will Your Information Be Shared With Anyone?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">We may process or share your data based on the following legal basis:</p>
                                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                                    <li><strong>Consent:</strong> We may process your data if you have given us specific consent.</li>
                                    <li><strong>Legitimate Interests:</strong> We may process your data when reasonably necessary.</li>
                                    <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you.</li>
                                    <li><strong>Legal Obligations:</strong> We may disclose your information where legally required.</li>
                                    <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Who Will Your Information Be Shared With?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: We only share information with the following third parties.</p>
                                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                                    <li><strong>Advertising, Direct Marketing, and Lead Generation:</strong> Google AdSense, Facebook Audience Network, Outbrain, Google Adwords</li>
                                    <li><strong>Communicate and Chat with Users:</strong> Facebook Customer Chat, Manychat</li>
                                    <li><strong>Data Backup and Security:</strong> Dropbox</li>
                                    <li><strong>Retargeting Platforms:</strong> Facebook Remarketing, Google Ads Remarketing, Google Analytics Remarketing</li>
                                    <li><strong>Social Media Sharing and Advertising:</strong> Facebook advertising</li>
                                    <li><strong>Web and Mobile Analytics:</strong> Facebook Analytics, Google Analytics</li>
                                    <li><strong>Website Hosting:</strong> Cloudways</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">5. Text Messaging Consent and Data Use</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    When you provide your mobile phone number and consent to receive text messages, we collect and use that information solely to communicate with you regarding our services and available health insurance options.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4 font-medium">
                                    All categories of personal information described in this Privacy Policy exclude text messaging originator opt-in data and consent; this information will not be shared, sold, rented, or transferred to any third parties. Only Rising Health Insurance Agency FL LLC and healthcoveragesearch.com may send text messages to individuals who have opted in.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We may share text messaging opt-in data and consent only with our telecommunications service providers (such as Twilio) and mobile network carriers (such as Verizon, AT&T, and T-Mobile) strictly as necessary to deliver text messages or to comply with legal, regulatory, or investigatory requests.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">6. Do We Use Cookies and Other Tracking Technologies?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">7. Do We Use Google Maps Platform APIs?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: Yes, we use Google Maps Platform APIs for the purpose of providing better service.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    This Website uses Google Maps Platform APIs which are subject to Google's Terms of Service.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">8. How Long Do We Keep Your Information?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than twelve (12) months past the start of idle period of the user's account.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">9. How Do We Keep Your Information Safe?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">10. Do We Collect Information From Minors?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We do not knowingly solicit data from or market to children under 18 years of age. By using the Website, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Website.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">11. What Are Your Privacy Rights?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: You may review, change, or terminate your account at any time.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    If you have questions or comments about your privacy rights, you may email us at contact@healthcoveragesearch.com.
                                </p>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Account Information</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account, or contact us using the contact information provided.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    <strong>Opting out of email marketing:</strong> You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">12. Controls for Do-Not-Track Features</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">13. Do California Residents Have Specific Privacy Rights?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes.
                                </p>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">CCPA Privacy Notice</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">Your rights with respect to your personal data:</p>
                                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                                    <li><strong>Right to request deletion of the data:</strong> You can ask for the deletion of your personal information.</li>
                                    <li><strong>Right to be informed:</strong> You have a right to know whether we collect and use your personal information.</li>
                                    <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you if you exercise your privacy rights.</li>
                                </ul>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">14. Do We Make Updates to This Notice?</h2>
                                <p className="text-gray-500 italic mb-4">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">15. How Can You Contact Us About This Notice?</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    If you have questions or comments about this notice, you may email us at contact@healthcoveragesearch.com or by post to:
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Rising Health Insurance Agency FL LLC<br />
                                    Health Coverage Search<br />
                                    United States
                                </p>
                            </section>

                            <section className="mb-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                                <h2 className="text-lg font-bold text-gray-900 mb-4">Important Legal Disclosure</h2>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    This website is not a government agency. Health Coverage Search is a private lead generation service owned and operated by Rising Health Insurance Agency FL LLC. Insurance plans referenced may not meet Affordable Care Act (ACA) requirements and may not be available in all states. By submitting your information, you provide express written consent to be contacted by Rising Health Insurance Agency FL LLC and healthcoveragesearch.com via phone call, text message, or email, including through autodialed, AI, or prerecorded messages, even if your number is on a state or national Do Not Call registry. Message frequency may vary and message and data rates may apply. Only Rising Health Insurance Agency FL LLC and healthcoveragesearch.com may send text messages.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-sm mt-4">
                                    Your personal information may be shared with licensed insurance agents or third-party partners for marketing purposes or to contact you via voice call or email only; text messaging originator opt-in data and consent will not be shared with any third parties. Submitting your information constitutes permission for an agent to contact you regarding available health insurance coverage options, which may include Major Medical, Short-Term, Fixed Indemnity, or other insurance products. Plan availability, descriptions, and quotes may vary. By using this site, you agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
