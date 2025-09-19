import TerraButton from "@/components/button";
import FlipBook from "../../../components/FlipBokk";

// Helper: fetch image and return as DataURL (to avoid CORS/canvas issues)
async function toDataURL(url: string): Promise<string> {
  const res = await fetch(url, { cache: "no-cache" });
  const blob = await res.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export default function FlipbookDemo() {
  // Put your images in /public/portfolio so they’re served from the same origin
  const imagePaths = [
    "/portfolio/Screenshot 2025-09-15 155519.png",
    "/portfolio/Screenshot 2025-09-15 155529.png",
    "/portfolio/Screenshot 2025-09-15 155554.png",
    "/portfolio/Screenshot 2025-09-15 155607.png",
    "/portfolio/Screenshot 2025-09-15 155619.png",
    "/portfolio/Screenshot 2025-09-15 155628.png",
    "/portfolio/Screenshot 2025-09-15 155704.png",
    "/portfolio/Screenshot 2025-09-15 155721.png",
    "/portfolio/Screenshot 2025-09-15 155730.png",
  ];

  const pages = imagePaths.map((src, i) => (
    <img
      key={i}
      className="w-full h-10/12 bg-black/5 "
      src={src}
      alt={`Portfolio page ${i + 1}`}
      loading="lazy"
    />
  ));

  const handleDownlord = async () => {
    const jsPDF = (await import("jspdf")).default;

    // A4 portrait in mm
    const pdf = new jsPDF({ unit: "mm", format: "a4", compress: true });
    const margin = 5;
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < imagePaths.length; i++) {
      const dataUrl = await toDataURL(imagePaths[i]);
      const img = await loadImage(dataUrl);

      // Fit image inside page while preserving aspect ratio
      const imgRatio = img.width / img.height;
      let drawW = pageW - margin * 2;
      let drawH = drawW / imgRatio;
      if (drawH > pageH - margin * 2) {
        drawH = pageH - margin * 2;
        drawW = drawH * imgRatio;
      }
      const x = (pageW - drawW) / 2;
      const y = (pageH - drawH) / 2;

      if (i > 0) pdf.addPage();
      pdf.addImage(dataUrl, "PNG", x, y, drawW, drawH);
    }

    pdf.save("TerraCode-Portfolio.pdf");
  };

  return (
   <section className="w-full flex flex-col items-center justify-start px-2 sm:px-4 container mx-auto overflow-hidden my-20">
  {/* Single page container with proper aspect ratio */}
  <div
    className="mx-auto"
    style={{
      height: "75vh", 
      width: "min(65vh, 95vw)", // Portrait ratio for single page view
      maxWidth: "100%"
    }}
  >
    <FlipBook 
      pages={pages} 
      className="w-full h-full" 
      showCover={false} // Ensures the first page is displayed normally
    />
  </div>

  <TerraButton
    className="mt-6"
    padding="pl-6 pr-1 py-1 rounded-4xl text-sm md:text-lg gap-2"
    label="Download Company Portfolio (PDF)"
    onClick={handleDownlord}
  />
</section>
  );
}