import { SimplexNoise, SimplexNoiseProps } from '@music-vine/shaders-react';

export function SimplexNoiseExample(props: SimplexNoiseProps) {
  return <SimplexNoise style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
