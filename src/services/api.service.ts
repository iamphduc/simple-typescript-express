interface AuthorInfo {
  name: string;
  birthYear: number;
  email: string;
  university: string;
}

export class ApiService {
  getAuthorInfo(): AuthorInfo {
    return {
      name: "iamphduc",
      birthYear: 2001,
      email: "iamphduc@gmail.com",
      university: "Ton Duc Thang",
    };
  }
}
