import FlipBook from "../../../components/FlipBokk";

export default function FlipbookDemo() {
  const pages = [
    <img src="public/portfolio/Screenshot 2025-09-15 155519.png" alt="Cover" />,
    <img src="public/portfolio/Screenshot 2025-09-15 155529.png" alt="Cover" />,
    <img src="public/portfolio/Screenshot 2025-09-15 155554.png" alt="Cover" />,
    <img src="public/portfolio/Screenshot 2025-09-15 155607.png" alt="Cover" />,
    <img src="public/portfolio/Screenshot 2025-09-15 155619.png" alt="Cover" />,
    <img src="public/portfolio/Screenshot 2025-09-15 155628.png" alt="Cover" />,
    <img src="public/portfolio/Screenshot 2025-09-15 155704.png" alt="Cover" />,
    <img src="public/portfolio/Screenshot 2025-09-15 155721.png" alt="Cover" />,
    <img src="public/portfolio/Screenshot 2025-09-15 155730.png" alt="Cover" />,
  ];

  return (
    <section className="w-full h-full flex items-center justify-center p-2 sm:p-4">
      <FlipBook pages={pages} width={480} height={480} className="w-full h-full" />
    </section>
  );

}