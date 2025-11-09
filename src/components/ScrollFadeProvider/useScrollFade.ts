
import { useContext, useMemo } from 'react';
import { ScrollFadeContext } from './ScrollFadeProvider';

export const useScrollFade = () => {
  const ctx = useContext(ScrollFadeContext);
  const ref = useMemo(() => ctx?.createRef() ?? { current: null }, [ctx]);
  const visibleClass = 'scrollfade-visible';
  return { ref, visibleClass };
};
