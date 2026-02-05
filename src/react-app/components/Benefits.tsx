import { useLanguage } from '@/react-app/contexts/LanguageContext';

const benefits = [
  {
    image: 'https://019c2963-0a75-7550-8856-3d80292486dd.mochausercontent.com/network.png',
    titleKey: 'benefits.network',
    descKey: 'benefits.networkDesc',
  },
  {
    image: 'https://019c2963-0a75-7550-8856-3d80292486dd.mochausercontent.com/savings.png',
    titleKey: 'benefits.savings',
    descKey: 'benefits.savingsDesc',
  },
  {
    image: 'https://019c2963-0a75-7550-8856-3d80292486dd.mochausercontent.com/support.png',
    titleKey: 'benefits.support',
    descKey: 'benefits.supportDesc',
  },
  {
    image: 'https://019c2963-0a75-7550-8856-3d80292486dd.mochausercontent.com/digital.png',
    titleKey: 'benefits.digital',
    descKey: 'benefits.digitalDesc',
  },
];

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience healthcare coverage that puts you first
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src={benefit.image}
                    alt={t(benefit.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Orange accent overlay */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl z-20">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(benefit.descKey)}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-3xl transition-colors pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
