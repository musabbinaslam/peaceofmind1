import { DollarSign, Users, Star, Clock } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

const stats = [
  {
    icon: DollarSign,
    value: '$2,847',
    labelKey: 'stats.saved',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: Users,
    value: '50K+',
    labelKey: 'stats.families',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: Star,
    value: '4.9/5',
    labelKey: 'stats.rating',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: Clock,
    value: '<2min',
    labelKey: 'stats.response',
    color: 'from-orange-400 to-orange-600',
  },
];

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
