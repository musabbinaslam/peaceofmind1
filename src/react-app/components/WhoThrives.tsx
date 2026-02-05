import { Laptop, Building2, Heart } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

const audiences = [
  {
    icon: Laptop,
    titleKey: 'who.freelancers',
    descKey: 'who.freelancersDesc',
    gradient: 'from-purple-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
  },
  {
    icon: Building2,
    titleKey: 'who.startups',
    descKey: 'who.startupsDesc',
    gradient: 'from-blue-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
  },
  {
    icon: Heart,
    titleKey: 'who.families',
    descKey: 'who.familiesDesc',
    gradient: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
  },
];

export default function WhoThrives() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('who.title')}
          </h2>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={audience.image}
                    alt={t(audience.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} rounded-xl blur-lg opacity-50`}></div>
                    <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center shadow-lg`}>
                      <audience.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {t(audience.titleKey)}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {t(audience.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
