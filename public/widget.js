(function () {
  // Prevent loading twice
  if (document.getElementById("vani-ai-widget")) return;

  // Create container
  const container = document.createElement("div");
  container.id = "vani-ai-widget";

  container.style.position = "fixed";
  container.style.bottom = "24px";
  container.style.right = "24px";
  container.style.width = "420px";
  container.style.height = "650px";
  container.style.border = "none";
  container.style.zIndex = "999999";

  // Create iframe
  const iframe = document.createElement("iframe");

  iframe.src = `${window.location.origin}/widget`;

  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.background = "transparent";
  iframe.style.overflow = "hidden";

  iframe.allow = "clipboard-write";

  container.appendChild(iframe);

  document.body.appendChild(container);
})();