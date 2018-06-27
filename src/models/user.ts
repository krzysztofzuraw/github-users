import * as uuid from "uuid";

export interface IUserDTO {
  id: string;
  login: string;
  html_url: string;
  avatar_url: string;
  blog: string;
  bio: string;
  public_repos: number;
  name: string;
}

export interface IUser {
  constructor: {
    create(user: IUserDTO): IUser;
  };

  id: string;
  login: string;
  htmlUrl: string;
  avatarUrl: string;
  name: string;
  blog: string;
  bio: string;
  publicRepos: number;

  serialize(): IUserDTO;
}

export class User implements IUser {
  // prettier-ignore
  "constructor": typeof User;
  id: string = uuid.v1();

  constructor(
    public login: string,
    public htmlUrl: string,
    public avatarUrl: string,
    public name: string,
    public blog: string,
    public publicRepos: number,
    public bio: string
  ) {}

  static create(dto: IUserDTO): IUser {
    const model = new User(
      dto.login,
      dto.html_url,
      dto.avatar_url,
      dto.name,
      dto.blog,
      dto.public_repos,
      dto.bio
    );
    model.id = dto.id;
    return model;
  }

  serialize(): IUserDTO {
    return {
      avatar_url: this.avatarUrl,
      bio: this.bio,
      blog: this.blog,
      html_url: this.htmlUrl,
      id: this.id,
      login: this.login,
      name: this.name,
      public_repos: this.publicRepos,
    };
  }
}
