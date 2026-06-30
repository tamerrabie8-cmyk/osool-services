import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Building2, FileText, Users, Award, 
  ChevronRight, CheckCircle, ArrowRight, Phone, Mail, MapPin 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const OsoolWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const navItems = [
    { id: 'home', label: 'الرئيسية', en: 'Home' },
    { id: 'about', label: 'عن أصول', en: 'About' },
    { id: 'services', label: 'خدماتنا', en: 'Services' },
    { id: 'projects', label: 'مشاريعنا', en: 'Projects' },
    { id: 'testimonials', label: 'آراء العملاء', en: 'Testimonials' },
    { id: 'contact', label: 'اتصل بنا', en: 'Contact' }
  ];

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "التراخيص والتصاريح الحكومية",
      desc: "تسهيل إجراءات الحصول على جميع التراخيص الحكومية والتصاريح التجارية والصناعية بأسرع الطرق",
      color: "from-amber-400 to-yellow-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "الاستشارات القانونية والتنظيمية",
      desc: "استشارات قانونية متخصصة في القوانين السعودية واللوائح الحكومية والامتثال التنظيمي",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "الاستشارات الإدارية والاستراتيجية",
      desc: "تطوير استراتيجيات الأعمال، إعادة هيكلة الشركات، وتحسين العمليات التشغيلية",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "خدمات التأشيرات والإقامة",
      desc: "معالجة طلبات التأشيرات، الإقامات، والعمل للأفراد والشركات بكفاءة عالية",
      color: "from-amber-400 to-yellow-500"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "الاستثمار والتطوير العقاري",
      desc: "استشارات استثمارية متكاملة وخدمات التطوير العقاري والمشاريع الضخمة",
      color: "from-yellow-400 to-amber-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "الامتثال والرقابة",
      desc: "ضمان الامتثال لجميع المتطلبات الحكومية والدولية مع خدمات التدقيق الدوري",
      color: "from-amber-500 to-yellow-600"
    }
  ];

  const stats = [
    { number: "15", label: "سنوات خبرة", suffix: "+" },
    { number: "520", label: "مشروع مكتمل", suffix: "+" },
    { number: "185", label: "عميل سعيد", suffix: "+" },
    { number: "24", label: "جائزة تميز", suffix: "" }
  ];

  const projects = [
    { 
      title: "مشروع تطوير المنطقة الاقتصادية الخاصة",
      category: "تطوير عقاري",
      image: "https://picsum.photos/id/1015/600/400",
      status: "مكتمل"
    },
    { 
      title: "ترخيص مصنع الطاقة المتجددة",
      category: "صناعي",
      image: "https://picsum.photos/id/106/600/400",
      status: "مكتمل"
    },
    { 
      title: "برنامج التحول الرقمي لجهة حكومية",
      category: "استشارات",
      image: "https://picsum.photos/id/201/600/400",
      status: "جاري"
    }
  ];

  const testimonials = [
    {
      name: "د. أحمد العتيبي",
      position: "الرئيس التنفيذي - شركة النخبة",
      text: "أصول ساعدتنا في الحصول على 12 ترخيص حكومي خلال 45 يوماً فقط. خدمتهم الاحترافية وعلاقاتهم القوية مع الجهات الحكومية جعلت العملية سلسة تماماً.",
      avatar: "https://picsum.photos/id/64/128/128"
    },
    {
      name: "المهندسة سارة الشمري",
      position: "مديرة التطوير - مجموعة الرياض",
      text: "بفضل فريق أصول حصلنا على موافقات وزارة الاستثمار لمشروعنا الضخم في أقل من 3 أشهر. نوصي بهم بشدة لأي شركة تبحث عن خدمات حكومية احترافية.",
      avatar: "https://picsum.photos/id/65/128/128"
    },
    {
      name: "د. محمد الدوسري",
      position: "المدير العام - الشركة السعودية للتقنية",
      text: "الاستشارات الاستراتيجية التي قدمتها أصول كانت محورية في تحول شركتنا. فريق محترف ومتمرس يفهم تماماً المتطلبات الحكومية السعودية.",
      avatar: "https://picsum.photos/id/66/128/128"
    }
  ];

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
    }, 1200);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden font-sans">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-lg border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="/uploads/upload_1.jpg" 
                  alt="Osool Logo" 
                  className="h-14 w-auto drop-shadow-2xl"
                />
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tighter text-amber-400">أصول</div>
                <div className="text-[10px] text-amber-500/70 -mt-1.5">GOVERNMENT SERVICES</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-amber-400 ${activeSection === item.id ? 'text-amber-400' : 'text-zinc-400'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="tel:+966501234567" 
                className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 px-6 py-2.5 rounded-full text-sm font-medium border border-white/10 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" /> تواصل الآن
              </a>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden w-11 h-11 flex items-center justify-center text-amber-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-950 border-t border-amber-500/20"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-lg">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-zinc-300 hover:text-amber-400 transition-colors py-1"
                  >
                    {item.label}
                  </button>
                ))}
                <a href="tel:+966501234567" className="mt-4 flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 transition-colors text-zinc-950 font-semibold py-4 rounded-2xl">
                  <Phone className="w-5 h-5" /> اتصل بنا الآن
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(at_center,#00000088_40%,transparent)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-amber-400/30 text-amber-400 text-xs tracking-[3px] px-6 py-3 rounded-3xl mb-8">
                الرياض • المملكة العربية السعودية
              </div>

              <h1 className="text-7xl md:text-[92px] leading-[1.05] font-bold tracking-tighter mb-6">
                خدمات حكومية<br />بمستوى <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400">عالمي</span>
              </h1>

              <p className="text-2xl text-zinc-400 max-w-md mb-12">
                أصول تقدم خدمات استشارية متكاملة في مجال التراخيص الحكومية، الاستثمار، والامتثال التنظيمي في المملكة.
              </p>

              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group flex items-center gap-4 bg-amber-500 hover:bg-amber-400 transition-all text-black font-semibold px-10 py-6 rounded-3xl text-lg active:scale-[0.985]"
                >
                  ابدأ مشروعك الآن
                  <div className="group-active:rotate-45 transition-transform">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </button>

                <button 
                  onClick={() => scrollToSection('about')}
                  className="flex items-center gap-4 border border-white/30 hover:border-white/60 transition-all px-8 py-6 rounded-3xl text-lg font-medium"
                >
                  تعرف علينا
                </button>
              </div>

              <div className="flex items-center gap-12 mt-20">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index}>
                    <div className="text-5xl font-semibold text-amber-400 tabular-nums">{stat.number}{stat.suffix}</div>
                    <div className="text-sm text-zinc-500 tracking-widest mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 flex flex-col items-center gap-2 text-xs tracking-widest text-amber-400/60">
          <div>SCROLL TO EXPLORE</div>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>

        {/* Trust logos */}
        <div className="absolute bottom-10 right-12 hidden xl:block">
          <div className="flex items-center gap-8 opacity-40">
            <div className="text-xs font-mono tracking-[2px]">VISION 2030</div>
            <div className="w-px h-6 bg-white/30" />
            <div className="text-xs font-mono tracking-[2px]">MINISTRY OF INVESTMENT</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-zinc-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <div className="uppercase text-amber-400 text-sm tracking-[4px] mb-4">منذ 2009</div>
              <h2 className="text-6xl font-semibold tracking-tighter leading-none mb-8">
                شريكك الموثوق<br />في عالم <span className="text-amber-400">البيروقراطية</span>
              </h2>
              
              <div className="prose prose-invert max-w-none text-lg text-zinc-400">
                <p className="mb-6">
                  تأسست أصول في عام 2009 لتكون الوسيط المحترف بين الشركات والجهات الحكومية في المملكة العربية السعودية. 
                  نجحنا في إنجاز أكثر من 520 مشروعاً بنجاح.
                </p>
                <p>
                  فريقنا يتكون من مستشارين سابقين في الجهات الحكومية والوزارات. نحن نفهم النظام من الداخل، 
                  ونستخدم معرفتنا لتسريع إجراءاتكم وتحقيق أهدافكم الاستراتيجية.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">علاقات استراتيجية</div>
                      <div className="text-zinc-400 text-sm">مع أكثر من 38 جهة حكومية</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">فريق من الخبراء</div>
                      <div className="text-zinc-400 text-sm">محامون ومستشارون حكوميون سابقون</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-l border-white/10 pl-8">
                  <div className="text-amber-400 font-mono text-sm mb-3">OUR PROMISE</div>
                  <div className="italic text-xl leading-tight text-zinc-300">
                    "نحن لا نقدم خدمات. <span className="text-white">نحن نمنحك الوصول</span>."
                  </div>
                  <div className="text-xs text-zinc-500 mt-8">— الرئيس التنفيذي</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-400/10">
                <img 
                  src="/images/about.jpg" 
                  alt="Our Leadership" 
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                    <div className="uppercase text-xs tracking-widest">مقرنا الرئيسي - الرياض</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="px-5 py-1.5 border border-amber-400/30 text-amber-400 text-xs rounded-full mb-4">خدماتنا المتخصصة</div>
            <h2 className="text-6xl font-bold tracking-tighter">حلول متكاملة لاحتياجاتك الحكومية</h2>
            <p className="max-w-md text-zinc-400 mt-4">نقدم مجموعة متكاملة من الخدمات التي تُسرّع نمو أعمالك</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="group bg-zinc-900 hover:bg-zinc-800/90 border border-white/5 hover:border-amber-400/30 p-8 rounded-3xl transition-all duration-500 flex flex-col"
              >
                <div className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-zinc-950 transition-transform group-hover:-rotate-12`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-semibold tracking-tight mb-4 leading-none">{service.title}</h3>
                
                <p className="text-zinc-400 flex-1 leading-relaxed">{service.desc}</p>
                
                <div className="pt-8 mt-auto border-t border-white/10 flex items-center justify-between text-xs text-amber-400">
                  <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                    اكتشف المزيد <ArrowRight className="w-3.5" />
                  </div>
                  <div className="font-mono text-[10px] opacity-40">0{index + 1}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-zinc-900 py-8 border-y border-amber-400/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left border-r border-white/5 last:border-none">
                <div className="text-6xl font-bold text-amber-400 tracking-tighter tabular-nums mb-1">{stat.number}<span className="text-4xl align-super text-amber-400/70">{stat.suffix}</span></div>
                <div className="text-xs uppercase tracking-[2px] text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="uppercase tracking-widest text-xs text-amber-400 mb-2">أعمال نفخر بها</div>
              <h2 className="text-6xl font-bold tracking-tighter">مشاريع مختارة</h2>
            </div>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hidden md:flex items-center gap-2 text-sm group">
              ابدأ مشروعك
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                <ArrowRight className="w-4" />
              </div>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-video bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="uppercase text-[10px] tracking-[1px] text-amber-400 mb-2">{project.category}</div>
                  <div className="text-2xl font-semibold leading-none tracking-tight mb-4">{project.title}</div>
                  
                  <div className="inline-flex items-center text-xs font-medium px-5 py-2 bg-white/10 backdrop-blur rounded-3xl">
                    {project.status}
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 text-[10px] font-mono bg-black/70 px-3 py-1 rounded">CASE STUDY</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-zinc-900 py-24 border-t border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mx-auto w-16 h-16 bg-amber-400/10 flex items-center justify-center rounded-2xl mb-6">
              <Award className="w-9 h-9 text-amber-400" />
            </div>
            <h2 className="text-5xl font-semibold tracking-tighter">ما يقوله عملاؤنا</h2>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6 }}
                className="bg-zinc-950 border border-amber-400/10 rounded-3xl p-16 relative"
              >
                <div className="max-w-2xl mx-auto text-center">
                  <div className="text-7xl text-amber-400/20 font-serif absolute -top-6 left-12">“</div>
                  
                  <p className="text-2xl leading-tight text-zinc-200 italic mb-12">
                    {testimonials[currentTestimonial].text}
                  </p>
                  
                  <div className="flex justify-center items-center gap-5">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-14 h-14 rounded-2xl object-cover ring-4 ring-amber-400/20" 
                    />
                    <div className="text-left">
                      <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-zinc-500">{testimonials[currentTestimonial].position}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-10">
              <button 
                onClick={prevTestimonial}
                className="w-14 h-14 border border-white/20 hover:border-amber-400 rounded-2xl flex items-center justify-center transition-colors"
              >
                ←
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 border border-white/20 hover:border-amber-400 rounded-2xl flex items-center justify-center transition-colors"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-x-16">
          <div className="md:col-span-5">
            <div className="sticky top-28">
              <div className="uppercase text-xs text-amber-400 tracking-widest mb-6">اتصل بنا</div>
              <h2 className="text-6xl font-bold tracking-tighter leading-none mb-8">هل أنت جاهز<br />لتبدأ؟</h2>
              
              <p className="text-zinc-400 max-w-xs">
                دعنا نساعدك في تحقيق أهدافك. يرجى ملء النموذج أو الاتصال بنا مباشرة.
              </p>

              <div className="mt-16 space-y-8">
                <a href="tel:+966501234567" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 border border-amber-400/30 group-hover:border-amber-400 transition-colors rounded-2xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest text-zinc-500">اتصل بنا</div>
                    <div className="font-mono text-xl text-white">+966 50 123 4567</div>
                  </div>
                </a>
                
                <a href="mailto:info@osool.sa" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 border border-amber-400/30 group-hover:border-amber-400 transition-colors rounded-2xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest text-zinc-500">البريد الإلكتروني</div>
                    <div className="font-mono text-xl text-white">info@osool.sa</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex-shrink-0 border border-amber-400/30 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest text-zinc-500">المقر الرئيسي</div>
                    <div className="text-lg leading-tight">طريق الملك فهد، الرياض<br />المملكة العربية السعودية</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 mt-16 md:mt-0">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-zinc-400 mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-900 border border-white/10 focus:border-amber-400 rounded-2xl px-7 py-6 text-lg outline-none transition-all"
                    placeholder="خالد الشهري"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-zinc-400 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-900 border border-white/10 focus:border-amber-400 rounded-2xl px-7 py-6 text-lg outline-none transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-zinc-400 mb-2">رقم الجوال</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-900 border border-white/10 focus:border-amber-400 rounded-2xl px-7 py-6 text-lg outline-none transition-all"
                    placeholder="+966 55 555 5555"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-zinc-400 mb-2">نوع الخدمة</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-zinc-900 border border-white/10 focus:border-amber-400 rounded-2xl px-7 py-6 text-lg outline-none transition-all"
                  >
                    <option value="">اختر خدمة</option>
                    {services.map((s, idx) => (
                      <option key={idx} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-zinc-400 mb-2">تفاصيل الطلب</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={7}
                  className="w-full bg-zinc-900 border border-white/10 focus:border-amber-400 rounded-3xl px-7 py-6 text-lg outline-none resize-y min-h-[180px] transition-all"
                  placeholder="أحتاج مساعدتكم في..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 transition-all text-zinc-950 font-semibold py-7 rounded-3xl text-xl flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>جاري الإرسال... <span className="animate-spin">⟳</span></>
                ) : (
                  <>إرسال الطلب <ArrowRight /></>
                )}
              </button>

              <div className="text-[10px] text-center text-zinc-500 pt-4">
                سنرد عليك خلال ٢٤ ساعة • جميع البيانات محمية
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/uploads/upload_1.jpg" alt="Osool" className="h-9" />
              <span className="text-4xl font-bold text-amber-400 tracking-[-2px]">أصول</span>
            </div>
            
            <div className="max-w-xs text-sm text-zinc-400">
              شركة متخصصة في الاستشارات الحكومية والتراخيص والامتثال في المملكة العربية السعودية.
            </div>
            
            <div className="flex gap-6 mt-10">
              {['X', 'لينكدإن', 'إنستغرام'].map(social => (
                <div key={social} className="text-xs border border-white/10 hover:border-amber-400 transition-colors px-4 py-3 rounded-2xl cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="uppercase text-xs tracking-widest mb-8 text-zinc-400">الخدمات السريعة</div>
            <div className="space-y-4 text-sm">
              {services.slice(0, 4).map((service, i) => (
                <div key={i} className="text-zinc-300 hover:text-white cursor-pointer transition-colors">
                  {service.title}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="uppercase text-xs tracking-widest mb-8 text-zinc-400">اتصل بنا مباشرة</div>
            
            <div className="font-mono text-4xl mb-2 text-amber-400">050 123 4567</div>
            <a href="mailto:info@osool.sa" className="text-zinc-400 hover:text-amber-300 transition-colors">info@osool.sa</a>
            
            <div className="mt-14 text-xs leading-relaxed text-zinc-500">
              المقر الرئيسي<br />
              برج المملكة، الدور ٢٢<br />
              الرياض ١١٢٢١<br />
              المملكة العربية السعودية
            </div>

            <div className="mt-12 text-[10px] text-zinc-600">
              © {new Date().getFullYear()} أصول للخدمات الحكومية والاستشارات. جميع الحقوق محفوظة.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OsoolWebsite;

