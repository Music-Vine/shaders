import { Swirl, SwirlProps } from '@music-vine/shaders-react';

export function SwirlExample(props: SwirlProps) {
  return <Swirl style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
