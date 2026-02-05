import { useState, useEffect } from 'react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import {
    Dialog,
    DialogContent,
} from '@/react-app/components/ui/dialog';
import { Button } from '@/react-app/components/ui/button';
import { Input } from '@/react-app/components/ui/input';
import { Checkbox } from '@/react-app/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/react-app/components/ui/select';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface FormWizardProps {
    isOpen: boolean;
    onClose: () => void;
    initialZip: string;
}

export default function FormWizard({ isOpen, onClose, initialZip }: FormWizardProps) {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: initialZip,
        householdIncome: '',
        healthStatus: '',
        dateOfBirth: {
            mm: '',
            dd: '',
            yyyy: '',
        },
        email: '',
        phone: '',
        consentGiven: false,
    });

    useEffect(() => {
        if (initialZip) {
            setFormData((prev: any) => ({ ...prev, zipCode: initialZip }));
        }
    }, [initialZip]);

    const totalSteps = 6;
    const progress = (step / totalSteps) * 100;

    const handleNext = () => setStep((prev: number) => Math.min(prev + 1, totalSteps));
    const handleBack = () => setStep((prev: number) => Math.max(prev - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Demo mode: simulate submission delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Demo form data:', formData);
        setIsSuccess(true);
        setIsSubmitting(false);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-900">{t('wizard.step1.title')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">{t('wizard.step1.firstName')}</label>
                                <Input
                                    className="h-14 rounded-xl border-gray-200 focus:border-primary"
                                    value={formData.firstName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, firstName: e.target.value })}
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">{t('wizard.step1.lastName')}</label>
                                <Input
                                    className="h-14 rounded-xl border-gray-200 focus:border-primary"
                                    value={formData.lastName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, lastName: e.target.value })}
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-900">{t('wizard.step2.title')}</h2>
                        <div className="grid gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">{t('wizard.step2.address')}</label>
                                <Input
                                    className="h-14 rounded-xl border-gray-200 focus:border-primary"
                                    value={formData.address}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, address: e.target.value })}
                                    placeholder="123 Main St"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">{t('wizard.step2.city')}</label>
                                    <Input
                                        className="h-14 rounded-xl border-gray-200 focus:border-primary"
                                        value={formData.city}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            // Only allow letters, spaces, hyphens (for cities like "New York")
                                            const val = e.target.value.replace(/[^a-zA-Z\s\-']/g, '');
                                            setFormData({ ...formData, city: val });
                                        }}
                                        placeholder="e.g. Los Angeles"
                                        required
                                    />
                                    <p className="text-[10px] text-gray-400">US cities only</p>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">{t('wizard.step2.state')}</label>
                                    <Select
                                        value={formData.state}
                                        onValueChange={(val: string) => setFormData({ ...formData, state: val })}
                                    >
                                        <SelectTrigger className="h-14 w-full rounded-xl border-gray-200">
                                            <SelectValue placeholder="State" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].map(s => (
                                                <SelectItem key={s} value={s}>{s}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">{t('wizard.step2.zipCode')}</label>
                                <Input
                                    className="h-14 rounded-xl border-gray-200 focus:border-primary"
                                    value={formData.zipCode}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, zipCode: e.target.value })}
                                    maxLength={5}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-900">{t('wizard.step3.title')}</h2>
                        <Select
                            value={formData.householdIncome}
                            onValueChange={(val: string) => setFormData({ ...formData, householdIncome: val })}
                        >
                            <SelectTrigger className="h-14 w-full rounded-xl border-gray-200">
                                <SelectValue placeholder="Select income range" />
                            </SelectTrigger>
                            <SelectContent>
                                {['$0 - $14,999', '$15,000 - $24,999', '$25,000 - $34,999', '$35,000 - $44,999', '$45,000 - $54,999', '$55,000 - $74,999', '$75,000+'].map(range => (
                                    <SelectItem key={range} value={range}>{range}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-900">{t('wizard.step4.title')}</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {[
                                { key: 'healthy', value: 'Healthy' },
                                { key: 'relativelyHealthy', value: 'Relatively Healthy' },
                                { key: 'notSoHealthy', value: 'Not So Healthy' }
                            ].map(status => (
                                <Button
                                    key={status.key}
                                    variant={formData.healthStatus === status.value ? 'default' : 'outline'}
                                    className={`h-16 text-lg justify-between px-6 rounded-2xl border-2 transition-all ${formData.healthStatus === status.value
                                        ? 'border-primary bg-primary/5 text-primary'
                                        : 'border-gray-100 hover:border-primary/50 text-gray-700'
                                        }`}
                                    onClick={() => {
                                        setFormData({ ...formData, healthStatus: status.value });
                                    }}
                                >
                                    {t(`wizard.step4.${status.key}`)}
                                    {formData.healthStatus === status.value && <CheckCircle2 className="w-5 h-5" />}
                                </Button>
                            ))}
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-900">{t('wizard.step5.title')}</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Input
                                    placeholder="MM"
                                    maxLength={2}
                                    value={formData.dateOfBirth.mm}
                                    onChange={e => {
                                        const val = e.target.value.replace(/\D/g, '');
                                        const num = parseInt(val);
                                        if (val === '' || (num >= 0 && num <= 12)) {
                                            setFormData({
                                                ...formData,
                                                dateOfBirth: { ...formData.dateOfBirth, mm: val }
                                            });
                                        }
                                    }}
                                    className="text-center h-14 rounded-xl text-lg border-gray-200"
                                />
                                <p className="text-xs text-center text-gray-400">Month</p>
                            </div>
                            <div className="space-y-2">
                                <Input
                                    placeholder="DD"
                                    maxLength={2}
                                    value={formData.dateOfBirth.dd}
                                    onChange={e => {
                                        const val = e.target.value.replace(/\D/g, '');
                                        const num = parseInt(val);
                                        if (val === '' || (num >= 0 && num <= 31)) {
                                            setFormData({
                                                ...formData,
                                                dateOfBirth: { ...formData.dateOfBirth, dd: val }
                                            });
                                        }
                                    }}
                                    className="text-center h-14 rounded-xl text-lg border-gray-200"
                                />
                                <p className="text-xs text-center text-gray-400">Day</p>
                            </div>
                            <div className="space-y-2">
                                <Input
                                    placeholder="YYYY"
                                    maxLength={4}
                                    value={formData.dateOfBirth.yyyy}
                                    onChange={e => {
                                        const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                                        setFormData({
                                            ...formData,
                                            dateOfBirth: { ...formData.dateOfBirth, yyyy: val }
                                        });
                                    }}
                                    className="text-center h-14 rounded-xl text-lg border-gray-200"
                                />
                                <p className="text-xs text-center text-gray-400">Year</p>
                            </div>
                        </div>
                        {formData.dateOfBirth.mm && formData.dateOfBirth.dd && formData.dateOfBirth.yyyy && (
                            (() => {
                                const m = parseInt(formData.dateOfBirth.mm);
                                const d = parseInt(formData.dateOfBirth.dd);
                                const y = parseInt(formData.dateOfBirth.yyyy);
                                const currentYear = new Date().getFullYear();
                                if (m < 1 || m > 12) return <p className="text-xs text-red-500 text-center">Month must be 1-12</p>;
                                if (d < 1 || d > 31) return <p className="text-xs text-red-500 text-center">Day must be 1-31</p>;
                                if (y < 1900 || y > currentYear) return <p className="text-xs text-red-500 text-center">Enter a valid year</p>;
                                return null;
                            })()
                        )}
                    </div>
                );
            case 6:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-center text-gray-900">
                            {t('wizard.step6.title').replace('{name}', formData.firstName || 'there')}
                        </h2>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">{t('wizard.step6.email')}</label>
                                <Input
                                    type="email"
                                    className="h-14 rounded-xl border-gray-200"
                                    value={formData.email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">{t('wizard.step6.phone')}</label>
                                <Input
                                    type="tel"
                                    className="h-14 rounded-xl border-gray-200"
                                    value={formData.phone}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        // Format as US phone: (XXX) XXX-XXXX
                                        const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
                                        let formatted = '';
                                        if (digits.length > 0) {
                                            formatted = '(' + digits.slice(0, 3);
                                            if (digits.length >= 3) {
                                                formatted += ') ' + digits.slice(3, 6);
                                            }
                                            if (digits.length >= 6) {
                                                formatted += '-' + digits.slice(6, 10);
                                            }
                                        }
                                        setFormData({ ...formData, phone: formatted });
                                    }}
                                    placeholder="(555) 555-5555"
                                    pattern="\(\d{3}\) \d{3}-\d{4}"
                                    required
                                />
                                {formData.phone && formData.phone.replace(/\D/g, '').length < 10 && (
                                    <p className="text-xs text-amber-600">Please enter a valid 10-digit US phone number</p>
                                )}
                            </div>
                            <div className="flex gap-3 items-start pt-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <Checkbox
                                    id="consent"
                                    className="mt-1"
                                    checked={formData.consentGiven}
                                    onCheckedChange={(checked: boolean) => setFormData({ ...formData, consentGiven: !!checked })}
                                    required
                                />
                                <label htmlFor="consent" className="text-[10px] leading-[1.4] text-gray-500 font-medium">
                                    {t('wizard.step6.consent')}
                                </label>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    if (isSuccess) {
        return (
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-md text-center py-16 rounded-[2.5rem]">
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
                            <CheckCircle2 className="w-12 h-12 text-green-500" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('wizard.success.title')}</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{t('wizard.success.message')}</p>
                    <Button onClick={onClose} size="lg" className="w-full h-16 text-lg font-bold rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600">
                        Done
                    </Button>
                </DialogContent>
            </Dialog>
        );
    }

    const isStepValid = () => {
        switch (step) {
            case 1: return formData.firstName.length > 0 && formData.lastName.length > 0;
            case 2: return formData.address.length > 0 && formData.city.length > 0 && formData.state.length > 0 && formData.zipCode.length === 5;
            case 3: return formData.householdIncome.length > 0;
            case 4: return formData.healthStatus.length > 0;
            case 5: return formData.dateOfBirth.mm.length === 2 && formData.dateOfBirth.dd.length === 2 && formData.dateOfBirth.yyyy.length === 4;
            case 6: return formData.email.length > 0 && formData.phone.length >= 10 && formData.consentGiven;
            default: return false;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-xl p-0 overflow-hidden rounded-[2.5rem] border-none shadow-3xl bg-white">
                <div className="p-8 sm:p-12">
                    {/* Header & Progress */}
                    <div className="mb-10 space-y-4">
                        <div className="flex items-center justify-between text-sm font-bold tracking-tight uppercase text-gray-400">
                            <span>Step {step} of {totalSteps}</span>
                            <span className="text-primary">{Math.round(progress)}% complete</span>
                        </div>
                        <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="min-h-[340px] flex flex-col justify-center">
                        {renderStep()}
                    </div>

                    {/* Footer Navigation */}
                    <div className="mt-12 flex gap-4 pt-8 border-t border-gray-50">
                        {step > 1 && (
                            <Button
                                variant="outline"
                                onClick={handleBack}
                                className="h-16 px-8 rounded-2xl border-2 border-gray-100 hover:border-gray-200 text-gray-600 font-bold"
                                disabled={isSubmitting}
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                {t('wizard.back')}
                            </Button>
                        )}

                        {step < totalSteps ? (
                            <Button
                                onClick={handleNext}
                                disabled={!isStepValid()}
                                className="h-16 flex-1 text-lg font-bold rounded-2xl bg-gray-900 hover:bg-gray-800 text-white shadow-xl disabled:opacity-50"
                            >
                                {t('wizard.next')}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                disabled={!isStepValid() || isSubmitting}
                                className="h-16 flex-1 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary to-accent text-white shadow-2xl hover:opacity-95 transition-opacity disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : t('wizard.submit')}
                                {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
