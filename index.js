import h from "virtual-dom/h";
import createElement from "virtual-dom/create-element";
import diff from "virtual-dom/diff";
import patch from "virtual-dom/patch";

function box(count) {
  const length = 100 + count + "px";
  return h(
    "div",
    {
      className: "box",
      style: {
        width: length,
        height: length,
        lineHeight: length,
      },
    },
    [h("p", {}, count)]
  );
}
let count = 0;
let vTree = box(count);
let rootElement = createElement(vTree);
document.body.appendChild(rootElement);
setInterval(() => {
  count++;
  const newVTree = box(count);
  const patches = diff(vTree, newVTree);
  patch(rootElement, patches);
  vTree = newVTree;
}, 1000);
