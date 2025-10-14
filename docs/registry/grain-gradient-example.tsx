'use client';

import { GrainGradient, GrainGradientProps } from '@music-vine/shaders-react';

export function GrainGradientExample(props: GrainGradientProps) {
  return <GrainGradient style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
