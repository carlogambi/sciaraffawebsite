const objToStyled = (obj) =>
  Object.entries(obj).reduce(
    (a, [k, i]) =>
      `${a.replace(/[A-Z]/gm, (e) => `-${e.toLowerCase()}`)}${k}:${i};`,
    ''
  );

export default objToStyled;
