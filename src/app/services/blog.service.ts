import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Blog } from '../models/Blog';

@Injectable()
export class BlogService {
  blogsCollection: AngularFirestoreCollection<Blog>;
  blogDoc: AngularFirestoreDocument<Blog>;
  blogs: Observable<Blog[]>;
  blog: Observable<Blog>;

  constructor(private afs: AngularFirestore) {
    this.blogsCollection = this.afs.collection('blogs', ref => ref.orderBy('lastName', 'asc'));
  }

  getBlogs(): Observable<Blog[]> {
    // Get blogs with the id
    this.blogsCollection.snapshotChanges().pipe(map(changes => {
    //this.blogs : Blog = this.blogsCollection.snapshotChanges().pipe(map(changes => {
      console.log(changes)

      /*return changes.pipe(map(action => {
        const data = action.payload.doc.data() as Blog;
        data.id = action.payload.doc.id;
        return data;
      }));*/
    }));

    return this.blogs;
  }

  newBlog(blog: Blog) {
    this.blogsCollection.add(blog);
  }

  getBlog(id: string): Observable<Blog> {
    this.afs.doc<Blog>(`blogs/${id}`);
   // this.blog = this.blogDoc.snapshotChanges().pipe(map(action => {
    this.blogDoc.snapshotChanges().pipe(map(action => {
      console.log(action)
      /*if(action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Blog;
        data.id = action.payload.id;
        return data;
      }*/
    }));

    return this.blog;
  }

  updateBlog(blog: Blog) {
    this.blogDoc = this.afs.doc(`blogs/${blog.id}`);
    this.blogDoc.update(blog);
  }

  deleteBlog(blog: Blog) {
    this.blogDoc = this.afs.doc(`blogs/${blog.id}`);
    this.blogDoc.delete();
  }

}
