import { NeuroNoise, type NeuroNoiseProps } from '@music-vine/shaders-react';

export function NeuroNoiseExample(props: NeuroNoiseProps) {
  return <NeuroNoise style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
