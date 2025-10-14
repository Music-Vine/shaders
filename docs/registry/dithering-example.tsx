'use client';

import { Dithering, DitheringProps } from '@music-vine/shaders-react';

export function DitheringExample(props: DitheringProps) {
  return <Dithering style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
