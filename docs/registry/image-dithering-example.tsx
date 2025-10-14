import { ImageDithering, ImageDitheringProps } from '@music-vine/shaders-react';

export function ImageDitheringExample(props: ImageDitheringProps) {
  return <ImageDithering style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
