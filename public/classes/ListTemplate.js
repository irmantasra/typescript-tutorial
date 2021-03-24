export default class ListTemplate {
    constructor(list) {
        this.list = list;
    }
    render(doc, heading, position) {
        let li = document.createElement("li");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");
        h4.innerText = heading;
        p.innerText = doc.format();
        li.appendChild(h4);
        li.appendChild(p);
        if (position === "up") {
            this.list.prepend(li);
        }
        else {
            this.list.append(li);
        }
    }
}
