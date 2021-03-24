import HasFormatter from "../Interfaces/HasFormatter.js";

export default class ListTemplate {
  constructor(private list: HTMLUListElement) {}

  render(doc: HasFormatter, heading: string, position: string): void {
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");

    h4.innerText = heading;
    p.innerText = doc.format();
    li.appendChild(h4);
    li.appendChild(p);

    if (position === "up") {
      this.list.prepend(li);
    } else {
      this.list.append(li);
    }
  }
}
