import { isBoolean } from "./validation.js";

export default function Loading({ $target }) {
  const $loading = document.createElement("div");
  $loading.className = "Loading Modal";

  $target.appendChild($loading);

  this.state = false;

  this.setState = (nextState) => {
    if (isBoolean(nextState) && this.state !== nextState) {
      console.log("Loading >>>>", nextState);
      this.state = nextState;
      this.render();
    }
  };

  this.render = () => {
    $loading.innerHTML = `
      <div class="content">
        <img width="100%" src="https://woodaehyun/images/nyan-cat.gif" alt="Loading..." />
      </div>
    `;

    $loading.style.display = this.state ? "block" : "none";
  };
}
