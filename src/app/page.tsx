import { DarkMode } from "@/components/DarkMode";
import { SparklesPreview } from "@/components/SparklesPreview";
import { MovingBorderDemo } from "@/components/ui/MovingBorderDemo";

export default function Home() {
  return (
    <main className="">
      <SparklesPreview />
      <MovingBorderDemo />
      <DarkMode />
    </main>
  );
}
