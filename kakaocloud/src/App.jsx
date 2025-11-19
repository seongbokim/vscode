import ColorBox from "./1119/components/ColorBox.jsx";
import { ColorProvider } from "./1119/contexts/color.jsx";
import SelectColors from "./1119/components/SelectColors.jsx";
import "./App.css";

export default function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}
