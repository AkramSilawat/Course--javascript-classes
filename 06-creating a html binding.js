// class ListBinding {
//     constructor(element) {
//         this.listElement = element;
//         this.textList = ["dcode", "bottle"];
//     }
//     /* -- Makes an <li>text<li> element/tag  -- */

//     static createListItem (text){
//         const li = document.createElement("li");

//         li.textContent = text;

//         return li ;
//     }


//     update() {
//         /* Remove all existing <li> element/tags */

//         while (this.listElement.firstChild) {
//             this.listElement.removeChild(this.listElement.firstChild);
//         }

//         /* Fill <ul>/<ol> tag with <li> */
//         for (const text of this.textList) {
//             this.listElement.appendChild(ListBinding.createListItem(text));
//         }
//     }
// }

// listBinding.update();  // terminal console paste






// ---------------------------------------------------------------------------

// === Add Method And Remove Method === // 


class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = [];
    }
    /* -- Makes an <li>text<li> element/tag  -- */

    static createListItem(text) {
        const li = document.createElement("li");

        li.textContent = text;

        return li;
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

    add(text) {
        this.textList.push(text);
        this.update();

        // listBinding.add("dcode");  // terminal console paste
        // listBinding.add("dog");    // terminal console paste
    }


    remove(index) {
        this.textList.splice(index, 1);
        this.update();

        // listBinding.add("dcode");  // terminal console paste
        // listBinding.add("dog");    // terminal console paste
        // listBinding.add("bottle"); // terminal console paste

        // listBinding.remove(1); // terminal console paste
    }

}
























