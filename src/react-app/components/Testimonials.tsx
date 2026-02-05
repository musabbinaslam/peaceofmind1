import { Quote } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

const testimonials = [
  {
    quoteKey: 'testimonials.quote1',
    nameKey: 'testimonials.name1',
    roleKey: 'testimonials.role1',
    gradient: 'from-blue-500 to-indigo-600',
    initials: 'AT',
  },
  {
    quoteKey: 'testimonials.quote2',
    nameKey: 'testimonials.name2',
    roleKey: 'testimonials.role2',
    gradient: 'from-pink-500 to-rose-600',
    initials: 'MS',
  },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative glass-card rounded-3xl p-10 h-full shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-6 -left-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl blur-xl opacity-40`}></div>
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                    <Quote className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 mt-4">
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    {t(testimonial.quoteKey)}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-lg opacity-30`}></div>
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {testimonial.initials}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {t(testimonial.nameKey)}
                      </p>
                      <p className="text-gray-600">
                        {t(testimonial.roleKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
