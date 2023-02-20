import Database from 'better-sqlite3';
import dotenv from 'dotenv';
const DB_PATH:any = process.env['DB_PATH']

const db = new Database(DB_PATH,{verbose: console.log});

export function getComments(limit=20):Comment[]{
    const sql=`select c.Name as name,
    c.content as content,
    c.articleId as articleId
    from comments c
    limit $limit`;
    const stmt = db.prepare(sql);
    const rows = stmt.all({limit});
    return rows as Comment[]
}