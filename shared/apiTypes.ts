import {z} from 'zod';

export const DummyBody = z.object({
    message: z.string()
});
export type DummyBody = z.infer<typeof DummyBody>;
export const DummyResponse = z.object({
    message: z.string()
});
export type DummyResponse = z.infer<typeof DummyResponse>;

/** User API **/
export const CreateUserBody = DummyBody;
export type CreateUserBody = z.infer<typeof CreateUserBody>;
export const CreateUserResponse = DummyResponse;
export type CreateUserResponse = z.infer<typeof CreateUserResponse>;

export const GetCurrentUserResponse = DummyResponse;
export type GetCurrentUserResponse = z.infer<typeof GetCurrentUserResponse>;

export const UpdateCurrentUserBody = DummyBody;
export type UpdateCurrentUserBody = z.infer<typeof UpdateCurrentUserBody>;
export const UpdateCurrentUserResponse = DummyResponse;
export type UpdateCurrentUserResponse = z.infer<typeof UpdateCurrentUserResponse>;

export const DeleteCurrentUserResponse = DummyResponse;
export type DeleteCurrentUserResponse = z.infer<typeof DeleteCurrentUserResponse>;

/** Document API **/
export const CreateDocumentBody = DummyBody;
export type CreateDocumentBody = z.infer<typeof CreateDocumentBody>;
export const CreateDocumentResponse = DummyResponse;
export type CreateDocumentResponse= z.infer<typeof CreateDocumentResponse>;

export const GetDocumentResponse = DummyResponse;
export type GetDocumentResponse= z.infer<typeof GetDocumentResponse>;

export const UpdateDocumentBody = DummyBody;
export type UpdateDocumentBody = z.infer<typeof UpdateDocumentBody>;
export const UpdateDocumentResponse = DummyResponse;
export type UpdateDocumentResponse= z.infer<typeof UpdateDocumentResponse>;

export const DeleteDocumentResponse = DummyResponse;
export type DeleteDocumentResponse= z.infer<typeof DeleteDocumentResponse>;