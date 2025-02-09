const heading1 = document.getElementById('heading1');
    const heading2 = document.getElementById('heading2');
    const paragraph = document.getElementById('paragraph');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const triggerHeight = window.innerHeight;

      if (scrollY < triggerHeight) {
        heading1.style.opacity = 1 - scrollY / triggerHeight;
        heading1.style.transform = `translate(-50%, calc(-50% - ${scrollY * 0.2}px))`;
        heading2.style.opacity = 0;
        heading2.style.transform = `translate(-50%, -50%)`;
        paragraph.style.opacity = 0;
        paragraph.style.transform = 'translate(-50%, 50%)';
      }

      if (scrollY >= triggerHeight && scrollY < triggerHeight * 2) {
        heading1.style.opacity = 0;
        heading2.style.opacity = (scrollY - triggerHeight) / triggerHeight;
        heading2.style.transform = `translate(-50%, calc(-50% - ${(scrollY - triggerHeight) * 0.2}px))`;
        paragraph.style.opacity = 0;
        paragraph.style.transform = 'translate(-50%, 50%)';
      }

      if (scrollY >= triggerHeight * 2) {
        heading2.style.opacity = 0;
        paragraph.style.opacity = 1;
        paragraph.style.transform = 'translate(-50%, 0)';
      }
    });