import { PulsingBorder, PulsingBorderProps } from '@music-vine/shaders-react';

export function PulsingBorderExample(props: PulsingBorderProps) {
  return <PulsingBorder style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
