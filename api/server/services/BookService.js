import database from '../src/models';

class BookService {
    static async getAllBooks() {
        try {
            return await database.Book.findAll();
        } catch (e) {
            throw e;
        }
    }

    static async addBook(newBook) {
        try {
            return await database.Book.create(newBook);
        } catch (e) {
            throw e;
        }
    }

    static async updateBook(id, updateBook) {
        try {
            const bookToUpdate = await database.Book.findOne({
                where: { id: Number(id)}
            });
            if (bookToUpdate) {
                await database.Book.update(updateBook, { where: { id: Number(id)}});
                return updateBook;
            }
            return null;
        } catch (e) {
            throw e
        }
    }

    static async getABook(id) {
        try {
            return await database.Book.findOne({
                where: {id: Number(id)}
            });
        } catch (e) {
            throw e;
        }
    }
    static async deleteBook(id) {
        try {
            const bookToDelete = await database.Book.findOne({
                where: { id: Number(id)}
            });
            if (bookToDelete) {
                return await database.Book.destroy({
                    where: {id: Number(id)}
                });
            }
            return null
        }catch (e) {
            throw e;
        }
    }
}

export default BookService;
