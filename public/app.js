import Payment from "./classes/Payment.js";
import Invoice from "./classes/Invoice.js";
import ListTemplate from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const list = new ListTemplate(document.querySelector(".item-list"));
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values = [
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
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docString = {
    uuid: 10,
    type: ResourceType.AUTHOR,
    data: "Petras",
};
const docObject = {
    uuid: 20,
    type: ResourceType.FILM,
    data: {
        item: "toilet paper",
    },
};
console.log(docString, docObject);
