const setCookie = (name, data) => {
  document.cookie = `${name}=${data}; max-age=${24 * 60 * 60}; path=/`;
};

export { setCookie };
