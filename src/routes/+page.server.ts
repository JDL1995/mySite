import { getArticle } from "../lib/server/server";
import type {PageServerLoad} from "./$types"

export const load:PageServerLoad = (()=>{
const Article=getArticle();
return {
    Article
};
} )satisfies PageServerLoad;




