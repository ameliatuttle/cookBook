export async function loadHeaderFooter() {
    const headerPath = '/partials/header.html';
    const footerPath = '/partials/footer.html';
    const headerTarget = document.getElementsByTagName('header')[0];
    const footerTarget = document.getElementsByTagName('footer')[0];
    
    // Load header and footer content
    await renderWithTemplate(loadTemplate, headerTarget, headerPath, 'afterBegin', false);
    await renderWithTemplate(loadTemplate, footerTarget, footerPath);
    
    // Update the header title based on the current page path
    const headerTitle = document.getElementById('header-title'); // ID of the dynamically injected header title element
    if (headerTitle) {
        switch (window.location.pathname) {
            case 'https://admirable-queijadas-6374e0.netlify.app/create-recipe/':
                headerTitle.textContent = 'The CookBook : Create Recipe';
                break;
            case 'https://admirable-queijadas-6374e0.netlify.app/find-recipe/':
                headerTitle.textContent = 'The CookBook : Find Recipe';
                break;
            default:
                headerTitle.textContent = 'The CookBook : Home';
        }
    }
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
