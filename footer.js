//THIS A WEB COMPONENT
class Footer extends HTMLElement{
constructor(){
    super();
    this.innerHTML=`I am a web component`
}
}

window.customElements.define('my-footer',Footer)