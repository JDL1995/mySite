import { awsec2, cplusplusarticles2, Topics, type article, type modulator, type modulator2} from "./types";
import { cplusplusarticles } from "./types";

import { webDevArticles2 } from "./types";
export function getArticle(topic:string,title:string):article{
    if(topic=="C++"){
        const myArticle2= cplusplusarticles2[title];
        return myArticle2;
    }else if(topic=="WebDev"){
        const myArticle2= webDevArticles2[title] 
        return myArticle2;
    }
   else{
    const myArticle2= webDevArticles2[title] 
        return myArticle2;
   }
}

export async function getArticle2(topic:string,title:string):Promise<article>{
    if(topic=="C++"){
        console.log(title,"\n",cplusplusarticles2)
        const myArticle2= cplusplusarticles2[title];
        console.log(myArticle2);
        return new Promise<article>((resolve)=>{resolve(JSON.parse(JSON.stringify(myArticle2))) })
    }else if(topic=="WebDev"){
        const myArticle2= webDevArticles2[title] 
        return new Promise<article>((resolve)=>{resolve(JSON.parse(JSON.stringify(myArticle2))) })
    }
   else{
    const myArticle2= webDevArticles2[title]  
    return new Promise<article>((resolve)=>{resolve(JSON.parse(JSON.stringify(myArticle2))) })
        
   }
   
    
}
export function getArticles(topic:string){
    return Topics[topic];
    
}
export function doIt(strin:string){
   
}


