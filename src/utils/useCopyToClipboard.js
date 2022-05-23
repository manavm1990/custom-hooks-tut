import React from "react";

export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  });

  return [isCopied, setIsCopied];
}
