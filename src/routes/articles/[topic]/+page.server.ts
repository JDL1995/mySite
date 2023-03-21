import { getArticles } from "../../../lib/server/server";
import type {PageServerLoad} from "../../$types"
import { getComments } from "../../../lib/server/db/index";
export const load:PageServerLoad = (({params})=>{
    const theTopic=params.topic;
const Articles=getArticles(theTopic);
const topic=params.topic;
const titleList=Articles
console.log(titleList)
//const Comments=getComments();
if(!params.title){

}else{
    
}
return {
    titleList,
    topic
    //Comments
};
} )satisfies PageServerLoad