import { Router } from "express";
import { processRequest } from "zod-express-middleware";
import { CreateDocumentBody, CreateDocumentResponse, GetDocumentResponse, UpdateDocumentBody, UpdateDocumentResponse, DeleteDocumentResponse } from "../../shared/apiTypes";

export const documentRouter = Router();

// CREATE_DOCUMENT
documentRouter.post('/', processRequest({body: CreateDocumentBody}), (req, res) => {
    const result: CreateDocumentResponse = {message: `Create document: ${req.body.message}`};
    res.json(result);
});

// GET_DOCUMENT_BY_ID
documentRouter.get('/:id', (req, res) => {
    const result: GetDocumentResponse = {message: `Get document by id: ${req.params.id}`};
    res.json(result);
});

// GET_DOCUMENT_BY_BOOK
documentRouter.get('/book/:bookId', (req, res) => {
    const result: GetDocumentResponse = {message: `Get document by book id: ${req.params.bookId}`};
    res.json(result);
});

// GET_DOCUMENT_BY_TAG
documentRouter.get('/tag/:tag', (req, res) => {
    const result: GetDocumentResponse = {message: `Get document by tag: ${req.params.tag}`};
    res.json(result);
});


// UPDATE_DOCUMENT
documentRouter.put('/:id', processRequest({body: UpdateDocumentBody}), (req, res) => {
    const result: UpdateDocumentResponse = {message: `Update document ${req.params.id}: ${req.body.message}`};
    res.json(result);
});

// DELETE_DOCUMENT
documentRouter.delete('/:id', (req, res) => {
    const result: DeleteDocumentResponse = {message: `Delete document ${req.params.id}`};
    res.json(result);
});