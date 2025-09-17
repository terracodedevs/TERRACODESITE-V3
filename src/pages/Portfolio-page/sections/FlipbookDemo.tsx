import FlipBook from "../../../components/FlipBokk";

export default function FlipbookDemo() {
  const pages = [
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155519.png" alt="Portfolio page 1" />,
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155529.png" alt="Portfolio page 2" />,
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155554.png" alt="Portfolio page 3" />,
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155607.png" alt="Portfolio page 4" />,
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155619.png" alt="Portfolio page 5" />,
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155628.png" alt="Portfolio page 6" />,
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155704.png" alt="Portfolio page 7" />,
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155721.png" alt="Portfolio page 8" />,
    <img className="w-full h-full " src="/portfolio/Screenshot 2025-09-15 155730.png" alt="Portfolio page 9" />,
  ];

  return (
    <section className="w-full h-full flex items-center justify-center p-2 sm:p-4 ">
      <FlipBook pages={pages} className="w-full h-full" />
    </section>
  );

}