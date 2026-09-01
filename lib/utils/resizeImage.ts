// Downscales a photo client-side before it's base64-encoded and sent to
// /api/ask — a phone camera photo can be 5-10MB, well past what's worth
// sending: it costs more in API tokens for no real accuracy gain on a
// text-heavy homework photo, and risks the ~4MB request-body ceiling of a
// typical serverless function. Returns { base64, mediaType } with no data
// URL prefix (that's what the Anthropic API's base64 image source wants).
export async function resizeImageForUpload(
  file: File,
  maxDimension = 1600,
  quality = 0.82
): Promise<{ base64: string; mediaType: string }> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');
  ctx.drawImage(bitmap, 0, 0, width, height);

  const dataUrl = canvas.toDataURL('image/jpeg', quality);
  const [, base64] = dataUrl.split(',');
  return { base64, mediaType: 'image/jpeg' };
}
