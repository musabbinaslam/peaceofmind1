import { Heart } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo and Branding */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-md opacity-50"></div>
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg">
                <Heart className="w-7 h-7 text-white fill-white" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Health Coverage Search
              </div>
              <div className="text-xs text-gray-500">Healthcare Lead Generation</div>
            </div>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Making healthcare coverage accessible, affordable, and actually understandable for everyone.
          </p>
        </div>

        {/* Legal Disclosure */}
        <div className="space-y-6 mb-12 p-8 bg-gray-800/50 rounded-2xl border border-gray-700/50">
          <p className="text-sm font-semibold text-white">
            {t('footer.disclaimer')}
          </p>
          <div className="text-xs leading-relaxed text-gray-400 whitespace-pre-line">
            {t('footer.disclaimerText')}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8">
            <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
