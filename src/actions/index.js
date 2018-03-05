export const ADD_BOOK = 'ADD_BOOK';
export const addBook = (title) => ({
    type: ADD_BOOK,
    title
});

export const ADD_ANNOTATION = 'ADD_ANNOTATION';
export const addAnnotation = (text,bookIndex) => ({
    type: ADD_ANNOTATION,
    text,
    bookIndex
});
