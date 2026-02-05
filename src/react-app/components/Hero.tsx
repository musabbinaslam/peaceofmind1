import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/react-app/components/ui/button';
import { Input } from '@/react-app/components/ui/input';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import FormWizard from '@/react-app/components/FormWizard';

export default function Hero() {
  const { t } = useLanguage();
  const [zipCode, setZipCode] = useState('');
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      setIsWizardOpen(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Content (hidden on mobile, shown on desktop) */}
          <div className="hidden lg:block space-y-8 animate-in fade-in slide-in-from-left duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('hero.badge')}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-gray-900">{t('hero.headline1')}</span>
                <br />
                <span className="text-gray-600">{t('hero.headline2')}</span>
                <br />
                <span className="text-primary">
                  {t('hero.headline3')}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>

            {/* Testimonial Card */}
            <div className="relative glass-card rounded-3xl p-6 shadow-xl max-w-xl backdrop-blur-xl">
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative">
                <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                  "{t('hero.testimonial')}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-lg font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        JM
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t('hero.testimonialName')}</p>
                    <p className="text-sm text-gray-600">{t('hero.testimonialRole')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Capture Form (shown first on mobile) */}
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {t('hero.formTitle')}
                  </h2>
                  <p className="text-gray-600">
                    {t('hero.formSubtitle')}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('hero.zipLabel')}
                    </label>
                    <Input
                      id="zipCode"
                      type="text"
                      placeholder={t('hero.zipPlaceholder')}
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="h-14 text-lg border-2 focus:border-primary transition-all rounded-xl"
                      maxLength={5}
                      required
                      pattern="[0-9]{5}"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-xl hover:shadow-2xl transition-all duration-200 rounded-xl group"
                  >
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-center text-gray-700 font-medium mb-4">
                    Speak directly with a licensed agent
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/trust-badges.png"
                      alt="Norton Secured and TRUSTe Certified"
                      className="h-12 object-contain"
                    />
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="mt-6 text-[10px] leading-relaxed text-gray-400 text-center">
                  By submitting this form, you agree that <span className="font-semibold text-primary">Health Coverage Search</span> may contact you by phone, text message, or email regarding your request, including through automated technology, even if your number is on a state or national Do Not Call list. Your information may be shared with licensed insurance professionals for contact by <span className="font-semibold">phone call or email only</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
        initialZip={zipCode}
      />
    </section>
  );
}
