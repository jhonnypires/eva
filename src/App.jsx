import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles, Clock, Download, FolderOpen, Shield,
    Flower2, Type, Hash, PawPrint, Smile, Church,
    TreePine, Egg, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight
} from 'lucide-react';
import { cn } from './lib/utils';

function App() {
    const [showNotification, setShowNotification] = useState(false);
    const [showUpsellModal, setShowUpsellModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Categories */}
            <CategoriesSection />

            {/* Benefits */}
            <BenefitsSection />

            {/* Pricing Plans */}
            <PricingSection onBasicPlanClick={() => setShowUpsellModal(true)} />

            {/* What's Included */}
            <WhatsIncludedSection />

            {/* Guarantee */}
            <GuaranteeSection />

            {/* Floating Notification */}
            {showNotification && <FloatingNotification />}

            {/* Upsell Modal */}
            {showUpsellModal && (
                <UpsellModal onClose={() => setShowUpsellModal(false)} />
            )}
        </div>
    );
}

// Hero Section Component
function HeroSection() {
    const carouselImages = [
        { url: 'https://moldeseva.shop/assets/moldes-letras-TYfCpokg.jpeg', alt: 'Moldes de Letras' },
        { url: 'https://moldeseva.shop/assets/moldes-numeros-Cw-juLcQ.jpeg', alt: 'Moldes de Números' },
        { url: 'https://moldeseva.shop/assets/moldes-animais-V6Oluh2Q.jpeg', alt: 'Moldes de Animais' },
        { url: 'https://moldeseva.shop/assets/moldes-flores-CuUDxYwA.jpeg', alt: 'Moldes de Flores' },
        { url: 'https://moldeseva.shop/assets/moldes-biblicos-CZ7xwUcJ.jpeg', alt: 'Moldes Bíblicos' },
    ];

    // Get current date formatted as DD/MM/YYYY
    const getCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <section className="relative overflow-hidden">
            {/* Top Urgency Bar */}
            <div className="bg-[#F5A3C7] py-3 text-center">
                <motion.p
                    className="text-white font-bold text-sm md:text-base flex items-center justify-center gap-2"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    ✨ Oferta Válida Somente Hoje ({getCurrentDate()}) ✨
                </motion.p>
            </div>

            <div className="container-custom py-12 md:py-20">
                {/* Headline */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 leading-tight max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Kit Profissional com{' '}
                    <span className="text-solution">+2.000 Moldes de EVA</span>{' '}
                    para Professores
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center mb-8 md:mb-10 max-w-3xl mx-auto px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Tudo pronto para o ano letivo, sem perder tempo criando ou procurando moldes.
                </motion.p>

                {/* Video Player */}
                <motion.div
                    className="max-w-4xl mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="relative pb-[56.25%] bg-gray-900">
                        <iframe
                            src="https://fast.wistia.net/embed/iframe/hl6uxohwoe"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            title="Moldes de EVA - Vídeo de Apresentação"
                        />
                    </div>
                </motion.div>

                {/* Social Proof */}
                <motion.p
                    className="text-center text-pain font-semibold mb-8 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    🔥 156 professores visualizando agora
                </motion.p>

                {/* Carousel */}
                <div className="mb-8">
                    <AutoCarousel images={carouselImages} />
                </div>

                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <Badge icon={<CheckCircle2 />} text="Acesso imediato" />
                    <Badge icon={<Shield />} text="Garantia de 7 dias" />
                    <Badge icon={<CheckCircle2 />} text="Pagamento único" />
                </div>
            </div>
        </section>
    );
}

// Testimonials Section
function TestimonialsSection() {
    const testimonials = [
        { url: 'https://moldeseva.shop/assets/depoimento-whatsapp-1-CqNtEb8L.jpeg', alt: 'Depoimento 1' },
        { url: 'https://moldeseva.shop/assets/depoimento-whatsapp-2-cRJNlXFd.jpeg', alt: 'Depoimento 2' },
        { url: 'https://moldeseva.shop/assets/depoimento-whatsapp-3-CB5FaWW7.jpeg', alt: 'Depoimento 3' },
        { url: 'https://moldeseva.shop/assets/depoimento-whatsapp-4-BFE4enO0.jpeg', alt: 'Depoimento 4' },
        { url: 'https://moldeseva.shop/assets/depoimento-whatsapp-5--VbFSgvf.jpeg', alt: 'Depoimento 5' },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <h2 className="section-title">Quem já usa, recomenda</h2>

                <AutoCarousel images={testimonials} isTestimonial={true} />
            </div>
        </section>
    );
}

