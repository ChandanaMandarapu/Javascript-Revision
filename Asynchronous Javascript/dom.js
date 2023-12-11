const createNewElement = (tag, text) => {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
};

const appendToBody = element => {
  document.body.appendChild(element);
};

const heading = createNewElement('h1', 'Dynamic Content with JavaScript');
appendToBody(heading);
