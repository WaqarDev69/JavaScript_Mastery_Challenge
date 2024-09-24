

const library = {
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 1 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", copies: 2 },
        { title: "1984", author: "George Orwell", copies: 3 },
        { title: "Moby Dick", author: "Herman Melville", copies: 4 }
    ]
};

const minCopies = 3;

function getBooksWithMinCopies(library, minCopies) {
    let result=[]
    library.books.map((items)=>{
        
       if (items.copies <= minCopies) {
           
         result.push(items.title , items.copies)
            
        }
        
    })
    return result
    
   
}

console.log(getBooksWithMinCopies(library,minCopies))
