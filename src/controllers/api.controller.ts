import { Request, Response } from "express";

export class ApiController {
  // [GET] /api/authors
  getAuthorInfo(req: Request, res: Response) {
    const data = {
      author: {
        name: "iamphduc",
        birthYear: 2001,
        email: "iamphduc@gmail.com",
        university: "Ton Duc Thang",
      },
    };

    res.status(200).json({
      status: "success",
      data,
    });
  }
}
