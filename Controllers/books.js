const books =  require('../Models/books');


let getAllBooks = async (req, res) => {
    try {
        let allBooks = await books.find();
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

let GetBookById = async (req, res) => {
    try {
        let id = req.params.id; 
        let book = await books.findById(id);
        if (book) {
            res.status(200).json(book);}
        else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



let addNewBook = async (req, res) => {
    try {
        let newBook = new books(req.body);
        let addedBook = await newBook.save();
        res.status(201).json(addedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

let updateBook = async (req, res) => {

try {
   let id =  req.params.id;
   let updatedBook = await books.findByIdAndUpdate(id, req.body, { new: true });
   res.status(200).json(updatedBook);      
  
}catch(error){
    res.status(500).json({ message: error.message })
};
}

let deleteBook = async (req, res) => {
    try {
        let id = req.params.id;
        await books.findByIdAndDelete(id);
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   





module.exports = { getAllBooks,GetBookById ,addNewBook , updateBook , deleteBook};