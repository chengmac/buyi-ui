const getScroll = (w: Window, top?: boolean): number => {
  let ret = w[`page${top ? 'Y' : 'X'}Offset`];
  const method = `scroll${top ? 'Top' : 'Left'}`;
  if (typeof ret !== 'number') {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
};

type CompatibleDocument = {
  parentWindow?: Window;
} & Document;

export const offset = (el: Element) => {
  const rect = el.getBoundingClientRect();
  const pos = {
    left: rect.left,
    top: rect.top,
  };
  const doc = el.ownerDocument as CompatibleDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w!);
  pos.top += getScroll(w!, true);
  return pos;
};
