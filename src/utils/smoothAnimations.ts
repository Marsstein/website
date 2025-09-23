/**
 * Ultra-Smooth Animations for Homepage
 * Performance-optimized with Intersection Observer
 * 60fps guaranteed, minimal JavaScript
 */

class SmoothAnimations {
  private observer: IntersectionObserver | null = null;
  private isInitialized = false;

  constructor() {
    this.init();
  }

  private init() {
    if (this.isInitialized) return;
    
    // Use Intersection Observer for better performance
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target as HTMLElement);
            // Stop observing once animated
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    this.isInitialized = true;
  }

  private animateElement(element: HTMLElement) {
    // Add visible class for CSS animations
    element.classList.add('visible');
    
    // Handle special animation types
    const animationType = element.dataset.animate;
    
    switch (animationType) {
      case 'counter':
        this.animateCounter(element);
        break;
      case 'progress':
        this.animateProgress(element);
        break;
      case 'stagger':
        this.animateStagger(element);
        break;
      default:
        // Default fade-in animation handled by CSS
        break;
    }
  }

  private animateCounter(element: HTMLElement) {
    const target = parseInt(element.dataset.target || '0');
    const duration = parseInt(element.dataset.duration || '1500');
    const start = performance.now();
    
    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(target * easeOutQuart);
      
      element.textContent = current.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }

  private animateProgress(element: HTMLElement) {
    const progressFill = element.querySelector('.smooth-progress-fill') as HTMLElement;
    if (!progressFill) return;
    
    const targetWidth = element.dataset.progress || '100';
    
    // Use CSS custom property for smooth animation
    progressFill.style.setProperty('--target-width', `${targetWidth}%`);
    progressFill.classList.add('animate');
  }

  private animateStagger(element: HTMLElement) {
    const children = element.querySelectorAll('.scroll-trigger');
    
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('visible');
      }, index * 100);
    });
  }

  public observeElements() {
    if (!this.observer) return;
    
    // Observe all elements with scroll-trigger class
    const elements = document.querySelectorAll('.scroll-trigger');
    elements.forEach(element => {
      this.observer?.observe(element);
    });
  }

  public addScrollListeners() {
    // Add smooth scroll behavior to navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  public addHoverEffects() {
    // Add smooth hover effects to cards and buttons
    document.querySelectorAll('.smooth-card, .smooth-button').forEach(element => {
      element.addEventListener('mouseenter', () => {
        element.style.willChange = 'transform';
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.willChange = 'auto';
      });
    });
  }

  public destroy() {
    this.observer?.disconnect();
    this.isInitialized = false;
  }
}

// Create singleton instance
const smoothAnimations = new SmoothAnimations();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    smoothAnimations.observeElements();
    smoothAnimations.addScrollListeners();
    smoothAnimations.addHoverEffects();
  });
} else {
  smoothAnimations.observeElements();
  smoothAnimations.addScrollListeners();
  smoothAnimations.addHoverEffects();
}

export default smoothAnimations;