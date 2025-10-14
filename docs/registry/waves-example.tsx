import { Waves, WavesProps } from '@music-vine/shaders-react';

export function WavesExample(props: WavesProps) {
  return <Waves style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
