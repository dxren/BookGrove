import { Router } from "express";
import { CreateUserBody, CreateUserResponse, DeleteCurrentUserResponse, GetCurrentUserResponse, UpdateCurrentUserBody, UpdateCurrentUserResponse } from '../../shared/apiTypes';
import { processRequest } from 'zod-express-middleware';

export const userRouter = Router();

// CREATE
userRouter.post('/', processRequest({body: CreateUserBody}), (req, res) => {
    const result: CreateUserResponse = {message: `Create user: ${req.body.message}`};
    res.json(result);
});

// GET_CURRENT
userRouter.get('/', (_, res) => {
    const result: GetCurrentUserResponse = {message: 'Get current user'};
    res.json(result);
});

// UPDATE_CURRENT
userRouter.put('/', processRequest({body: UpdateCurrentUserBody}), (req, res) => {
    const result: UpdateCurrentUserResponse = {message: `Update current user: ${req.body.message}`};
    res.json(result);
});

// DELETE_CURRENT
userRouter.delete('/', (_, res) => {
    const result: DeleteCurrentUserResponse = {message: `Delete current user`};
    res.json(result);
});