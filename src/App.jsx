import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function App() {
  return (
    <>
      <h1 className="mt-4 mb-8 text-center text-xl font-black text-white">
        Copy 2 Clipboard Button Demo
      </h1>
      <div className="place-center grid grid-flow-row auto-rows-max justify-center drop-shadow-sm">
        <button
          type="button"
          className="relative top-11 right-2 justify-self-end text-4xl"
        >
          📋
        </button>
        <SyntaxHighlighter
          language="javascript"
          style={monokaiSublime}
          customStyle={{ padding: "2rem" }}
          className="rounded-sm"
        >
          {`export default function App() {
  return (
    <>
      <h1 className="mt-4 mb-8 text-center text-xl font-black text-white">
        Copy 2 Clipboard Button Demo
      </h1>
      <div className="flex justify-center">
        <SyntaxHighlighter
          language="javascript"
          style={monokaiSublime}
          customStyle={{ padding: "2rem" }}
          className="rounded-sm"
        >
        👨🏾‍💻
        </SyntaxHighlighter>
      </div>
    </>`}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
