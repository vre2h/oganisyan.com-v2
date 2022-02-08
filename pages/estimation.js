import ColoredTag from "../components/ColoredTag";
import MetaHeader from "../components/MetaHeader";

export default function Estimation() {
  return (
    <main className="w-full xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto my-8">
      <MetaHeader />
      <ColoredTag>In progress</ColoredTag>
      <ColoredTag>Draft</ColoredTag>
    </main>
  );
}
