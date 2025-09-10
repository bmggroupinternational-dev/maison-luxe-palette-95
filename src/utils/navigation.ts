export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleNavigation = (href: string, navigate?: (path: string) => void) => {
  if (href.startsWith('#')) {
    // Hash link - smooth scroll to section
    const elementId = href.substring(1);
    smoothScrollTo(elementId);
  } else if (navigate) {
    // Route navigation
    navigate(href);
  } else {
    // Fallback to window location
    window.location.href = href;
  }
};