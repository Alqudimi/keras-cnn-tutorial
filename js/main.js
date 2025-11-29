/* ========================================
   Deep Learning Educational Platform
   Main JavaScript File
   ======================================== */

// ========================================
// Theme Management
// ========================================
const ThemeManager = {
  init() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
    
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle());
    }
  },
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  },
  
  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
};

// ========================================
// Reading Progress Bar
// ========================================
const ProgressBar = {
  init() {
    this.progressBar = document.querySelector('.progress-bar');
    if (!this.progressBar) return;
    
    window.addEventListener('scroll', () => this.update());
  },
  
  update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    this.progressBar.style.transform = `scaleX(${progress})`;
  }
};

// ========================================
// Mobile Navigation
// ========================================
const MobileNav = {
  init() {
    this.toggle = document.querySelector('.mobile-menu-toggle');
    this.nav = document.querySelector('.mobile-nav');
    this.overlay = document.querySelector('.mobile-nav-overlay');
    this.closeBtn = document.querySelector('.mobile-nav-close');
    
    if (!this.toggle || !this.nav) return;
    
    this.toggle.addEventListener('click', () => this.open());
    this.overlay?.addEventListener('click', () => this.close());
    this.closeBtn?.addEventListener('click', () => this.close());
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
    
    this.initAccordion();
  },
  
  open() {
    this.nav.classList.add('active');
    this.overlay?.classList.add('active');
    this.toggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  
  close() {
    this.nav.classList.remove('active');
    this.overlay?.classList.remove('active');
    this.toggle.classList.remove('active');
    document.body.style.overflow = '';
  },
  
  initAccordion() {
    const accordionItems = document.querySelectorAll('.mobile-nav-accordion .accordion-item');
    
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        accordionItems.forEach(i => {
          i.classList.remove('active');
        });
        
        // Toggle the clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
    
    // Highlight active link and open its accordion item
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.mobile-nav-link');
    
    links.forEach(link => {
      // Remove active class from all links first
      link.classList.remove('active');
      
      // Check if the link matches the current page
      if (link.getAttribute('href') === currentPath || (currentPath === 'index.html' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
        
        // Find the parent accordion item and make it active
        let parentItem = link.closest('.accordion-item');
        if (parentItem) {
          // Close all other items before setting the current one as active
          accordionItems.forEach(i => {
            i.classList.remove('active');
          });
          parentItem.classList.add('active');
        }
      }
    });
  }
};

// ========================================
// Search Functionality
// ========================================
const Search = {
  data: [
    { title: 'معمارية النموذج CNN', description: 'بناء شبكة عصبية تلافيفية للتصنيف', url: 'architecture.html' },
    { title: 'طبقة Conv2D', description: 'طبقة الالتفاف ثنائية الأبعاد', url: 'architecture.html#conv2d' },
    { title: 'Batch Normalization', description: 'تطبيع الدفعات لتحسين التدريب', url: 'architecture.html#batchnorm' },
    { title: 'MaxPooling', description: 'تقليل الأبعاد والحفاظ على الميزات', url: 'architecture.html#maxpooling' },
    { title: 'Dropout', description: 'منع الإفراط في التكييف', url: 'architecture.html#dropout' },
    { title: 'معالجة الصور', description: 'إعداد الصور للتعلم العميق', url: 'preprocessing.html' },
    { title: 'إزالة التشويش', description: 'تحسين جودة الصور المشوشة', url: 'preprocessing.html#denoising' },
    { title: 'زيادة البيانات', description: 'تقنيات Data Augmentation', url: 'preprocessing.html#augmentation' },
    { title: 'التطبيع', description: 'تحويل قيم البكسل للتدريب', url: 'preprocessing.html#normalization' },
    { title: 'تقسيم البيانات', description: 'التدريب والتحقق والاختبار', url: 'preprocessing.html#splitting' },
    { title: 'بناء البيانات', description: 'جمع وتنظيم مجموعات البيانات', url: 'dataset.html' },
    { title: 'جمع الصور', description: 'طرق جمع الصور للتدريب', url: 'dataset.html#collecting' },
    { title: 'تنظيم المجلدات', description: 'هيكل المجلدات للبيانات', url: 'dataset.html#organizing' },
    { title: 'تنظيف البيانات', description: 'إزالة الصور المكررة والتالفة', url: 'dataset.html#cleaning' },
    { title: 'الصور التالفة', description: 'اكتشاف وإزالة الصور التالفة', url: 'dataset.html#corrupted' },
    { title: 'إعدادات التدريب', description: 'المحسنات ومعدل التعلم', url: 'training-settings.html' },
    { title: 'Adam Optimizer', description: 'المحسن الأكثر شيوعاً', url: 'training-settings.html#optimizers' },
    { title: 'Learning Rate Scheduler', description: 'جدولة معدل التعلم', url: 'training-settings.html#lr-scheduler' },
    { title: 'Early Stopping', description: 'الإيقاف المبكر للتدريب', url: 'training-settings.html#early-stopping' },
    { title: 'L2 Regularization', description: 'تنظيم الأوزان', url: 'training-settings.html#weight-decay' },
    { title: 'Label Smoothing', description: 'تنعيم التسميات', url: 'training-settings.html#label-smoothing' },
    { title: 'Class Weighting', description: 'معالجة الفئات غير المتوازنة', url: 'training-settings.html#class-weights' },
    { title: 'مراحل التدريب', description: 'التدريب على ثلاث مراحل', url: 'training-phases.html' },
    { title: 'التدريب الأساسي', description: 'المرحلة الأولى - LR: 1e-3', url: 'training-phases.html#phase1' },
    { title: 'الضبط الدقيق', description: 'المرحلة الثانية - LR: 1e-4', url: 'training-phases.html#phase2' },
    { title: 'التحسين النهائي', description: 'المرحلة الثالثة - LR: 1e-5', url: 'training-phases.html#phase3' },
    { title: 'التقييم والمقاييس', description: 'Accuracy, Precision, Recall, F1-Score', url: 'evaluation.html' },
    { title: 'مصفوفة الارتباك', description: 'Confusion Matrix للتحليل', url: 'evaluation.html#confusion-matrix' },
    { title: 'ROC و AUC', description: 'منحنيات التقييم', url: 'evaluation.html#roc-auc' },
    { title: 'تحليل الأخطاء', description: 'فهم أخطاء النموذج', url: 'evaluation.html#error-analysis' },
    { title: 'تفسير النموذج', description: 'فهم قرارات النموذج', url: 'explainability.html' },
    { title: 'Grad-CAM', description: 'تصور مناطق الاهتمام', url: 'explainability.html#gradcam' },
    { title: 'تصور الفلاتر', description: 'Filter Visualization', url: 'explainability.html#filters' },
    { title: 'TensorBoard', description: 'أدوات التصور والمراقبة', url: 'explainability.html#tensorboard' },
    { title: 'الأخطاء الشائعة', description: 'أخطاء التعلم العميق وحلولها', url: 'common-mistakes.html' },
    { title: 'Overfitting', description: 'الإفراط في التكييف وحلوله', url: 'common-mistakes.html#overfitting' },
    { title: 'Underfitting', description: 'نقص التكييف وحلوله', url: 'common-mistakes.html#underfitting' },
    { title: 'Learning Rate', description: 'مشاكل معدل التعلم', url: 'common-mistakes.html#learning-rate' },
    { title: 'تحسين الأداء', description: 'تسريع التدريب والاستدلال', url: 'performance.html' },
    { title: 'Mixed Precision', description: 'التدريب بدقة مختلطة', url: 'performance.html#mixed-precision' },
    { title: 'GPU/TPU', description: 'استخدام وحدات المعالجة', url: 'performance.html#gpu-tpu' },
    { title: 'Batch Size', description: 'تحسين حجم الدفعة', url: 'performance.html#batch-size' },
    { title: 'نشر النموذج', description: 'تحويل ونشر النماذج', url: 'deployment.html' },
    { title: 'TensorFlow Lite', description: 'النشر على الهواتف', url: 'deployment.html#tflite' },
    { title: 'TensorFlow.js', description: 'النشر في المتصفح', url: 'deployment.html#tfjs' },
    { title: 'Flask API', description: 'إنشاء API بـ Flask', url: 'deployment.html#flask' },
    { title: 'FastAPI', description: 'إنشاء API بـ FastAPI', url: 'deployment.html#fastapi' },
    { title: 'ONNX', description: 'تحويل النماذج لـ ONNX', url: 'deployment.html#onnx' },
    { title: 'قوالب الأكواد', description: 'أكواد جاهزة للنسخ', url: 'code-templates.html' },
    { title: 'قالب تدريب CNN', description: 'كود كامل لتدريب النموذج', url: 'code-templates.html#cnn-training' },
    { title: 'قالب Augmentation', description: 'كود تعزيز البيانات', url: 'code-templates.html#augmentation' },
    { title: 'قالب Evaluation', description: 'كود التقييم الشامل', url: 'code-templates.html#evaluation' },
    { title: 'الأمثلة العملية', description: 'أكواد كاملة للتطبيق', url: 'examples.html' },
    { title: 'مشروع تصنيف القطط والكلاب', description: 'Cats vs Dogs Classification', url: 'cats-dogs.html' },
    { title: 'تنظيف الصور التالفة', description: 'اكتشاف وإزالة الصور الفاسدة', url: 'cats-dogs.html#data-cleaning' },
    { title: 'مشروع تصنيف الزهور', description: 'Flowers Classification - 5 فئات', url: 'flowers.html' },
    { title: 'Squeeze-and-Excitation', description: 'SE Block لتحسين CNN', url: 'flowers.html#model' },
    { title: 'مشروع Fashion-MNIST', description: 'تصنيف الملابس - 10 فئات', url: 'fashion-mnist.html' },
    { title: 'الصور الرمادية', description: 'CNN للصور ذات قناة واحدة', url: 'fashion-mnist.html#model' },
    { title: 'مشروع أمراض النباتات', description: 'Plant Disease Detection', url: 'plant-disease.html' },
    { title: 'Focal Loss', description: 'دالة خسارة للفئات غير المتوازنة', url: 'plant-disease.html#imbalance' },
    { title: 'Residual Block', description: 'Skip Connections في CNN', url: 'plant-disease.html#model' },
    { title: 'MixUp Augmentation', description: 'تقنية خلط الصور', url: 'plant-disease.html#augmentation' },
  ],
  
  init() {
    this.modal = document.querySelector('.search-modal');
    this.input = document.querySelector('.search-input');
    this.results = document.querySelector('.search-results');
    this.searchBtn = document.querySelector('.search-btn');
    
    if (!this.modal) return;
    
    this.searchBtn?.addEventListener('click', () => this.open());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
    
    this.input?.addEventListener('input', (e) => this.search(e.target.value));
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.open();
      }
      if (e.key === 'Escape') this.close();
    });
  },
  
  open() {
    this.modal.classList.add('active');
    this.input?.focus();
    document.body.style.overflow = 'hidden';
    this.renderResults(this.data.slice(0, 5));
  },
  
  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    if (this.input) this.input.value = '';
  },
  
  search(query) {
    if (!query.trim()) {
      this.renderResults(this.data.slice(0, 5));
      return;
    }
    
    const filtered = this.data.filter(item => 
      item.title.includes(query) || 
      item.description.includes(query)
    );
    
    this.renderResults(filtered);
  },
  
  renderResults(items) {
    if (!this.results) return;
    
    if (items.length === 0) {
      this.results.innerHTML = `
        <div class="search-no-results">
          <p>لم يتم العثور على نتائج</p>
        </div>
      `;
      return;
    }
    
    this.results.innerHTML = items.map(item => `
      <a href="${item.url}" class="search-result-item">
        <div class="search-result-title">${item.title}</div>
        <div class="search-result-description">${item.description}</div>
      </a>
    `).join('');
  }
};

