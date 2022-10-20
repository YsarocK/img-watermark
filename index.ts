import { loadImage } from "./utils/canvas"

interface TextWatermarkOptions {
  file: HTMLImageElement,
  text: string
}

const AddTextWatermark = async (options: TextWatermarkOptions) => {
  const canvas = await loadImage(options.file);
  const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

  const LINEHEIGHT = 75;
  const lines = canvas.height / LINEHEIGHT;

  const watermark = options.text;

  const str = `${watermark} | `.repeat(5);
  context.font = '35px sans-serif';

  context.globalAlpha = 0.5;
  for (let i = 1; i < lines; i++) {
    const y = i * LINEHEIGHT;
    context.fillText(str, 0, y);
  }
  context.globalAlpha = 1;

  return;
};

export { AddTextWatermark };