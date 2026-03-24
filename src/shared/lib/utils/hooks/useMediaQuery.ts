import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string) {
  const [match, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => setMatches(media.matches);
    listener();

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return match;
}
