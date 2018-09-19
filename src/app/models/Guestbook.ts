export interface Guestbook {
  id?: string;
  date: Date | any;
  title: string,
  author: string;
  authorEmail?: string;
  content: string;
}
