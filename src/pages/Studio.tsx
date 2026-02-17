import { Studio } from 'sanity';
import { useEffect } from 'react';
import config from '../../sanity.config';

export default function StudioPage() {
  useEffect(() => {
    // Remove padding/margin from body when Studio is mounted
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      // Restore default styles when leaving Studio
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Studio config={config} />
    </div>
  );
}
