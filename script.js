/**
 * ARIA SOLUTIONS — INTERATIVIDADE DA LANDING PAGE
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close all
      faqItems.forEach(i => i.classList.remove('active'));
      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Simulador Interativo de Solução & Orçamento
  const segmentOptions = document.querySelectorAll('.segment-opt');
  const goalOptions = document.querySelectorAll('.goal-opt');
  const calcResultTitle = document.getElementById('calc-res-title');
  const calcResultDesc = document.getElementById('calc-res-desc');
  const calcWhatsappBtn = document.getElementById('calc-whatsapp-btn');

  let selectedSegment = 'Condomínio';
  let selectedGoal = 'Controle de Acesso Facial';

  function updateSimulation() {
    let recommendation = '';
    let description = '';

    if (selectedSegment === 'Academia / Clube') {
      recommendation = 'Catracas Biométricas / Faciais + Software de Gestão de Alunos';
      description = 'Solução ideal para eliminar evasão de mensalidade, bloquear inadimplentes e garantir fluxo rápido na recepção.';
    } else if (selectedSegment === 'Condomínio') {
      recommendation = 'Portaria Autônoma + Reconhecimento Facial + Cancelas com Tag Veicular';
      description = 'Garante máxima segurança aos moradores, registro de visitantes em tempo real e agilidade na entrada de veículos.';
    } else if (selectedSegment === 'Empresa / Escritório') {
      recommendation = 'Fechaduras Digitais + Relógio de Ponto e CFTV Inteligente IP';
      description = 'Controle preciso de horários, acesso restrito a setores confidenciais e monitoramento preventivo 24h.';
    } else {
      recommendation = 'Segurança Perimetral + Torniquetes de Alto Fluxo + CFTV IA';
      description = 'Robusto sistema de controle para grandes áreas com gestão integrada de visitantes e prestadores de serviço.';
    }

    if (calcResultTitle) calcResultTitle.textContent = recommendation;
    if (calcResultDesc) calcResultDesc.textContent = description;

    // Build WhatsApp message
    const phone = '5514996407570';
    const message = encodeURIComponent(`Olá, ARIA Solutions! Fiz uma simulação no site para ${selectedSegment} com foco em ${selectedGoal} (${recommendation}). Gostaria de solicitar uma apresentação e orçamento sem compromisso.`);
    if (calcWhatsappBtn) {
      calcWhatsappBtn.href = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
    }
  }

  segmentOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      segmentOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedSegment = opt.getAttribute('data-value');
      updateSimulation();
    });
  });

  goalOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      goalOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedGoal = opt.getAttribute('data-value');
      updateSimulation();
    });
  });

  // Initial update
  updateSimulation();

  // 5. Formulário de Contato Fake Submit
  const contactForm = document.getElementById('main-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const segment = document.getElementById('form-segment').value;
      const msg = document.getElementById('form-msg').value;

      const fullMsg = encodeURIComponent(`Olá ARIA Solutions! Meu nome é ${name} (${phone}). Segmento: ${segment}. Mensagem: ${msg}`);
      window.open(`https://api.whatsapp.com/send?phone=5514996407570&text=${fullMsg}`, '_blank');
    });
  }
});
