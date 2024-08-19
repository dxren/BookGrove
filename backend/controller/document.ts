import { Router } from "express";
import { processRequest } from "zod-express-middleware";
import { CreateDocumentBody, CreateDocumentResponse, GetDocumentResponse, UpdateDocumentBody, UpdateDocumentResponse, DeleteDocumentResponse } from "../../shared/apiTypes";

export const documentRouter = Router();

// CREATE
documentRouter.post('/', processRequest({body: CreateDocumentBody}), (req, res) => {
    const result: CreateDocumentResponse = {message: `Create document: ${req.body.message}`};
    res.json(result);
});

// GET_CURRENT
documentRouter.get('/', (_, res) => {
    const result: GetDocumentResponse = {message: 'Get current document'};
    res.json(result);
});

// UPDATE_CURRENT
documentRouter.put('/', processRequest({body: UpdateDocumentBody}), (req, res) => {
    const result: UpdateDocumentResponse = {message: `Update current document: ${req.body.message}`};
    res.json(result);
});

// DELETE_CURRENT
documentRouter.delete('/', (_, res) => {
    const result: DeleteDocumentResponse = {message: `Delete current document`};
    res.json(result);
});