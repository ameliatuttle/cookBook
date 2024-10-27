export async function loadHeaderFooter() {
    const headerPath = '/partials/header.html';
    const footerPath =  '/partials/footer.html';
    const headerTarget = document.getElementsByTagName('header')[0];
    const footerTarget = document.getElementsByTagName('footer')[0];
    renderWithTemplate(
      loadTemplate, 
      headerTarget, 
      headerPath, 
      'afterBegin', 
      false);
    renderWithTemplate(loadTemplate, footerTarget, footerPath);
  }

  export async function renderWithTemplate(templateFn, parentElement, data, position = 'afterBegin', clear = false, callback) {
    if(clear){
      parentElement.innerHTML = '';
    }
  
    const htmlTemplate = await templateFn(data);
  
    parentElement.insertAdjacentHTML(position, htmlTemplate.innerHTML);
  
    if(callback) {
      callback();
    }
  }

  export async function loadTemplate(path) {
    let html = await fetch(path).then(convertToText);
    let template = document.createElement('template')
    template.innerHTML = html;
  
    return template;
  }

  function convertToText(res) {
    if (res.ok) {
      return res.text();
    } else {
      throw new Error('Bad Response');
    }
  }
