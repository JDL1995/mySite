import { getArticle } from "../lib/server/server";
import type {PageServerLoad} from "./$types"

export const load:PageServerLoad = (()=>{
const Article=getArticle();
return {
    Article
};
} )satisfies PageServerLoad;




/* 
<br />&nbsp; &nbsp; &nbsp; &nbsp;About me: I am a programmer with multiple years of experience
			in web development and knowledge of multiple programming languages. I am interested in
			building great web apps and using the best tools for optimizing: the end product, the
			efficiency of develpment, and expansion opportunity/scalability. creating new ways to do
			things and continuously improving knowledge and skill. I have the most experience with the
			javascript framework Angular, but am intruiged by all of the different javascript frameworks.
			I use AWS frequently for hosting my web applications.<br />





            
*/