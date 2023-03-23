export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const nameValidation = (name) => {
  return name.match(/^[a-zA-Z]+$/);
};
export const shortenText = (text, numb) => {
  if (text.length > numb) {
    return text.substring(0, numb).concat("...");
  }
  return text;
};
