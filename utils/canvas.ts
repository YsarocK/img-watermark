const loadImage = async (file: HTMLImageElement) => {
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
  
  const orientation = file.width > file.height ? 'horizontal' : 'vertical'
  const canvasWidth = orientation === 'horizontal' ? 960 : 720;
  const canvasHeight = orientation === 'horizontal' ? 720 : 960;
  
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  
  context.drawImage(file, 0, 0, canvasWidth, canvasHeight);

  return canvas
}

export {
  loadImage
}