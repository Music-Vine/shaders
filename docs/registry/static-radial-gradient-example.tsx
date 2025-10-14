import { StaticRadialGradient, StaticRadialGradientProps } from '@music-vine/shaders-react';

export function StaticRadialGradientExample(props: StaticRadialGradientProps) {
  return <StaticRadialGradient style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
