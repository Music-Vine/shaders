import { Spiral, SpiralProps } from '@music-vine/shaders-react';

export function SpiralExample(props: SpiralProps) {
  return <Spiral style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
