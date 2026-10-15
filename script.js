// Shared interactions for the portfolio and project pages.
let modalTrigger = null;
let previousOverflow = '';

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal || modal.classList.contains('active')) return;
  modalTrigger = document.activeElement;
  previousOverflow = document.body.style.overflow;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('button, a[href]')?.focus();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal || !modal.classList.contains('active')) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = previousOverflow;
  modalTrigger?.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const id = anchor.getAttribute('href').slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    });
  });

  // One filter handler; without filters, every project stays visible.
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const filters = Array.from(document.querySelectorAll('.filter-btn'));
  function filterProjects(button) {
    const category = (button.dataset.category || button.dataset.filter || 'all').toLowerCase();
    filters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => {
      card.hidden = category !== 'all' && (card.dataset.category || '').toLowerCase() !== category;
    });
  }
  filters.forEach(button => button.addEventListener('click', () => filterProjects(button)));
  const activeFilter = filters.find(button => button.classList.contains('active'));
  if (activeFilter) filterProjects(activeFilter);

  const track = document.getElementById('project-track');
  if (track) {
    const controls = document.querySelectorAll('[data-project-direction]');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateControls = () => {
      controls.forEach(button => {
        const direction = Number(button.dataset.projectDirection);
        button.disabled = direction < 0
          ? track.scrollLeft <= 1
          : track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
      });
    };
    const moveProjects = direction => {
      const card = track.querySelector('.project-card:not([hidden])');
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const distance = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
      track.scrollBy({
        left: direction * distance,
        behavior: motionPreference.matches ? 'instant' : 'smooth'
      });
    };
    controls.forEach(button => button.addEventListener('click', () => {
      moveProjects(Number(button.dataset.projectDirection));
    }));
    track.addEventListener('keydown', event => {
      if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      moveProjects(event.key === 'ArrowLeft' ? -1 : 1);
    });
    track.addEventListener('scroll', updateControls, { passive: true });
    new ResizeObserver(updateControls).observe(track);
    updateControls();
  }

  document.querySelectorAll('.project-arrow').forEach(button => {
    button.addEventListener('click', () => {
      const row = button.closest('.project-row');
      const expanded = !row.classList.contains('details-open');
      row.classList.toggle('details-open', expanded);
      button.setAttribute('aria-expanded', String(expanded));
      button.setAttribute('aria-label', expanded ? 'Hide project details' : 'Show project details');
    });
  });

  // Keep the displayed count in sync with the actual project list.
  const count = document.querySelector('.projects-count');
  if (count) count.textContent = `(${document.querySelectorAll('.project-row').length})`;
});

document.addEventListener('click', event => {
  if (event.target.classList.contains('modal')) closeModal(event.target.id);
});

document.addEventListener('keydown', event => {
  const modal = document.querySelector('.modal.active');
  if (event.key === 'Escape') {
    if (modal) closeModal(modal.id);
    document.querySelectorAll('.project-row.details-open').forEach(row => {
      row.classList.remove('details-open');
      const button = row.querySelector('.project-arrow');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Show project details');
    });
  }
  if (modal && event.key === 'Tab') {
    const controls = Array.from(modal.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]'));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  }
});
