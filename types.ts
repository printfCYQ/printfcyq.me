export type Repo = Endpoints["GET /user/repos"]["response"]["data"][number];
export type User = Endpoints["GET /user"]["response"]["data"];

export interface Article {
  _id: string;
  _draft: boolean;
  _empty: boolean;
  _extension: string;
  _file: string;
  _path: string;
  _source: string;
  _type: string;

  id: number;
  uid?: number;
  mtime: string;
  mtimeMs: number;
  date: string;
  ctimeMs: number;
  slug: string;
  title: string;
  draft: boolean;
}
