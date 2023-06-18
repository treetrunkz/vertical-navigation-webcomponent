class VerticalMenuTab extends HTMLElement {
    constructor() {
      super();
    }
    
    connectedCallback() {
      name = this.getAttribute('name');
      this.addEventListener('click', function() { 
        var highlighter = this.querySelector('.nav-item')
        highlighter.classList.toggle("active")
        var content = this.querySelector('.content');
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
      this.render();
    }
    
//   toggle(){
//      a ternary with "active" ? setStyle height=200% : height: 0%
//   }
    
    render(){
      this.innerHTML = "<div class='nav-item collapsible active'> " + name + "<a href='#'><i class=''></i></a></div><div class='content'><p>Project1, Project2, Project3</p></div>";
    }
    
  }

  customElements.define('vertical-tab', VerticalMenuTab);