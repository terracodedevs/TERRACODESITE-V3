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
    <section style={{ padding: "24px 0" }}>
      <FlipBook pages={pages} width={280} height={640} />
    </section>
  );
  
}