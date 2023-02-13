import { getArticle } from "../../lib/server/server";
import type {PageServerLoad} from "./$types"
import { getComments } from "../../lib/server/db/index";
export const load:PageServerLoad = (()=>{
const Article=getArticle();
//const Comments=getComments();
return {
    Article
    //Comments
};
} )satisfies PageServerLoad