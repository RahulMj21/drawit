export interface ITeam {
  createdBy: string;
  name: string;
  _id: string;
  _creationTime: string;
}
export interface IUser {
  name: string;
  email: string;
  image: string;
  activeTeam: string | null;
  _id: string;
  _creationTime: string;
}