// ========================================
// Code Copy Functionality
// ========================================
const CodeCopy = {
  init() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => this.copy(btn));
    });
  },
  
  async copy(btn) {
    const codeBlock = btn.closest('.code-block');
    const code = codeBlock.querySelector('pre code, pre').textContent;
    
    try {
      await navigator.clipboard.writeText(code);
      btn.classList.add('copied');
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        تم النسخ
      `;
      
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
          نسخ
        `;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
};

// ========================================
// Tabs
// ========================================
const Tabs = {
  init() {
    document.querySelectorAll('.tabs').forEach(tabContainer => {
      const buttons = tabContainer.querySelectorAll('.tab-btn');
      const panels = tabContainer.querySelectorAll('.tab-panel');
      
      buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));
          
          btn.classList.add('active');
          panels[index]?.classList.add('active');
        });
      });
    });
  }
};

// ========================================
// Accordion
// ========================================
const Accordion = {
  init() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        const isActive = item.classList.contains('active');
        
        // Close all other items
        item.parentElement.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }
};

// ========================================
// Scroll Animations
// ========================================
const ScrollAnimations = {
  init() {
    this.elements = document.querySelectorAll('.scroll-animate');
    if (!this.elements.length) return;
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    this.elements.forEach(el => this.observer.observe(el));
  }
};

