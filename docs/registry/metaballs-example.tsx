import { Metaballs, MetaballsProps } from '@music-vine/shaders-react';

export function MetaballsExample(props: MetaballsProps) {
  return <Metaballs style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
