function n(r, t) {
  if (!r)
    return new Error("请传入缓存键");
  if (!t)
    return new Error("请传入缓存值");
  const o = JSON.stringify({ type: typeof t, value: t });
  return localStorage.setItem(r, o), !0;
}
function a(r) {
  if (!r)
    return new Error("请传入缓存键");
  let t = localStorage.getItem(r) || "";
  try {
    return JSON.parse(t).value;
  } catch {
    return t;
  }
}
function u(r) {
  return r ? (localStorage.removeItem(r), !0) : new Error("请传入缓存键");
}
export {
  a as getStorage,
  u as removeStorage,
  n as setStorage
};