// ========================================
// Active Sidebar Link
// ========================================
const SidebarNav = {
  init() {
    const sections = document.querySelectorAll('.content-section');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    if (!sections.length || !sidebarLinks.length) return;
    
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }
};

// ========================================
// Syntax Highlighting (Simple)
// ========================================
const SyntaxHighlight = {
  patterns: [
    { regex: /(#.*$)/gm, class: 'comment' },
    { regex: /"""[\s\S]*?"""/g, class: 'string' },
    { regex: /'''[\s\S]*?'''/g, class: 'string' },
    { regex: /(["'])(?:(?=(\\?))\2.)*?\1/g, class: 'string' },
    { regex: /\b(import|from|as|def|class|return|if|else|elif|for|while|try|except|finally|with|lambda|yield|async|await|raise|pass|break|continue|and|or|not|in|is|True|False|None)\b/g, class: 'keyword' },
    { regex: /\b(self|cls)\b/g, class: 'parameter' },
    { regex: /@[\w]+/g, class: 'decorator' },
    { regex: /\b(\d+\.?\d*)\b/g, class: 'number' },
    { regex: /\b([A-Z][a-zA-Z0-9_]*)\b/g, class: 'class' },
    { regex: /\b([a-z_][a-zA-Z0-9_]*)\s*(?=\()/g, class: 'function' },
  ],
  
  init() {
    document.querySelectorAll('.code-content pre').forEach(pre => {
      if (!pre.querySelector('code')) {
        const code = document.createElement('code');
        code.innerHTML = this.highlight(pre.textContent);
        pre.innerHTML = '';
        pre.appendChild(code);
      }
    });
  },
  
  highlight(code) {
    let result = this.escapeHtml(code);
    
    this.patterns.forEach(pattern => {
      result = result.replace(pattern.regex, (match) => 
        `<span class="${pattern.class}">${match}</span>`
      );
    });
    
    return result;
  },
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (!target) return;
        
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        
        // Update URL without scrolling
        history.pushState(null, null, targetId);
      });
    });
  }
};

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  ProgressBar.init();
  MobileNav.init();
  Search.init();
  CodeCopy.init();
  Tabs.init();
  ScrollAnimations.init();
  SidebarNav.init();
  SyntaxHighlight.init();
  SmoothScroll.init();
});

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