// Categories Section
function CategoriesSection() {
    const categories = [
        { icon: Flower2, name: 'Flores', color: 'text-pink-500' },
        { icon: Type, name: 'Letras', color: 'text-blue-500' },
        { icon: Hash, name: 'Números', color: 'text-purple-500' },
        { icon: PawPrint, name: 'Animais', color: 'text-green-500' },
        { icon: Smile, name: 'Personagens', color: 'text-yellow-500' },
        { icon: Church, name: 'Temas Bíblicos', color: 'text-indigo-500' },
        { icon: TreePine, name: 'Natal', color: 'text-red-500' },
        { icon: Egg, name: 'Páscoa', color: 'text-orange-500' },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container-custom">
                <h2 className="section-title">Moldes para Todas as Ocasiões</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="card text-center hover:border-2 hover:border-solution cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <category.icon className={cn("w-12 h-12 mx-auto mb-3", category.color)} />
                            <h3 className="font-semibold text-lg">{category.name}</h3>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-xl text-gray-600 font-medium">
                    🎨 E muitos outros temas prontos para imprimir
                </p>
            </div>
        </section>
    );
}

// Benefits Section
function BenefitsSection() {
    const benefits = [
        {
            icon: Clock,
            title: '⏱ Economia de Tempo',
            description: 'Pare de perder horas buscando moldes soltos na internet.',
            color: 'text-pain',
        },
        {
            icon: Download,
            title: '⬇ Acesso Imediato',
            description: 'Receba tudo assim que o pagamento for confirmado.',
            color: 'text-solution',
        },
        {
            icon: FolderOpen,
            title: '🗂 Organização Completa',
            description: 'Moldes separados por categorias e temas.',
            color: 'text-solution',
        },
        {
            icon: Shield,
            title: '🛡 Garantia de 7 Dias',
            description: 'Ou você gosta, ou devolvemos 100% do seu dinheiro.',
            color: 'text-success',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <h2 className="section-title">Por que este kit é ideal para professores?</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="card text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <benefit.icon className={cn("w-16 h-16 mx-auto mb-4", benefit.color)} />
                            <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Pricing Section
function PricingSection({ onBasicPlanClick }) {
    return (
        <section id="plans" className="py-16 md:py-24 bg-slate-50">
            <div className="container-custom">
                <h2 className="section-title">Escolha a melhor opção para você</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Basic Plan */}
                    <motion.div
                        className="card border-2 border-gray-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Plano Básico</h3>

                        <div className="mb-6">
                            <p className="text-gray-500 line-through text-lg">De R$ 97,00</p>
                            <p className="text-4xl font-bold text-gray-900 mb-2">
                                Por apenas <span className="text-solution">R$ 10,00</span>
                            </p>
                            <p className="text-success font-semibold text-lg">💰 Economia de R$ 87,00</p>
                        </div>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span>+2.000 Moldes de EVA</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span>Acesso vitalício</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                <span>Garantia de 7 dias</span>
                            </li>
                        </ul>

                        <button
                            id="1492c3fa-28fd-2c8b-8bc7-f2953b83afcf"
                            className="btn-outline w-full"
                            onClick={onBasicPlanClick}
                        >
                            👉 Escolher Plano Básico
                        </button>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                        className="card border-4 border-solution relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solution text-white px-6 py-2 rounded-full font-bold text-sm">
                            Mais Popular
                        </div>

                        <h3 className="text-2xl font-bold mb-4 mt-2">Plano Premium</h3>

                        <div className="mb-6">
                            <p className="text-gray-500 line-through text-lg">De R$ 197,00</p>
                            <p className="text-4xl font-bold text-gray-900 mb-2">
                                Por apenas <span className="text-solution">R$ 29,90</span>
                            </p>
                            <p className="text-success font-semibold text-lg">💰 Economia de R$ 167,00</p>
                            <p className="text-gray-600 text-sm mt-2">👩🏫 +1.736 professores já escolheram</p>
                        </div>

                        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-4 mb-6">
                            <p className="font-bold text-solution mb-3">🎁 Bônus Exclusivos:</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                    <span>Kit Volta às Aulas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                    <span>Kit Carnaval</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                    <span>Kit Páscoa</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                    <span>Kit Festa Junina</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                    <span>Kit Copa do Mundo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                    <span>Kit Folclore</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                    <span>Minicurso de EVA</span>
                                </li>
                            </ul>
                        </div>

                        <motion.button
                            id="a1e466d7-951f-d4b5-2f8c-90d2c9ca5dbe"
                            className="btn-primary w-full"
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🔥 Escolher Plano Premium
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// What's Included Section
function WhatsIncludedSection() {
    const items = [
        'Flores e Plantas',
        'Alfabeto Completo',
        'Números de 0 a 9',
        'Animais Diversos',
        'Frutas e Vegetais',
        'Personagens Infantis',
        'Temas Bíblicos',
        'Decorações de Natal',
        'Decorações de Páscoa',
        'Formas Geométricas',
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <h2 className="section-title">Veja tudo o que você vai receber</h2>

                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
                            <span className="font-medium text-lg">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Guarantee Section
function GuaranteeSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-violet-50 to-purple-50">
            <div className="container-custom">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <ShieldCheck className="w-24 h-24 text-success mx-auto mb-6" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Compra 100% Sem Risco
                    </h2>

                    <p className="text-xl text-gray-700 mb-8">
                        Teste o kit por 7 dias. Se não for útil para você, devolvemos todo o valor, sem perguntas.
                    </p>

                    <motion.button
                        id="0228aeb8-bc81-d4f1-6681-ff65b53ba0ab"
                        className="btn-primary text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🎨 Quero Acessar Meus Moldes Agora
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

// Upsell Modal Component
function UpsellModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
                className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {/* Header with Violet Gradient */}
                <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#9333EA] pt-10 pb-6 px-6 text-center">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                        aria-label="Fechar"
                    >
                        <span className="text-white text-lg font-bold">×</span>
                    </button>

                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                        <Sparkles className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        🔥 ESPERE! Super Desconto<br />Exclusivo! 🔥
                    </h2>
                </div>

                {/* Content */}
                <div className="p-5">
                    <p className="text-center text-gray-700 font-semibold mb-5 text-sm">
                        Antes de finalizar, que tal aproveitar uma oferta <span className="text-[#7C3AED] font-bold">IMPERDÍVEL?</span>
                    </p>

                    {/* Pricing Box */}
                    <div className="border-2 border-[#7C3AED] rounded-xl p-5 mb-5">
                        <p className="text-center text-gray-700 font-semibold mb-2 text-sm">
                            Plano Premium por apenas:
                        </p>

                        <div className="text-center mb-3">
                            <p className="text-gray-400 line-through text-base">R$ 197,00</p>
                            <p className="text-5xl font-bold text-pink-500 mb-1">
                                R$ 19,90
                            </p>
                        </div>

                        <p className="text-center text-xs text-gray-600 leading-relaxed">
                            Economize R$ 177,00 e receba <span className="font-bold">TUDO</span> do plano Premium + 2 Bônus Exclusivos + Minicurso Completo
                        </p>
                    </div>

                    {/* Urgency Badge */}
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <span className="text-yellow-600">⚡</span>
                        <p className="text-xs font-bold text-gray-700">
                            Desconto válido SOMENTE Hoje!
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        {/* Accept Button - Premium Plan */}
                        <a
                            href="https://www.ggcheckout.com/checkout/v2/hweeM8sRHUvPUmFZOGLL"
                            className="block w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold py-3.5 px-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm text-center"
                        >
                            🎁 SIM! Quero o Premium por R$ 19,90
                        </a>

                        {/* Decline Button - Basic Plan */}
                        <a
                            href="https://www.ggcheckout.com/checkout/v2/on0PFkzVhQsqehC3E0q4"
                            className="block w-full text-gray-600 hover:text-gray-800 font-medium py-2 transition-all text-xs border border-gray-300 rounded-full hover:border-gray-400 text-center"
                        >
                            Não, prefiro o Plano Básico
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// Floating Notification
function FloatingNotification() {
    const notifications = [
        { name: 'Maria S.', city: 'Belo Horizonte', plan: 'Plano Básico' },
        { name: 'Ana Paula R.', city: 'São Paulo', plan: 'Plano Premium' },
        { name: 'Juliana M.', city: 'Rio de Janeiro', plan: 'Plano Premium' },
        { name: 'Carla F.', city: 'Curitiba', plan: 'Plano Básico' },
        { name: 'Fernanda L.', city: 'Porto Alegre', plan: 'Plano Premium' },
        { name: 'Patricia S.', city: 'Brasília', plan: 'Plano Básico' },
    ];

    const [currentNotification, setCurrentNotification] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNotification((prev) => (prev + 1) % notifications.length);
        }, 5000); // Change notification every 5 seconds

        return () => clearInterval(interval);
    }, [notifications.length]);

    const notification = notifications[currentNotification];

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentNotification}
                className="fixed bottom-4 left-4 bg-white rounded-lg shadow-2xl p-3 max-w-xs z-50 border-2 border-success"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs mb-0.5">Compra realizada! 🎉</p>
                        <p className="text-xs text-gray-600 leading-tight">
                            {notification.name} de {notification.city} acabou de adquirir o {notification.plan}
                        </p>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

// Auto Carousel Component
function AutoCarousel({ images, isTestimonial = false }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [images.length, isPaused]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carousel Container */}
            <div className={cn(
                "relative overflow-hidden",
                isTestimonial && "rounded-2xl"
            )}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                            "w-full",
                            isTestimonial ? "bg-white shadow-2xl rounded-2xl overflow-hidden h-[500px] md:h-[600px]" : "h-96 md:h-[500px]"
                        )}
                    >
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].alt}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                    aria-label="Anterior"
                >
                    <ChevronLeft className="w-6 h-6 text-solution" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                    aria-label="Próximo"
                >
                    <ChevronRight className="w-6 h-6 text-solution" />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "transition-all duration-300 rounded-full",
                            currentIndex === index
                                ? "w-8 h-3 bg-solution"
                                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                        )}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="text-center mt-3 text-sm text-gray-600 font-medium">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}

// Badge Component
function Badge({ icon, text }) {
    return (
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-success">{icon}</span>
            <span className="font-semibold text-sm md:text-base">{text}</span>
        </div>
    );
}

export default App;
