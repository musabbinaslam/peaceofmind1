import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.phone': '(833) 741-1902',

    // Hero
    'hero.badge': 'Award-Winning Healthcare Protection',
    'hero.headline1': 'Healthcare Coverage',
    'hero.headline2': 'Designed for',
    'hero.headline3': 'Your Life',
    'hero.subtitle': 'Personalized insurance solutions that protect what matters most. Expert guidance, transparent pricing, and coverage that actually works for real families.',
    'hero.formTitle': 'Get Your Free Quote',
    'hero.formSubtitle': '60 seconds to better coverage',
    'hero.zipLabel': 'Your ZIP Code',
    'hero.zipPlaceholder': 'Enter ZIP',
    'hero.cta': 'Find My Coverage',
    'hero.secure': 'Your information is secure and private',
    'hero.testimonial': 'Finally found coverage that treats me like a person, not a policy number. The whole process was refreshingly human.',
    'hero.testimonialName': 'Jordan Martinez',
    'hero.testimonialRole': 'Freelance Designer',

    // Stats
    'stats.saved': 'Average Annual Savings',
    'stats.families': 'Families Protected',
    'stats.rating': 'Customer Satisfaction',
    'stats.response': 'Response Time',

    // Value
    'value.title': 'Insurance Shouldn\'t Feel Like a Puzzle',
    'value.subtitle': 'You deserve straightforward answers and coverage that adapts to your unique situation.',
    'value.point1Title': 'Clear, Honest Pricing',
    'value.point1Desc': 'No hidden fees, no surprise bills. Just transparent costs you can plan around.',
    'value.point2Title': 'Real Human Support',
    'value.point2Desc': 'Talk to licensed professionals who actually listen and care about finding your best fit.',
    'value.point3Title': 'Flexible Plans',
    'value.point3Desc': 'From solo freelancers to growing families—coverage that scales with your life.',
    'value.cta': 'Explore Your Options',

    // Who
    'who.title': 'Built for Modern Life',
    'who.freelancers': 'Independent Professionals',
    'who.freelancersDesc': 'Flexible, affordable plans for consultants, contractors, and the self-employed.',
    'who.startups': 'Small Business Teams',
    'who.startupsDesc': 'Competitive group coverage that doesn\'t compromise on quality or budget.',
    'who.families': 'Growing Families',
    'who.familiesDesc': 'Comprehensive protection for the people who matter most in your world.',

    // Process
    'process.title': 'How It Works',
    'process.step1': 'Share Your Details',
    'process.step1Desc': 'Tell us about yourself—takes less than a minute',
    'process.step2': 'Compare Options',
    'process.step2Desc': 'See personalized plans matched to your needs',
    'process.step3': 'Talk to an Expert',
    'process.step3Desc': 'Get guidance from licensed advisors',
    'process.step4': 'Activate Coverage',
    'process.step4Desc': 'Choose your plan and get protected',

    // Benefits
    'benefits.title': 'Why Thousands Choose Peace of Mind',
    'benefits.network': 'Nationwide Provider Network',
    'benefits.networkDesc': 'Access thousands of doctors and specialists across the country',
    'benefits.savings': 'Transparent Cost Savings',
    'benefits.savingsDesc': 'Clear pricing with no hidden fees or surprise medical bills',
    'benefits.support': '24/7 Member Support',
    'benefits.supportDesc': 'Real people ready to help you anytime, day or night',
    'benefits.digital': 'Modern Digital Experience',
    'benefits.digitalDesc': 'Manage your coverage seamlessly from any device',

    // Testimonials
    'testimonials.title': 'What Our Members Say',
    'testimonials.quote1': 'Lost my corporate job and thought I\'d lost my safety net too. These folks found me coverage I could actually afford within 48 hours. Life-changing.',
    'testimonials.name1': 'Alex Thompson',
    'testimonials.role1': 'Software Engineer',
    'testimonials.quote2': 'As a small bakery owner, every dollar counts. They found me a plan that protects my family without emptying my bank account. Couldn\'t ask for more.',
    'testimonials.name2': 'Maria Santos',
    'testimonials.role2': 'Business Owner',

    // CTA
    'cta.title': 'Ready to Get Protected?',
    'cta.subtitle': 'Join over 50,000 Americans who found better coverage through Peace of Mind.',
    'cta.button': 'Get Your Free Quote',

    // Footer
    'footer.disclaimer': 'Important Legal Disclosure:',
    'footer.disclaimerText': 'This website is not a government agency. Health Coverage Search is a private lead generation service owned and operated by Rising Health Insurance Agency FL LLC. Insurance plans referenced may not meet Affordable Care Act (ACA) requirements and availability varies in all states. By submitting your information, you provide express written consent to be contacted by Rising Health Insurance Agency FL LLC and healthcoveragesearch.com via phone call, text message, or email, including through autodialed, AI, or prerecorded messages, even if your number is on a state or national Do Not Call registry.\n\nYour personal information may be shared with licensed insurance agents or third-party partners for marketing purposes or to contact you via voice call or email only; text messaging originator opt-in data and consent will not be shared with any third parties. Submitting your information constitutes permission for an agent to contact you regarding available health insurance coverage options, which may include Major Medical, Short-Term, Fixed Indemnity, or other insurance products. Plan availability, descriptions, and quotes may vary. By using this site, you agree to the Terms of Service and Privacy Policy.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2026 Health Coverage Search - All rights reserved.',

    // Form Wizard
    'wizard.step1.title': "What's your full name?",
    'wizard.step1.firstName': 'First name',
    'wizard.step1.lastName': 'Last name',
    'wizard.step2.title': "What's your home address?",
    'wizard.step2.address': 'Address',
    'wizard.step2.city': 'City',
    'wizard.step2.state': 'State',
    'wizard.step2.zipCode': 'Zip code',
    'wizard.step3.title': "What's your household income?",
    'wizard.step4.title': 'Do You Consider Yourself:',
    'wizard.step4.healthy': 'Healthy',
    'wizard.step4.relativelyHealthy': 'Relatively Healthy',
    'wizard.step4.notSoHealthy': 'Not So Healthy',
    'wizard.step5.title': "What's your date of birth?",
    'wizard.step6.title': 'Thanks {name}, your quote is ready!',
    'wizard.step6.email': 'Email',
    'wizard.step6.phone': 'Phone number',
    'wizard.step6.consent': 'By clicking "Submit," you agree to our Terms and Conditions and Privacy Policy and consent to receive calls and text messages, including marketing messages, from Rising Health Insurance Agency FL LLC and healthcoveragesearch.com, including via autodialer, AI, or prerecorded messages, at the number you provide—even if your number is on a state or national Do Not Call list. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for help. Only Rising Health Insurance Agency FL LLC and healthcoveragesearch.com may send text messages. Consent is not a condition of purchase.',
    'wizard.next': 'Next',
    'wizard.back': 'Back',
    'wizard.submit': 'Submit',
    'wizard.success.title': 'Form Submitted Successfully!',
    'wizard.success.message': 'An agent will contact you shortly with your personalized quote.',
  },
  es: {
    // Header
    'header.phone': '(833) 741-1902',

    // Hero
    'hero.badge': 'Protección de Salud Galardonada',
    'hero.headline1': 'Cobertura de Salud',
    'hero.headline2': 'Diseñada para',
    'hero.headline3': 'Tu Vida',
    'hero.subtitle': 'Soluciones de seguro personalizadas que protegen lo que más importa. Orientación experta, precios transparentes y cobertura que realmente funciona para familias reales.',
    'hero.formTitle': 'Obtenga Su Cotización Gratis',
    'hero.formSubtitle': '60 segundos para mejor cobertura',
    'hero.zipLabel': 'Su Código Postal',
    'hero.zipPlaceholder': 'Ingrese ZIP',
    'hero.cta': 'Encontrar Mi Cobertura',
    'hero.secure': 'Su información es segura y privada',
    'hero.testimonial': 'Finalmente encontré cobertura que me trata como persona, no como número de póliza. Todo el proceso fue refrescantemente humano.',
    'hero.testimonialName': 'Jordan Martinez',
    'hero.testimonialRole': 'Diseñador Independiente',

    // Stats
    'stats.saved': 'Ahorro Anual Promedio',
    'stats.families': 'Familias Protegidas',
    'stats.rating': 'Satisfacción del Cliente',
    'stats.response': 'Tiempo de Respuesta',

    // Value
    'value.title': 'El Seguro No Debería Ser un Rompecabezas',
    'value.subtitle': 'Mereces respuestas directas y cobertura que se adapte a tu situación única.',
    'value.point1Title': 'Precios Claros y Honestos',
    'value.point1Desc': 'Sin tarifas ocultas, sin facturas sorpresa. Solo costos transparentes que puedes planificar.',
    'value.point2Title': 'Apoyo Humano Real',
    'value.point2Desc': 'Habla con profesionales con licencia que realmente escuchan y se preocupan por encontrar tu mejor opción.',
    'value.point3Title': 'Planes Flexibles',
    'value.point3Desc': 'Desde freelancers solos hasta familias en crecimiento: cobertura que escala con tu vida.',
    'value.cta': 'Explora Tus Opciones',

    // Who
    'who.title': 'Construido para la Vida Moderna',
    'who.freelancers': 'Profesionales Independientes',
    'who.freelancersDesc': 'Planes flexibles y asequibles para consultores, contratistas y trabajadores por cuenta propia.',
    'who.startups': 'Equipos de Pequeñas Empresas',
    'who.startupsDesc': 'Cobertura grupal competitiva que no compromete calidad ni presupuesto.',
    'who.families': 'Familias en Crecimiento',
    'who.familiesDesc': 'Protección integral para las personas que más importan en tu mundo.',

    // Process
    'process.title': 'Cómo Funciona',
    'process.step1': 'Comparte Tus Detalles',
    'process.step1Desc': 'Cuéntanos sobre ti—toma menos de un minuto',
    'process.step2': 'Compara Opciones',
    'process.step2Desc': 'Ve planes personalizados adaptados a tus necesidades',
    'process.step3': 'Habla con un Experto',
    'process.step3Desc': 'Obtén orientación de asesores con licencia',
    'process.step4': 'Activa la Cobertura',
    'process.step4Desc': 'Elige tu plan y obtén protección',

    // Benefits
    'benefits.title': 'Por Qué Miles Eligen Peace of Mind',
    'benefits.network': 'Red Nacional de Proveedores',
    'benefits.networkDesc': 'Acceso a miles de médicos y especialistas en todo el país',
    'benefits.savings': 'Ahorro de Costos Transparente',
    'benefits.savingsDesc': 'Precios claros sin tarifas ocultas ni facturas médicas sorpresa',
    'benefits.support': 'Soporte para Miembros 24/7',
    'benefits.supportDesc': 'Personas reales listas para ayudarte en cualquier momento, día o noche',
    'benefits.digital': 'Experiencia Digital Moderna',
    'benefits.digitalDesc': 'Administra tu cobertura sin problemas desde cualquier dispositivo',

    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Miembros',
    'testimonials.quote1': 'Perdí mi trabajo corporativo y pensé que también había perdido mi red de seguridad. Estas personas me encontraron cobertura que realmente podía pagar en 48 horas. Cambió mi vida.',
    'testimonials.name1': 'Alex Thompson',
    'testimonials.role1': 'Ingeniero de Software',
    'testimonials.quote2': 'Como propietaria de una pequeña panadería, cada dólar cuenta. Me encontraron un plan que protege a mi familia sin vaciar mi cuenta bancaria. No podría pedir más.',
    'testimonials.name2': 'Maria Santos',
    'testimonials.role2': 'Propietaria de Negocio',

    // CTA
    'cta.title': '¿Listo para Obtener Protección?',
    'cta.subtitle': 'Únete a más de 50,000 estadounidenses que encontraron mejor cobertura a través de Peace of Mind.',
    'cta.button': 'Obtenga Su Cotización Gratis',

    // Footer
    'footer.disclaimer': 'Divulgación Legal Importante:',
    'footer.disclaimerText': 'Este sitio web no es una agencia gubernamental. Health Coverage Search es un servicio privado de generación de leads propiedad de y operado por Rising Health Insurance Agency FL LLC. Los planes de seguro mencionados pueden no cumplir con los requisitos de la Ley de Cuidado de Salud a Bajo Precio (ACA) y la disponibilidad varía en todos los estados. Al enviar su información, usted otorga su consentimiento expreso por escrito para ser contactado por Rising Health Insurance Agency FL LLC y healthcoveragesearch.com a través de llamadas telefónicas, mensajes de texto o correo electrónico, incluso mediante mensajes automáticos, de IA o pregrabados, en el número que proporcione, incluso si su número está en un registro estatal o nacional de No Llamar.\n\nSu información personal puede compartirse con agentes de seguros con licencia o socios terceros con fines de marketing o para contactarlo solo a través de llamadas de voz o correo electrónico; los datos de suscripción y el consentimiento del remitente de mensajes de texto no se compartirán con terceros. El envío de su información constituye un permiso para que un agente lo contacte con respecto a las opciones de cobertura de seguro de salud disponibles, que pueden incluir Major Medical, Short-Term, Fixed Indemnity u otros productos de seguro. La disponibilidad del plan, las descripciones y las cotizaciones pueden variar. Al usar este sitio, usted acepta los Términos de Servicio y la Política de Privacidad.',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.copyright': '© 2026 Health Coverage Search - Todos los derechos reservados.',

    // Form Wizard
    'wizard.step1.title': "¿Cuál es su nombre completo?",
    'wizard.step1.firstName': 'Nombre',
    'wizard.step1.lastName': 'Apellido',
    'wizard.step2.title': "¿Cuál es su dirección de casa?",
    'wizard.step2.address': 'Dirección',
    'wizard.step2.city': 'Ciudad',
    'wizard.step2.state': 'Estado',
    'wizard.step2.zipCode': 'Código postal',
    'wizard.step3.title': "¿Cuáles son sus ingresos familiares?",
    'wizard.step4.title': 'Se considera usted:',
    'wizard.step4.healthy': 'Saludable',
    'wizard.step4.relativelyHealthy': 'Relativamente saludable',
    'wizard.step4.notSoHealthy': 'No tan saludable',
    'wizard.step5.title': "¿Cuál es su fecha de nacimiento?",
    'wizard.step6.title': '¡Gracias {name}, su cotización está lista!',
    'wizard.step6.email': 'Correo electrónico',
    'wizard.step6.phone': 'Número de teléfono',
    'wizard.step6.consent': 'Al hacer clic en "Enviar", usted acepta nuestros Términos y Condiciones y nuestra Política de Privacidad y consiente recibir llamadas y mensajes de texto, incluidos mensajes de marketing, de Rising Health Insurance Agency FL LLC y healthcoveragesearch.com, incluso mediante marcador automático, IA o mensajes pregrabados, en el número que proporcione, incluso si su número está en un registro estatal o nacional de No Llamar. La frecuencia de los mensajes puede variar. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar la suscripción o HELP para obtener ayuda. Solo Rising Health Insurance Agency FL LLC y healthcoveragesearch.com pueden enviar mensajes de texto. El consentimiento no es una condición de compra.',
    'wizard.next': 'Siguiente',
    'wizard.back': 'Atrás',
    'wizard.submit': 'Enviar',
    'wizard.success.title': '¡Formulario enviado con éxito!',
    'wizard.success.message': 'Un agente se pondrá en contacto con usted en breve con su cotización personalizada.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
