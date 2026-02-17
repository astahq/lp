import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { enableVisualEditing } from '@sanity/visual-editing';
import type { HistoryAdapterNavigate } from '@sanity/visual-editing';

export function SanityVisualEditing() {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateRef = useRef(navigate);
  const studioNavigateRef = useRef<HistoryAdapterNavigate | null>(null);

  useEffect(() => {
    navigateRef.current = navigate;
  }, [navigate]);

  useEffect(() => {
    studioNavigateRef.current?.({
      type: 'push',
      url: `${location.pathname}${location.search}${location.hash}`,
    });
  }, [location]);

  useEffect(() => {
    return enableVisualEditing({
      refresh: async () => {
        window.dispatchEvent(new CustomEvent('sanity:refresh'));
      },
      history: {
        subscribe: (studioNavigate) => {
          studioNavigateRef.current = studioNavigate;
          studioNavigate({ type: 'push', url: window.location.href });
          return () => {
            studioNavigateRef.current = null;
          };
        },
        update: ({ type, url }) => {
          if (type === 'pop') {
            navigateRef.current(-1 as unknown as string);
            return;
          }
          const { pathname, search, hash } = new URL(url, window.location.origin);
          navigateRef.current(pathname + search + hash, { replace: type === 'replace' });
        },
      },
    });
  }, []);

  return null;
}
