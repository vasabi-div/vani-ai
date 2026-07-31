(function () {
  if (document.getElementById("vani-ai-widget")) return;

  const container = document.createElement("div");
  container.id = "vani-ai-widget";

  container.style.position = "fixed";
  container.style.inset = "0";
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.pointerEvents = "none";
  container.style.zIndex = "999999";

  const iframe = document.createElement("iframe");

  iframe.src = "https://vani-ai-seven.vercel.app/widget";

  iframe.style.position = "absolute";
  iframe.style.inset = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.background = "transparent";
  iframe.style.pointerEvents = "auto";

  container.appendChild(iframe);

  document.body.appendChild(container);
})();