const Books =  require('../Models/Book');


let getAllBooks = async (req, res) => {
    try {
        const allBooks = await Books.find()|| {message:"No Books Found"};
        res.status(200).json(allBooks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

let getBookById = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id) || {message:"Book Not Found"};
        console.log(book);
       res.status(200).json(book);
    
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



let addNewBook = async (req, res) => {
    try {
        const newBook = new Books(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

let updateBook = async (req, res) => {

try {
   let id =  req.params.id;
   const updatedBook = await Books.findByIdAndUpdate(id, req.body,true);
   res.status(200).json(updatedBook);      
  
}catch(err){
    res.status(500).json({ message: err.message })
};
}

let deleteBook = async (req, res) => {
    try {
        await Books.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err)
     {
        res.status(500).json({ message: err.message });
    }
}   





module.exports = { getAllBooks,getBookById ,addNewBook , updateBook , deleteBook};