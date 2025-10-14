import { DotGrid, type DotGridProps } from '@music-vine/shaders-react';

export function DotGridExample(props: DotGridProps) {
  return <DotGrid style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
