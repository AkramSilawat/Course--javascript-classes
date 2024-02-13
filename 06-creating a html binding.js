class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = ["dcode", "bottle"];
    }
    /* -- Makes an <li>text<li> element/tag  -- */

    static createListItem (text){
        const li = document.createElement("li");

        li.textContent = text;

        return li ;
    }


    update() {
        /* Remove all existing <li> element/tags */

        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        /* Fill <ul>/<ol> tag with <li> */
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }
}

listBinding.update();  // terminal console paste





























