import React, { useEffect } from 'react';

const DisqusComments = ({ shortname = 'digitalfox' }) => {
  useEffect(() => {
    // Load Disqus script
    const script = document.createElement('script');
    script.src = `https://${shortname}.disqus.com/embed.js`;
    script.async = true;
    script.setAttribute('data-timestamp', new Date().getTime());
    document.body.appendChild(script);

    // Reset Disqus to reload comments for new page
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = window.location.pathname;
          this.page.url = window.location.href;
          this.page.title = document.title;
        },
      });
    }
  }, [shortname]);

  return (
    <div className="mt-12 text-white">
      <h3 className="text-2xl font-bold text-white mb-6">Comentarios</h3>
      <div id="disqus_thread" className="text-gray-300"></div>
      <noscript>
        Por favor habilita JavaScript para ver los comentarios.
      </noscript>
    </div>
  );
};

export default DisqusComments;
