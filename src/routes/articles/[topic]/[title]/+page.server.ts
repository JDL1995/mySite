import { getArticle, getArticle2 } from "../../../../lib/server/server";
import type {PageServerLoad} from "../../../$types"
import { getComments } from "../../../../lib/server/db/index";
import type { article, articleContent, articleContentPlus, bulletpoint, modulator } from "@/lib/server/types";
import type { modulator2 } from "@/lib/server/types";
import { jewish } from "@/lib/server/types";

export type articleLoader={
    Article:article;
    ArticleTitle:string;
    extras:Promise<articleContent[]>;
   
}
function getIndicesOf(searchStr:string, str:string, caseSensitive:boolean) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    console.log('ohml: ',indices)
    return indices;
}

function getImg_Html(str:string){
    let ImgIndexes:number[]=[];
    let HtmlIndexes:number[]=[];
    ImgIndexes=getIndicesOf("****",str,false);
    HtmlIndexes=getIndicesOf("^^^^",str,false);
    let toRet:modulator={html:HtmlIndexes,img:ImgIndexes};
	if(HtmlIndexes.length!=0){
		console.log("okeyy");
	}
   // console.log("toret here, ",toRet)
    return toRet;
}
function subify(content:string, html:string[],img:string[]){

    let newMod:modulator=getImg_Html(content);
    var i = newMod.html.length;
    var j=newMod.img.length;
    console.log("i and j:",i,j)
    console.log("ceral")
    let newDivs:modulator2[]=[];
    let stringPos=0;
    if(html.length!=0){
    if(html[0].search("<a")!=-1){
        console.log("i and j:",i,j,"\n","newMod: ",newMod);
    }
}
	//if(content==)
    while((newMod.img.length==0&&newMod.html.length==0)==false){
        console.log("newMod here, ",newMod);
        if(html.length!=0){console.log("barnacle: ",content)}
        if((newMod.html.length!=0 &&newMod.img.length!=0)==true){
        if(newMod.html[0]<newMod.img[0]){
        let newstr=content.substring(stringPos,newMod.html[0]);
        let newModulator:modulator2={isHtml:false,isImg:false,content:newstr}
        newDivs.push(newModulator);
        let newItem:modulator2={isHtml:true,isImg:false,content:html[0]}
            newDivs.push(newItem);
            html.shift()
            newMod.html.shift()
            stringPos=newMod.html[0]+5;
        }else{
            let newstr=content.substring(stringPos,newMod.img[0]);
        let newModulator:modulator2={isHtml:false,isImg:false,content:newstr}
        newDivs.push(newModulator);
        let newItem:modulator2={isHtml:false,isImg:true,content:img[0]}
            newDivs.push(newItem);
            img.shift()  
            stringPos=newMod.img[0]+5;
            newMod.img.shift()
          
        }
        }
        else if(newMod.html.length!=0){
			console.log("htmml.l!=0")
            let newstr=content.substring(stringPos,newMod.html[0]);
            stringPos=newMod.html[0]+5;
        let newModulator:modulator2={isHtml:false,isImg:false,content:newstr}
        newDivs.push(newModulator);
        if(html[0]==undefined){
            console.log("awoooga");
            console.log(content);
        }
        let newItem:modulator2={isHtml:true,isImg:false,content:html[0]}
            newDivs.push(newItem);
            html.shift()
            newMod.html.shift()
        }else{
            let newstr=content.substring(stringPos,newMod.img[0]);
        let newModulator:modulator2={isHtml:false,isImg:false,content:newstr}
        newDivs.push(newModulator);
        let newItem:modulator2={isHtml:false,isImg:true,content:img[0]}
            newDivs.push(newItem);
            html.shift() 
            stringPos=newMod.img[0]+5;
            newMod.img.shift()
           
        }
    }
    if(stringPos<content.length &&stringPos!=0){
        var final=content.substring(stringPos,content.length);
        let finalModulator:modulator2={isHtml:false,isImg:false,content:final};
        newDivs.push(finalModulator);
    }
    console.log("newdivs here",newDivs);
	return newDivs
    //const renderer= new renderImgUrl(data);
    /**<li class="li2"> {#if sb.Html}{subify(sb.Content,sb.Html)}
                                    {/if}</li>*/
    //content.

}



