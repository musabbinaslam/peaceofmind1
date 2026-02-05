import { useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/react-app/components/ui/button';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import FormWizard from '@/react-app/components/FormWizard';

export default function FinalCTA() {
  const { t } = useLanguage();
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 animated-gradient"></div>

        {/* Overlay effects */}
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.3))]"></div>
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10 animate-in fade-in slide-in-from-bottom duration-700">
            {/* Icon */}
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm shadow-2xl border border-white/30">
                <Heart className="w-12 h-12 text-white fill-white" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t('cta.title')}
            </h2>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {t('cta.subtitle')}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                onClick={() => setIsWizardOpen(true)}
                className="h-16 px-12 text-xl font-bold bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-200 rounded-2xl group"
              >
                {t('cta.button')}
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <div className="text-white/90 font-medium">
                ✓ No hidden fees
              </div>
              <div className="text-white/90 font-medium">
                ✓ Licensed advisors
              </div>
              <div className="text-white/90 font-medium">
                ✓ Free consultation
              </div>
            </div>
          </div>
        </div>
      </section>
      <FormWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        initialZip=""
      />
    </>
  );
}
