import { Request, Response } from "express";
import { boundMethod } from "autobind-decorator";

import { ApiService } from "../services/api.service";

export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  // [GET] /api/authors
  @boundMethod
  getAuthorInfo(req: Request, res: Response) {
    const author = this.apiService.getAuthorInfo();

    res.status(200).json({
      status: "success",
      data: { author },
    });
  }
}
