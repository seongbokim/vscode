import ColorBox from "./1119/components/ColorBox.jsx";
import { ColorProvider } from "./1119/contexts/color.jsx";

export default function App() {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}
