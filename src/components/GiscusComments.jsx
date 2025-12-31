import React, { useEffect, useRef } from 'react';

const GiscusComments = ({
  repo = 'ulogin417-debug/digitalfox-website',
  repoId = '',
  category = '',
  categoryId = '',
  mapping = 'pathname',
  reactionsEnabled = '1',
  emitMetadata = '0',
  inputPosition = 'bottom',
  theme = 'light',
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Avoid adding the script multiple times
    if (document.getElementById('giscus-script')) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.id = 'giscus-script';
    script.setAttribute('data-repo', repo);
    if (repoId) script.setAttribute('data-repo-id', repoId);
    if (category) script.setAttribute('data-category', category);
    if (categoryId) script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-reactions-enabled', reactionsEnabled);
    script.setAttribute('data-emit-metadata', emitMetadata);
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-theme', theme);

    ref.current.appendChild(script);

    return () => {
      // optional cleanup: remove giscus nodes if necessary
      const node = ref.current;
      if (!node) return;
      while (node.firstChild) node.removeChild(node.firstChild);
      const existing = document.getElementById('giscus-script');
      if (existing) existing.remove();
    };
  }, [repo, repoId, category, categoryId, mapping, reactionsEnabled, emitMetadata, inputPosition, theme]);

  return (
    <div className="mt-12">
      <div ref={ref} />
    </div>
  );
};

export default GiscusComments;
