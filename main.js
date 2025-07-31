const myLibrary = [];

     //REFACTORING FROM PLAIN CONSTRUCTORS TO CLASSES

    /*function Book(title, author, pages, read){
        this.id = crypto.randomUUID();  
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;  
    }
    Book.prototype.toggle = function(){
        if(this.read.toUpperCase() === "READ"){
            return this.read = "Not Read";
        } else if(this.read.toUpperCase() === "NOT READ"){
            return this.read = "Read";
        }
    };*/

    class Book {
        constructor(title, author, pages, read){
            this.id = crypto.randomUUID();
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }

        toggle(){
            if(this.read.toUpperCase() === 'READ'){
                return this.read = 'Not Read';
            } else if(this.read.toUpperCase() === 'NOT READ'){
                return this.read = 'Read';
            }
        }
    }

    function addBookToLibrary(title, author, pages, read){
        return myLibrary.push(new Book(title, author, pages, read));
    } 

    addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'Not Read');
    addBookToLibrary(' To Kill a Mockingbird', 'Harper Lee', 281, 'Read');
    addBookToLibrary('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', 224, 'Read');
    addBookToLibrary('The Da Vinci Code', 'Dan Brown', 464, 'Read');
    addBookToLibrary('Gone with the Wind', 'Margaret Mitchell', 1037, 'Not Read');
    addBookToLibrary('Moby Dick', 'Herman Melville', 635, 'Not Read');
    addBookToLibrary('Little Women', 'Louisa May Alcott', 541, 'Read');
    addBookToLibrary('Animal Farm', 'George Orwell', 112, 'Read');
    addBookToLibrary('The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 307, 'Read');
    addBookToLibrary('The Picture of Dorian Gray', 'Oscar Wilde', 256, 'Not Read');
    addBookToLibrary('The Count of Monte Cristo', 'Alexandre Dumas', 1276, 'Not Read');

    //console.log(myLibrary[0].info());

    let mainDiv = document.getElementById("main-container");
    for (let i = 0; i < myLibrary.length; i++){
        //let id = myLibrary[i].id;
        let container = document.createElement("div");
        container.style.cssText = "flex: 1 1 200px; display: flex; min-width: 150px; flex-direction: column;";
        //div.setAttribute("data-id", `${myLibrary[i].id}`);
        container.style.border = "1px solid red";
        mainDiv.appendChild(container);

        let titleContainer = document.createElement("div");
        titleContainer.style.cssText = "height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;"
        container.appendChild(titleContainer);

        let authorContainer = document.createElement("div");
        authorContainer.style.cssText = "height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;"
        container.appendChild(authorContainer);

        let pageContainer = document.createElement("div");
        pageContainer.style.cssText = "height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;"
        container.appendChild(pageContainer);

        let readContainer = document.createElement("div");
        readContainer.style.cssText = "height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;"
        container.appendChild(readContainer);

        let buttonContainer = document.createElement("div");
        buttonContainer.style.cssText = "display: flex; height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;";
        let removeBook = document.createElement("button");
        container.appendChild(buttonContainer);
        removeBook.style.cssText = "height: auto; border:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;";
        removeBook.textContent = "Remove Book";
        removeBook.dataset.id = myLibrary[i].id;
        buttonContainer.appendChild(removeBook);

        let toggleContainer = document.createElement("div");
        toggleContainer.style.cssText = "display: flex; height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;";
        let toggleRead = document.createElement("button");
        container.appendChild(toggleContainer);
        toggleRead.style.cssText = "height: auto; border:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;";
        toggleRead.textContent = "Toggle Read Status";
        toggleRead.dataset.id = myLibrary[i].id;
        toggleContainer.appendChild(toggleRead);

        for(let key in myLibrary[i]){
            if(key === "title"){
                titleContainer.textContent = `Title: ${myLibrary[i].title}`;
            }
            
            if(key === "author"){
                authorContainer.textContent = `Author: ${myLibrary[i].author}`;
            }
            
            if(key === "pages"){
                pageContainer.textContent = `Pages: ${myLibrary[i].pages}`;
            }
            
            if(key === "read"){
                readContainer.textContent = `Read: ${myLibrary[i].read}`;
            }
            
        }
    }

    const showButton = document.getElementById("showDialog");
    const cancelButton = document.getElementById("cancel");
    const confirmButton = document.getElementById("confirm");
    const dialogBox = document.querySelector("dialog");
    const bookForm = document.getElementById("book-form");
    const bookTitle = document.getElementById("title");
    const bookAuthor = document.getElementById("author");
    const bookPages = document.getElementById("pages");
    const bookRead = document.getElementById("read");

    showButton.addEventListener("click", () => {
        dialogBox.showModal();
    });

    cancelButton.addEventListener("click", () => {
        dialogBox.close();
    });

    confirmButton.addEventListener("click", (event) => {
        event.preventDefault();

        if(!bookForm.checkValidity()){
            bookForm.reportValidity();
        } else {
            let bookTitleValue = bookTitle.value;
            let bookAuthorValue = bookAuthor.value;
            let bookPagesValue = bookPages.value;
            let bookReadValue = bookRead.value;
            
            addBookToLibrary(bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue);

            let container = document.createElement("div");
            container.style.cssText = "flex: 1 1 200px; display: flex; min-width: 150px; flex-direction: column;";
            container.style.border = "1px solid red";
            mainDiv.appendChild(container);

            let titleContainer = document.createElement("div");
            titleContainer.style.cssText = "height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;"
            container.appendChild(titleContainer);

            let authorContainer = document.createElement("div");
            authorContainer.style.cssText = "height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;"
            container.appendChild(authorContainer);

            let pageContainer = document.createElement("div");
            pageContainer.style.cssText = "height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;"
            container.appendChild(pageContainer);

            let readContainer = document.createElement("div");
            readContainer.style.cssText = "height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;"
            container.appendChild(readContainer);

            let buttonContainer = document.createElement("div");
            buttonContainer.style.cssText = "display: flex; height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;";
            let removeBook = document.createElement("button");
            container.appendChild(buttonContainer);
            removeBook.style.cssText = "height: auto; border:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;";
            removeBook.textContent = "Remove Book";
            removeBook.dataset.id = myLibrary[myLibrary.length - 1].id;
            buttonContainer.appendChild(removeBook);

            let toggleContainer = document.createElement("div");
            toggleContainer.style.cssText = "display: flex; height: auto; background: peachpuff; border-bottom:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;";
            let toggleRead = document.createElement("button");
            container.appendChild(toggleContainer);
            toggleRead.style.cssText = "height: auto; border:1px solid brown; flex: 1 0 auto; padding: 5px; font-weight: bold;";
            toggleRead.textContent = "Toggle Read Status";
            toggleRead.dataset.id = myLibrary[myLibrary.length - 1].id;
            toggleContainer.appendChild(toggleRead);
            
            titleContainer.textContent = `Title: ${bookTitleValue}`;
            authorContainer.textContent = `Author: ${bookAuthorValue}`;
            pageContainer.textContent = `Pages: ${bookPagesValue}`;
            readContainer.textContent = `Read: ${bookReadValue}`;
            dialogBox.close();
            }
    });

    mainDiv.addEventListener("click", event => {
        if(event.target.dataset.id && event.target.tagName === "BUTTON"){
            for(let i = 0; i < myLibrary.length; i++){
            if(event.target.dataset.id === myLibrary[i].id){
                if(event.target.textContent === "Remove Book"){
                myLibrary.splice(i,1);
                let removeButtonConatiner = event.target.parentNode;
                let removeButtonCard = removeButtonConatiner.parentNode;
                mainDiv.removeChild(removeButtonCard);
                break;
                } else if(event.target.textContent === "Toggle Read Status"){
                myLibrary[i].toggle();
                let toggleButtonContainer = event.target.parentNode;
                let bookCard = toggleButtonContainer.parentNode;
                bookCard.children[3].textContent = `Read: ${myLibrary[i].read}`;
                }
            }    
            }
        }
    })
