import { Request, Response } from "express";

/**
 * APIController
 * @route GET /api/authors
 */

// [GET] /api/authors
export const getAuthorInfo = (req: Request, res: Response): void => {
  res.status(200).json({
    status: "success",
    data: {
      author: {
        name: "iamphduc",
        birthYear: 2001,
        email: "iamphduc@gmail.com",
        university: "Ton Duc Thang",
      },
    },
  });
};
