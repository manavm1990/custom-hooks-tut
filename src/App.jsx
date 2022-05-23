import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useCopyToClipboard from "./utils/useCopyToClipboard";

export default function App() {
  const [isCopied, setIsCopied] = useCopyToClipboard();

  const code = `return (
    <>
      <h1 className="mt-4 mb-8 text-center text-xl font-black text-white">
        Copy 2 Clipboard Button Demo
      </h1>
      <div className="place-center grid grid-flow-row auto-rows-max justify-center rounded px-16 drop-shadow-sm">
        <button
          type="button"
          className="relative top-12 right-4 transform justify-self-end text-4xl transition hover:scale-110  hover:drop-shadow hover:hue-rotate-30 motion-reduce:hover:transform-none hover:motion-reduce:transition-none"
          onClick={handleClick}
        >
          {isCopied ? "✔️" : "📋"}
        </button>
        <SyntaxHighlighter
          language="javascript"
          style={monokaiSublime}
          customStyle={{ padding: "2rem" }}
          className="rounded-sm"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
    `;

  const handleClick = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
  };

  return (
    <>
      <h1 className="mt-4 mb-8 text-center text-xl font-black text-white">
        Copy 2 Clipboard Button Demo
      </h1>
      <div className="place-center grid grid-flow-row auto-rows-max justify-center rounded px-16 drop-shadow-sm">
        <button
          type="button"
          className="relative top-12 right-4 transform justify-self-end text-4xl transition hover:scale-110  hover:drop-shadow hover:hue-rotate-30 motion-reduce:hover:transform-none hover:motion-reduce:transition-none"
          onClick={handleClick}
        >
          {isCopied ? "✔️" : "📋"}
        </button>
        <SyntaxHighlighter
          language="javascript"
          style={monokaiSublime}
          customStyle={{ padding: "2rem" }}
          className="rounded-sm"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
