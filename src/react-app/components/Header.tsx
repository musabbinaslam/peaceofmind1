import { Heart, Phone, Globe } from 'lucide-react';
import { Button } from '@/react-app/components/ui/button';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-sm opacity-50"></div>
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg">
                <Heart className="w-7 h-7 text-white fill-white" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Health Coverage Search
              </div>
              <div className="text-xs text-muted-foreground">Healthcare Lead Generation</div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="gap-2 hidden sm:flex"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === 'en' ? 'ES' : 'EN'}</span>
            </Button>

            {/* Call Button */}
            <a href="tel:+18664191828">
              <Button className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white shadow-lg">
                <Phone className="w-4 h-4" />
                <span className="font-semibold hidden sm:inline">(866) 419-1828</span>
                <span className="font-semibold sm:hidden">Call Now</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
