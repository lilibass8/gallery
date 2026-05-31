/**
 * The Glow Gallery — English / Arabic i18n
 */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'glow-gallery-lang';

  const strings = {
    en: {
      meta: {
        title: 'The Glow Gallery | Immersive Creative Exhibition',
        description: 'The Glow Gallery — walk through our corridor to discover Artists, Exhibitions, the Collection, and submit your own artwork.',
      },
      skip: 'Skip to main content',
      entrance: {
        eyebrow: 'Welcome to',
        title: 'The Glow Gallery',
        sub: 'Step inside the exhibition',
      },
      brand: {
        eyebrow: 'Digital Exhibition',
        name: 'The Glow Gallery',
      },
      walkHint: 'Scroll gently to walk the corridor',
      walkProgressAria: 'Corridor walk progress',
      home: {
        label: 'Return to gallery',
        text: 'Gallery',
      },
      lang: {
        group: 'Language',
        en: 'EN',
        ar: 'عربي',
      },
      corridorNav: 'Gallery navigation — select a painting to enter',
      corridorReset: 'Walk back to entrance',
      footer: 'The Glow Gallery. All rights reserved.',
      frames: {
        artists: {
          title: 'Artists Gallery',
          desc: 'Meet the creators behind the artworks',
          aria: 'Artists Gallery — meet the creators',
          imgAlt: 'Featured artists — portrait composition',
        },
        exhibitions: {
          title: 'Exhibitions',
          desc: 'Discover featured and current exhibitions',
          aria: 'Exhibitions — discover featured shows',
          imgAlt: 'Exhibition layout — gallery hang',
        },
        collection: {
          title: 'Explore Collection',
          desc: 'Explore artworks throughout the gallery',
          aria: 'Explore Collection — browse artworks',
          imgAlt: 'Art collection — mixed styles',
        },
        submit: {
          title: 'Submit Your Artwork',
          desc: 'Share your creativity with the gallery',
          aria: 'Submit Your Artwork — share your creativity',
          imgAlt: 'Submit artwork — creative invitation',
        },
      },
      pages: {
        artists: {
          tag: '🎨 Gallery Wing',
          title: 'Artists Gallery',
          lead: 'Meet the creators behind the artworks and discover featured artists.',
          c1: { name: 'Elena Vasquez', role: 'Contemporary Oil · Featured', bio: 'Luminous landscapes and restrained palettes — her series Quiet Horizons anchors our main hall.' },
          c2: { name: 'Marcus Chen', role: 'Digital Mixed Media', bio: 'Architectural abstractions that blend photography, grain, and soft geometry into immersive panels.' },
          c3: { name: 'Amira El-Khoury', role: 'Sculpture & Installation', bio: 'Organic forms in bronze and stone — tactile works that invite slow, contemplative viewing.' },
          c4: { name: 'James Okonkwo', role: 'Photography', bio: 'Documentary portraiture with cinematic light — capturing makers, studios, and quiet moments of craft.' },
        },
        exhibitions: {
          tag: '🖼️ Now Showing',
          title: 'Exhibitions',
          lead: 'Explore current, featured, and upcoming exhibitions.',
          e1: { title: 'Soft Light · Current', desc: 'A meditation on warmth, shadow, and interior calm — twelve artists reimagining domestic stillness.', meta: 'Through Jun 2026 · Main Corridor' },
          e2: { title: 'Earth & Line · Featured', desc: 'Minimal drawings and ceramic studies exploring organic rhythm and negative space.', meta: 'Featured · East Wing' },
          e3: { title: 'Urban Bloom · Upcoming', desc: 'Street photography and collage celebrating cities as living, breathing compositions.', meta: 'Opens Aug 2026' },
        },
        collection: {
          tag: '🔍 Collection',
          title: 'Explore Collection',
          lead: 'Explore the artworks displayed throughout the gallery and discover different artistic styles and creations.',
          i1: { title: 'Ivory Drift', desc: 'Abstract · Soft gradients and suspended forms in muted blue tones.', meta: 'Painting' },
          i2: { title: 'Studio No. 7', desc: 'Photography · Documentary study of light through atelier windows.', meta: 'Photography' },
          i3: { title: 'Harmonic Field', desc: 'Illustration · Geometric botanicals with hand-finished silver detail.', meta: 'Illustration' },
          i4: { title: 'Threshold', desc: 'Concept · Architectural maquette exploring passage and reflection.', meta: 'Concept Art' },
          i5: { title: 'Still Morning', desc: 'Minimal · Single-line compositions on ice-blue grounds.', meta: 'Minimal' },
          i6: { title: 'Azure Hour', desc: 'Painting · Layered glazes in steel blue, mist, and soft sky.', meta: 'Painting' },
        },
        submit: {
          tag: '✨ Open Call',
          title: 'Submit Your Artwork',
          lead: 'Share your creativity with the gallery — we welcome submissions from emerging and established artists worldwide.',
          nameLabel: 'Artist name',
          namePlaceholder: 'Your full name',
          emailLabel: 'Email',
          emailPlaceholder: 'you@email.com',
          mediumLabel: 'Medium',
          mediumPlaceholder: 'e.g. Oil on canvas, Photography, Digital',
          statementLabel: 'Artist statement',
          statementPlaceholder: 'Briefly describe your work and practice…',
          portfolioLabel: 'Portfolio link',
          portfolioPlaceholder: 'https://your-portfolio.com',
          submitBtn: 'Submit artwork',
          submittedBtn: 'Submitted',
          success: 'Thank you — your submission has been received. Our curators will review your work soon.',
          guidelinesTitle: 'Submission guidelines',
          g1: 'High-resolution images (min. 2000px longest edge)',
          g2: 'Original work created within the last 3 years',
          g3: 'Response within 10 business days',
          sidebarNote: 'We welcome artists from around the world.',
        },
      },
      corridorAria: 'Gallery corridor exhibition walkthrough',
    },
    ar: {
      meta: {
        title: 'ذا غلو غاليري | معرض فني تفاعلي',
        description: 'ذا غلو غاليري — تجوّل في الممر لاكتشاف الفنانين والمعارض والمجموعة وإرسال أعمالك الفنية.',
      },
      skip: 'تخطي إلى المحتوى الرئيسي',
      entrance: {
        eyebrow: 'مرحباً بك في',
        title: 'ذا غلو غاليري',
        sub: 'ادخل إلى المعرض',
      },
      brand: {
        eyebrow: 'معرض رقمي',
        name: 'ذا غلو غاليري',
      },
      walkHint: 'مرّر بلطف للمشي في الممر',
      walkProgressAria: 'تقدم المشي في الممر',
      home: {
        label: 'العودة إلى المعرض',
        text: 'المعرض',
      },
      lang: {
        group: 'اللغة',
        en: 'EN',
        ar: 'عربي',
      },
      corridorNav: 'تنقل المعرض — اختر لوحة للدخول',
      corridorReset: 'العودة إلى المدخل',
      footer: 'ذا غلو غاليري. جميع الحقوق محفوظة.',
      frames: {
        artists: {
          title: 'معرض الفنانين',
          desc: 'تعرّف على مبدعي الأعمال الفنية',
          aria: 'معرض الفنانين — تعرّف على المبدعين',
          imgAlt: 'فنانون مميزون — تركيب بورتريه',
        },
        exhibitions: {
          title: 'المعارض',
          desc: 'اكتشف المعارض الحالية والمميزة',
          aria: 'المعارض — اكتشف العروض المميزة',
          imgAlt: 'تخطيط معرض — تعليق أعمال',
        },
        collection: {
          title: 'استكشف المجموعة',
          desc: 'استكشف الأعمال في أنحاء المعرض',
          aria: 'استكشف المجموعة — تصفح الأعمال',
          imgAlt: 'مجموعة فنية — أساليب متنوعة',
        },
        submit: {
          title: 'أرسل عملك الفني',
          desc: 'شارك إبداعك مع المعرض',
          aria: 'أرسل عملك الفني — شارك إبداعك',
          imgAlt: 'إرسال عمل فني — دعوة إبداعية',
        },
      },
      pages: {
        artists: {
          tag: '🎨 جناح المعرض',
          title: 'معرض الفنانين',
          lead: 'تعرّف على مبدعي الأعمال واكتشف الفنانين المميزين.',
          c1: { name: 'إيلينا فاسكيز', role: 'زيت معاصر · مميز', bio: 'مناظر طبيعية مضيئة ولوحات هادئة — سلسلتها آفاق هادئة تزيّن القاعة الرئيسية.' },
          c2: { name: 'ماركوس تشين', role: 'وسائط رقمية مختلطة', bio: 'تجريد معماري يمزج التصوير والحبيبات والهندسة الناعمة في لوحات غامرة.' },
          c3: { name: 'أميرة الخوري', role: 'نحت وتركيب', bio: 'أشكال عضوية من برونز وحجر — أعمال ملموسة تدعو إلى مشاهدة متأنية.' },
          c4: { name: 'جيمس أوكونكو', role: 'تصوير فوتوغرافي', bio: 'بورتريهات وثائقية بإضاءة سينمائية — يلتقط الحرفيين والاستوديوهات ولحظات الصناعة الهادئة.' },
        },
        exhibitions: {
          tag: '🖼️ يُعرض الآن',
          title: 'المعارض',
          lead: 'استكشف المعارض الحالية والمميزة والقادمة.',
          e1: { title: 'ضوء ناعم · حالي', desc: 'تأمل في الدفء والظل والهدوء الداخلي — اثنا عشر فناناً يعيدون تصور السكون المنزلي.', meta: 'حتى يونيو 2026 · الممر الرئيسي' },
          e2: { title: 'أرض وخط · مميز', desc: 'رسومات minimal ودراسات خزفية تستكشف الإيقاع العضوي والفراغ السلبي.', meta: 'مميز · الجناح الشرقي' },
          e3: { title: 'ازدهار حضري · قادم', desc: 'تصوير شوارع وكولاج يحتفي بالمدن كتركيبات حية.', meta: 'يفتتح أغسطس 2026' },
        },
        collection: {
          tag: '🔍 المجموعة',
          title: 'استكشف المجموعة',
          lead: 'استكشف الأعمال المعروضة في المعرض واكتشف أساليب وإبداعات فنية متنوعة.',
          i1: { title: 'انجراف عاجي', desc: 'تجريدي · تدرجات ناعمة وأشكال معلقة بدرجات زرقاء هادئة.', meta: 'رسم' },
          i2: { title: 'استوديو رقم 7', desc: 'تصوير · دراسة وثائقية لضوء نوافذ الاستوديو.', meta: 'تصوير' },
          i3: { title: 'حقل متناغم', desc: 'رسم توضيحي · نباتات هندسية بتفاصيل فضية يدوية.', meta: 'توضيح' },
          i4: { title: 'عتبة', desc: 'مفهوم · نموذج معماري يستكشف المرور والانعكاس.', meta: 'فن مفاهيمي' },
          i5: { title: 'صباح هادئ', desc: 'minimal · تركيبات بخط واحد على خلفيات زرقاء فاتحة.', meta: 'minimal' },
          i6: { title: 'ساعة زرقاء', desc: 'رسم · طبقات لونية بدرجات الأزرق الفولاذي والضبابي.', meta: 'رسم' },
        },
        submit: {
          tag: '✨ دعوة مفتوحة',
          title: 'أرسل عملك الفني',
          lead: 'شارك إبداعك مع المعرض — نرحب بتقديمات الفنانين الناشئين والمحترفين من جميع أنحاء العالم.',
          nameLabel: 'اسم الفنان',
          namePlaceholder: 'اسمك الكامل',
          emailLabel: 'البريد الإلكتروني',
          emailPlaceholder: 'you@email.com',
          mediumLabel: 'الوسيط',
          mediumPlaceholder: 'مثال: زيت على قماش، تصوير، رقمي',
          statementLabel: 'بيان الفنان',
          statementPlaceholder: 'صف عملك وممارستك بإيجاز…',
          portfolioLabel: 'رابط المعرض',
          portfolioPlaceholder: 'https://your-portfolio.com',
          submitBtn: 'إرسال العمل',
          submittedBtn: 'تم الإرسال',
          success: 'شكراً — استلمنا تقديمك. سيراجعه القيّمون قريباً.',
          guidelinesTitle: 'إرشادات التقديم',
          g1: 'صور عالية الدقة (2000 بكسل كحد أدنى للضلع الأطول)',
          g2: 'عمل أصلي أُنجز خلال السنوات الثلاث الماضية',
          g3: 'الرد خلال 10 أيام عمل',
          sidebarNote: 'نرحب بالفنانين من جميع أنحاء العالم.',
        },
      },
      corridorAria: 'جولة في ممر المعرض الفني',
    },
  };

  let currentLang = 'en';

  function getNested(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function t(key, vars) {
    let val = getNested(strings[currentLang], key) ?? getNested(strings.en, key) ?? '';
    if (vars && typeof val === 'string') {
      Object.keys(vars).forEach((k) => {
        val = val.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
      });
    }
    return val;
  }

  function getLang() {
    return currentLang;
  }

  function setLang(lang) {
    if (!strings[lang]) return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) { /* ignore */ }
    apply();
    global.dispatchEvent(new CustomEvent('glow:langchange', { detail: { lang } }));
  }

  function detectLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && strings[saved]) return saved;
    } catch (_) { /* ignore */ }
    const browser = (navigator.language || '').toLowerCase();
    return browser.startsWith('ar') ? 'ar' : 'en';
  }

  function apply() {
    const root = document.documentElement;
    root.lang = currentLang;
    root.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (typeof val === 'string' && val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val) el.placeholder = val;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      const val = t(key);
      if (val) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      const val = t(key);
      if (val) el.alt = val;
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const val = t(key);
      if (val) el.title = val;
    });

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t('meta.description');

    updateLangButtons();
    updateDocumentTitle();
  }

  function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.dataset.lang === currentLang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function updateDocumentTitle(page) {
    const I18n = global.GlowGalleryI18n;
    if (page && strings[currentLang].pages[page]) {
      document.title = `${t(`pages.${page}.title`)} | ${t('brand.name')}`;
    } else if (!page) {
      document.title = t('meta.title');
    }
  }

  function getPageTitle(page) {
    return t(`pages.${page}.title`);
  }

  function setupLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang && lang !== currentLang) setLang(lang);
      });
    });
  }

  function init() {
    currentLang = detectLang();
    setupLangSwitcher();
    apply();
  }

  global.GlowGalleryI18n = {
    init,
    setLang,
    getLang,
    t,
    getPageTitle,
    updateDocumentTitle,
  };
})(window);
