'use client';

import { useEffect, useRef } from 'react';
import { init } from '@waline/client';

export default function Waline({
  path,
}: {
  path: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const waline = init({
      el: ref.current,
      serverURL:
        process.env.NEXT_PUBLIC_WALINE_SERVER ||
        'https://comment.zyf070814.cyou',
      path,
    });

    return () => waline?.destroy();
  }, [path]);

  return <div ref={ref} />;
}