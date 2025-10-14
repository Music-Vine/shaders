import { Voronoi, VoronoiProps } from '@music-vine/shaders-react';

export function VoronoiExample(props: VoronoiProps) {
  return <Voronoi style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
