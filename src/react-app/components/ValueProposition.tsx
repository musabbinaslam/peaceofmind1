import { DollarSign, Users2, Workflow, ArrowRight } from 'lucide-react';
import { Button } from '@/react-app/components/ui/button';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

const points = [
  {
    icon: DollarSign,
    titleKey: 'value.point1Title',
    descKey: 'value.point1Desc',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    icon: Users2,
    titleKey: 'value.point2Title',
    descKey: 'value.point2Desc',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    icon: Workflow,
    titleKey: 'value.point3Title',
    descKey: 'value.point3Desc',
    gradient: 'from-orange-400 to-orange-600',
  },
];

export default function ValueProposition() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('value.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('value.subtitle')}
            </p>
          </div>

          {/* Value Points */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {points.map((point, index) => (
              <div
                key={index}
                className="relative group animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative glass-card rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-300">
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${point.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <point.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t(point.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(point.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <Button
              size="lg"
              className="h-14 px-10 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl rounded-2xl group"
            >
              {t('value.cta')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
