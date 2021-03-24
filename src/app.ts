import Payment from "./classes/Payment.js";
import Invoice from "./classes/Invoice.js";
import HasFormatter from "./Interfaces/HasFormatter.js";
import ListTemplate from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const list = new ListTemplate(
  document.querySelector(".item-list") as HTMLUListElement
);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  let values: [string, string, number] = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  switch (type.value) {
    case "invoice": {
      doc = new Invoice(...values);
      break;
    }
    default:
      doc = new Payment(...values);
      break;
  }

  list.render(doc, type.value, "down");
});

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uuid: number;
  type: number;
  data: T;
}

const docString: Resource<string> = {
  uuid: 10,
  type: ResourceType.AUTHOR,
  data: "Petras",
};

const docObject: Resource<object> = {
  uuid: 20,
  type: ResourceType.FILM,
  data: {
    item: "toilet paper",
  },
};

console.log(docString, docObject);
