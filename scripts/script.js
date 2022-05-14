import { add } from './child.js';
import './player.js';
const template = document.createElement('template');
template.innerHTML = `
  <style>
    h3 {
      color: hotpink;
    }
  </style>
  <div class="user-card">
    <h3></h3>
    <div class="info">
      <p><slot name="email"/></p>
      <p><slot name="phone"/></p>
    </div>
    <button id="toggle-info">Hide Info</button>
    <img />
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    console.log(add(1, 2));
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('#toggle-info')
      .addEventListener('click', () => this.toggleInfo());
  }

  toggleInfo() {
    console.log(1);
  }
}

window.customElements.define('user-card', UserCard);
eva.replace();
