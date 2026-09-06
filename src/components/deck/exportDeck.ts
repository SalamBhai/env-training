import { toPng, toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import { zipSync } from "fflate";

const W = 1920;
const H = 1080;

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function slideFilename(index: number, title: string, ext: string) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `advocacy-deck-${String(index + 1).padStart(2, "0")}-${slug}.${ext}`;
}

function base64ToUint8Array(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function captureSlide(el: HTMLElement, quality = 0.9): Promise<string> {
  // Capture as high-quality JPEG for lightweight file size and fast generation
  const dataUrl = await toJpeg(el, {
    width: W,
    height: H,
    quality,
    backgroundColor: "#fafaf9",
  });
  return dataUrl;
}

/**
 * Lightweight ZIP export using fflate (8KB zip engine)
 */
export async function downloadAllPngsZip(
  els: HTMLElement[],
  titles: string[],
  onProgress?: (done: number, total: number) => void,
) {
  const zipFiles: Record<string, Uint8Array> = {};

  for (let i = 0; i < els.length; i++) {
    const dataUrl = await captureSlide(els[i], 0.92);
    const base64 = dataUrl.split(",")[1] ?? "";
    const filename = slideFilename(i, titles[i], "jpg");
    zipFiles[filename] = base64ToUint8Array(base64);
    onProgress?.(i + 1, els.length);
    // Allow UI thread to breathe
    await new Promise((r) => setTimeout(r, 40));
  }

  const zipped = zipSync(zipFiles, { level: 6 });
  const blob = new Blob([zipped as any], { type: "application/zip" });
  triggerBlobDownload(blob, "environmental-advocacy-slides.zip");
}

/**
 * Lightweight PDF export using jsPDF with compressed images
 */
export async function downloadPdf(
  els: HTMLElement[],
  filename = "environmental-advocacy-presentation.pdf",
  onProgress?: (done: number, total: number) => void,
) {
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [W, H],
    compress: true,
  });

  for (let i = 0; i < els.length; i++) {
    const dataUrl = await captureSlide(els[i], 0.88);
    if (i > 0) {
      pdf.addPage([W, H], "landscape");
    }
    pdf.addImage(dataUrl, "JPEG", 0, 0, W, H, undefined, "FAST");
    onProgress?.(i + 1, els.length);
    await new Promise((r) => setTimeout(r, 40));
  }

  pdf.save(filename);
}

/**
 * Native Browser Vector Print-to-PDF
 */
export function printVectorPdf() {
  window.print();
}
