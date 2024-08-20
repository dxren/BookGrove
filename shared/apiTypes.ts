import { z } from "zod";

export const DummyBody = z.object({
  message: z.string(),
});
export type DummyBody = z.infer<typeof DummyBody>;
export const DummyResponse = z.object({
  message: z.string(),
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
export type UpdateCurrentUserResponse = z.infer<
  typeof UpdateCurrentUserResponse
>;

export const DeleteCurrentUserResponse = DummyResponse;
export type DeleteCurrentUserResponse = z.infer<
  typeof DeleteCurrentUserResponse
>;

/** Document API **/
export const CreateDocumentBody = DummyBody;
export type CreateDocumentBody = z.infer<typeof CreateDocumentBody>;
export const CreateDocumentResponse = DummyResponse;
export type CreateDocumentResponse = z.infer<typeof CreateDocumentResponse>;

export const GetDocumentResponse = DummyResponse;
export type GetDocumentResponse = z.infer<typeof GetDocumentResponse>;

export const UpdateDocumentBody = DummyBody;
export type UpdateDocumentBody = z.infer<typeof UpdateDocumentBody>;
export const UpdateDocumentResponse = DummyResponse;
export type UpdateDocumentResponse = z.infer<typeof UpdateDocumentResponse>;

export const DeleteDocumentResponse = DummyResponse;
export type DeleteDocumentResponse = z.infer<typeof DeleteDocumentResponse>;

/** Book API **/
//Schemas are values
//Types are types

export const CreateBookBodySchema = z.object({
  title: z.string(),
});

export const CreateBookResponseSchema = z.object({
  id: z.string(),
});
export type CreateBookResponseType = z.infer<typeof CreateBookResponseSchema>;

export type GetBookResponse = {
  id: string;
  title: string;
  summary: string;
};

export const GetAllBooksByUserIdResponseSchema = z.object({
  books: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      createdAt: z.date(),
      userId: z.string(),
      updatedAt: z.date().optional(),
      summary: z.string().optional(),
    })
  ),
});

export type GetAllBooksByUserIdResponseType = z.infer<
  typeof GetAllBooksByUserIdResponseSchema
>;

export const UpdateBookBodySchema = z.object({
  id: z.string(),
  title: z.string(),
});

export const UpdateBookResponseSchema = z.object({
  id: z.string(),
  title: z.string(),
  updatedAt: z.date(),
});
export type UpdateBookResponseType = z.infer<typeof UpdateBookResponseSchema>;

export const DeleteBookResponseSchema = z.object({
  message: z.string(),
});
export type DeleteBookResponseType = z.infer<typeof DeleteBookResponseSchema>;
