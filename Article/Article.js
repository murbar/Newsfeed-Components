// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    const readButton = document.createElement('div');
    readButton.classList.add('read-button');
    readButton.textContent = 'Mark Read';
    this.readButton = readButton;
    this.domElement.appendChild(this.readButton);

    this.readButton.addEventListener('click', () => this.removeArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    const articleClasses = this.domElement.classList;
    articleClasses.toggle('article-open');
    if (articleClasses.contains('article-open')) {
      this.expandButton.textContent = 'Click to Close';
    } else {
      this.expandButton.textContent = 'Click to Expand';
    }
  }

  removeArticle() {
    this.domElement.classList.add('article-remove');
    // wait for the CSS animation to complete
    setTimeout(() => {
      this.domElement.style.display = 'none';
    }, 200);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.articles .article');
articles.forEach(a => new Article(a));