export type withIn={
    item:any[];
    index:number;
}
async function loadAll(Article:article){
  
    
   // c=0
    const filtered2=Article.Subtitles.filter(function(st,index){if (st.Bp.length!=0){
        let a:withIn={item:st.Bp,index:index}
        return a;
    }});
    let selectedAnimals = Article.Subtitles.map((st,t) => { if(st.Bp.length!=0) { let a:withIn={item:st.Bp,index:t}
    return a;}else return null} ).filter(st=>st);


    console.log("yes!?");
    console.log(filtered2);
    console.log("selected",selectedAnimals)
    var myarr: bulletpoint[][]=[];
    var r2:bulletpoint[]=[];
    let new1
    let articleCT2:articleContent[]=[];
   selectedAnimals.forEach(st=>{
    
    st!.item.forEach((val:bulletpoint,index)=>{
        console.log("mahgerd?",val)
        if(val.Html.length!=0 || val.Img.length!=0){
            console.log("mahgerd?")
            let new01:modulator2[]=subify(val.Content,val.Html,val.Img);
            let new1={st:st!?.index,sst:60,bp:index,sbp:60,stuff:new01}
            articleCT2.push(new1)

        }
        if(val.SubBullets.length!=0){
            val.SubBullets.forEach((sb,indie)=>{
                if(sb.Html.length!=0||sb.Img.length!=0)
                {
                    console.log("subifyingouter, ",sb.Html)
            let new01:modulator2[]=subify(sb.Content,sb.Html,sb.Img);
            let new1={st:st!?.index,sst:60,bp:index,sbp:indie,stuff:new01}
            articleCT2.push(new1);

                }
            },articleCT2)
        }
    },articleCT2)
   
   },articleCT2)
   console.log("jeebus",articleCT2)
   

    
   console.log("yes!?");
   console.log(r2);
    let undm=Article;
    let articleCT:articleContent[]=articleCT2;
   let a=0;
   let b=0;
   let c=0;
   let d=0;
    for (const st of Article!.Subtitles){
        c=0;
       
       
        if(st.Bp.length>0){
    for (const bp1 of st.Bp){
        if((bp1.Html.length!=0) || (bp1.Img.length!=0)){
            console.log("found containing: ",bp1)
            let myThing:modulator2[]= subify(bp1.Content,bp1.Html,bp1.Img)
            let myct:articleContent={st:a,sst:60,bp:c,sbp:60,stuff:myThing};
            articleCT.push(myct)
        }
  if(bp1.SubBullets.length!=0){
    var zed=0;
    for(const sbp1 of bp1.SubBullets){
        if((sbp1.Html.length!=0) || (sbp1.Img.length!=0)){
            console.log("found containing: ",sbp1)
            let myThing:modulator2[]= subify(sbp1.Content,sbp1.Html,sbp1.Img)
            console.log("hee",myThing)
            let myct:articleContent={st:a,sst:60,bp:c,sbp:zed,stuff:myThing};
            articleCT.push(myct)
        }
        zed++
    } 
 }
    c++;
    }
}

        b=0;
    for (const subSubtitle of st.SubSubtitles){
            c=0;
         for (const bp of subSubtitle.Bullets){
            if((bp.Html.length!=0) || (bp.Img.length!=0)){
           
                console.log("found containing: 3x",bp)
                let myThing:modulator2[]= subify(bp.Content,bp.Html,bp.Img)
                let myct:articleContent={st:a,sst:b,bp:c,sbp:60,stuff:myThing};
                console.log("now showing ac for myct",myct);
                articleCT.push(myct)
            }
            d=0;
            for(const subBullet of bp.SubBullets){
          
            if((subBullet.Html.length!=0) || (subBullet.Img.length!=0)){
                console.log("holy nigeria, ", subBullet.Content)
              
               // console.log("subifyingouter, ",getOuter(subBullet.Html))
                let myThing2:modulator2[]=subify(subBullet.Content,subBullet.Html,subBullet.Img);
               
                let myct:articleContent={st:a,sst:b,bp:c,sbp:d,stuff:myThing2};
                articleCT.push(myct)
                
            }
            d++;
        }
        d=0;
            c++;
        }
        c=0;

        b++;
    }
    b=0;
    a++;
    }
//if(articleCT.)
let selectedAnimals2:articleContent[] = articleCT.map((ct,t):articleContent => { 
    if(ct.stuff.length!=0) { 
        ct.stuff.forEach((stuffItem,index)=>{
            if(stuffItem.content==""){
                ct.stuff.splice(index, 1);
            }
        })
   }
return ct}).filter(ct=>ct);
    let difference = articleCT.filter(x => !selectedAnimals2.includes(x));
    console.log("big kahoona \n",difference,"\n",selectedAnimals2?.length,"\n",articleCT.length);

console.log("sup: ",articleCT,". a is: ",a);
const r:articleContentPlus={ac:selectedAnimals2,article:undm}

return new Promise<articleContentPlus>((resolve)=>{resolve(r)});

}


async function wedone(topic:string,name:string){
    let fa= await getArticle2(topic,name);
    let ba=await loadAll(fa)
    

    return ba;

}
/*
async function fuck(a,b){
    let a=await getArticle2(a,b);
    let b=await wedone(a);
    return b;
}
*/
/*
export const load:PageServerLoad()=>Promise<articleContent[]>=(()=>{
    
    return promise;
})satisfies PageServerLoad;
*/
export const load:PageServerLoad = (({params})=>{
   // const jew= jewish();
    const ArticleTitle=params.title;
const Article=getArticle(params.topic,ArticleTitle);
const promise=wedone(params.topic,ArticleTitle);
const imgUrl1= new URL('@/lib/assets/img', import.meta.url).href;

//const niggeeria=fuck(params.topic,params.title)
//console.log("fucka ")

 //let loadEvery:Promise<articleContent[]>=loadAll(Article);
 //export const loadEvery1=loadEvery
//const Comments=getComments();
//let myThin:articleLoader={Article:Article,ArticleTitle:ArticleTitle,extras:wedone(Article)}
return {
    Article,
    ArticleTitle,
    promise:promise,
    myUrl:imgUrl1
    //fuck:niggeeria
    //Comments
};
} )satisfies PageServerLoad


