import { FileCheck, ScanSearch, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

const steps = [
  {
    icon: FileCheck,
    titleKey: 'process.step1',
    descKey: 'process.step1Desc',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    icon: ScanSearch,
    titleKey: 'process.step2',
    descKey: 'process.step2Desc',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    icon: MessageCircle,
    titleKey: 'process.step3',
    descKey: 'process.step3Desc',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    icon: CheckCircle2,
    titleKey: 'process.step4',
    descKey: 'process.step4Desc',
    gradient: 'from-orange-400 to-orange-600',
  },
];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('process.title')}
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent -translate-x-4 z-0"></div>
                )}

                <div className="relative text-center">
                  {/* Number Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 shadow-sm z-10">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
