export type article2 = {
    Title: string;
    Subtitles: subtitle[];
    Author: string;
    Date: string;
    Topic: string;
    Summary: string;
    Img: string;
    Gif:string;

}
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type article=Optional<article2,'Gif'>;

export type articleContentPlus={
    article:article
ac :articleContent[]
}
export type articleContent={
    st: number;
    sst:number;
    bp:number;
    sbp:number;
    stuff:modulator2[];
}
export type subtitle = {
    Content: string;
    SubSubtitles: sstitle[];
    Bp: bulletpoint[];

}
export type modulator = {
    img: number[];
    html: number[];
}
export type modulator2 = {
    isHtml:boolean;
    isImg:boolean;
    content:string;
}
export type epicSubtitle = subtitle & {

}
export type bulletpoint = {
    Content: string;
    Html: string[];
    Img: string[];
    SubBullets: subBullet[];
}
export type sstitle = {
    Content: string;
    Bullets: bulletpoint[];
}
export type subBullet = {
    Content: string;
    Img: string[]
    Html: string[]
}
export type comment = {
    name: string;
    content: string;
    articleId: string;
}
export type articleTitleList = {
    Titles: categoryTitle[];
    Headline: string;
}
export type categoryTitle = {
    Title: string;
    Author: string;
    Topic: string;
    Date: string;
    Contents: contentItem[];
    Summary: string;
    Img: string;
}
export type contentItem = {
    Item: string;
}


export const webArtlist: categoryTitle = {
    "Title": "web dev 1",
    "Author": "Jonathan Lathrop",
    "Topic": "WebDev",
    "Summary": "the best article ever",
    "Date": "2-12-23",
    "Contents": [
        { "Item": "content 1" }
    ],
    "Img": "future1.jpg"
}

export const myarticleList: categoryTitle = {
    "Title": "Getting Started With C++",
    "Author": "Jonathan Lathrop",
    "Topic": "C++",
    "Date": "2-12-23",
    "Summary": "Everything a complete beginner should learn about C++",
    "Contents": [
        {
            "Item": "Why learn c++?"
        },
        {
            "Item": "What is c++ used for?"
        },
        {
            "Item": "c++ basics"
        }
    ],
    "Img": "/goodbg.jpg"
}
const awsec2Article: categoryTitle = {
    "Title": "Deploy an Angular(or other) application with AWS EC2,NGINX, and pm2",
    "Contents": [
        {
            "Item": "Why deploy on AWS EC2?"
        },
        {
            "Item": "Step 1: Prepare your application to be deployed"
        },
        {
            "Item": "Step 2: Setup your EC2"
        },
        {
            "Item": "Step 3: Configure network/domain"
        },
        {
            "Item": "step 4: Connect to your instance"
        },
        {
            "Item": "Step 5: Configure your EC2 for serving the app"
        },
        {
            "Item": "Step 4: configure Nginx to serve the app"
        },
        {
            "Item": "Step 6: Configure the DB"
        },
        {
            "Item": "step 7: Run your app"
        },
        {
            "Item": "Debugging"
        },
        {
            "Item": "Finished!"
        }
    ],
    "Img": "/awsec2.png",
    "Author": "Jonathan Lathrop",
    "Date": "03/17/23",
    "Summary": "A full tutorial on how to deploy a fully-fledged web application to the internet using a bare-bones aws instance and your own domain",
    "Topic": "WebDev"
}
export const webDevArticles: articleTitleList = { "Titles": [webArtlist, awsec2Article], "Headline": "Web Dev Articles" }

export const cplusplusarticles: articleTitleList = {
    "Titles": [myarticleList, myarticleList], "Headline": "C++ Articles"
}
export const Topics: { [key: string]: articleTitleList } = { "C++": cplusplusarticles, "WebDev": webDevArticles }

export const awsec2: article = {
    "Title": "Deploy an Angular(or other) application with AWS EC2,NGINX, and pm2",
    "Subtitles": [
        {
            "Content": "Why deploy on AWS EC2?",
            "SubSubtitles": [
                {
                    "Content": "Deploying an app is a big step.  Doing so on a 100% custom infrastructure(aka individually provisioned and outfitted ec2) is a great way to make this step.  It’s easy, smart, and beneficial.  However, it is certainly tempting with all of the hosting providers offering User-Interface based, developer-friendly, hassle saving, pre-configured environments to host your app.  Hey! Just pay for the domain, enter your details, pay a small fee, and then watch your app run on the web. These services do appeal to a large range of people, but not to me, and I’ll tell you why I prefer not to use them",
                    "Bullets": [
                        {
                            "Content": "These services make you modify your application to fit their systems.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "While it may not be a big deal that you’re changing a few small things (maybe a bit of directory structure, css files location, who knows), in the long run you are going to be isolating your development expertise in the broader scheme and jumping through more and more hoops to implement new features while staying on their platform",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "These options will not help you learn the bigger picture",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "While I touched on this in the last point.  I feel it deserves a full bullet to itself.  By ignoring the underlying system of your application you are limiting your expertise in the future to work on/with organizations using these platforms.  It is already bad enough that companies don’t want to hire an AWS developer to work on an Azure system(and vice versa), so why make them choose between a heroku developer and a netlify developer too?",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "Content": "Developing an app and configuring an EC2 provides unlimited flexibility, is great experience, and will make you a better developer",
                    "Bullets": [
                        {
                            "Content": "By following these steps you are going to be the owner of your application in the closest sense possible in the cloud-era of computing. ",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "Making an app run on a linux machine means that if another cloud provider comes along with cheaper offerings, you will not have to modify your app(much) to work with their machines",
                                    "Img": [],
                                    "Html": []
                                },
                                {
                                    "Content": "Linux is the most common OS in the world, and its free.",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "Content": "This development more closely resembles what would be done in various parts of a large project. ",
                    "Bullets": [
                        {
                            "Content": "While the marketing is good and there are many use cases for newer increasingly-granular cloud-based services, ec2 is the most basic cloud service and is a great starting point which resembles the open-environment you may experience in the industry",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Maintenance",
                    "Bullets": [
                        {
                            "Content": "when you want to view your logs, manage the ports, add a new website, etc.  It is all going to be the same whatever linux machine you choose to work on going forward.  You can get full control of your application and debug if things aren’t working as expected",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Simplicity",
                    "Bullets": [
                        {
                            "Content": " While other options might be more “user” friendly at first, in the long run I find this method to ultimately be more simple due to reasons listed above",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "Step 1: Prepare your application to be deployed",
            "SubSubtitles": [
                {
                    "Content": "You’ve slaved away at writing an awesome app in your favorite js framework and you are ready to deploy your app to the world wide web, but before you do that, you are going to need to prepare it for production.  Please note that this is a framework agnostic tutorial and some of the specific framework related content will need to be understood independently by you.",
                    "Bullets": [
                        {
                            "Content": "Configure the api",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "depending on your framework and backend, there are likely going to be countless routes transferring http requests from the frontend-to-backend and vice versa.  They are probably pointing towards http://localhost:3000/api/myendpoint or something like that.  You want to change all of those routes so that the localhost is now gone and the routes are simply pointing to “/api/myendpoint”",
                                    "Img": [],
                                    "Html": []
                                },
                                {
                                    "Content": " this is because in production on your ec2 instance, the application is going to be running a web server facing the internet which where the routes will not have DIRECT access to “localhost:”.",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "Build your app",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": " to build your app use your cli to run npm build -prod (or whatever your framework tells you to run) and get the app in production ready form.",
                                    "Img": [],
                                    "Html": []
                                },
                                {
                                    "Content": " there should be a generated folder with your files which will have an index.html in it",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "Step 2: Setup your EC2",
            "SubSubtitles": [
                {
                    "Content": " You are going to need to go through a few steps to setup your ec2 instance",
                    "Bullets": [
                        {
                            "Content": "make an aws account",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "Start an ec2 instance by navigating to ec2 in the aws console dashboard",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "configure a security group",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "all traffic on http port 80 in/out.  (this can be changed later for enabling ssl) ",
                                    "Img": [],
                                    "Html": []
                                },
                                {
                                    "Content": "all traffic both ways port 22 ssh",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "Make a security key and download it from the aws dashboard during instance setup",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "^^^^",
                                    "Img": [],
                                    "Html": [
                                        "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e run  chmod 400 keyname.pem.  this is necessary to use it \u003c/snippet\u003e\u003cbr\u003e"
                                    ]
                                },
                                {
                                    "Content": " this is important for security purposes so keep it handy and don’t share it with anyone",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": " confirm and create your ec2 instance",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "allocate an elastic I.p and associate it with your instance",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "go find the elastic i.p by searching and make a new one, then click the button to associate it with your ec2.  Now you have a constant I.p. address that won’t change for your ec2 instance",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "Step 3: Configure network/domain",
            "SubSubtitles": [
                {
                    "Content": "this one is pretty self explanatory: making the right configurations to have your domain able to serve the application",
                    "Bullets": [
                        {
                            "Content": "Go to “Route 53” in aws console by searching, click “hosted zones”, and make a new hosted zone",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "fill in the information for your domain, and include your ec2 i.p address",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "paste the 3-4 aws name servers from your hosted zone into the “name servers” field on your separate domain provider dashboard.  You might have to enable custom dns to find this option",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "step 4: Connect to your instance",
            "SubSubtitles": [
                {
                    "Content": "connect to your ec2 instance and transfer the Finished App",
                    "Bullets": [
                        {
                            "Content": " using ^^^^you can connect your instance.  This information will be important later",
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e ssh -i  path/to/your/privatekey.pem  ec2-user@__your ec2   s elastic I.p__ \u003c/snippet\u003e\u003cbr\u003e"
                            ],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "compress your build folder",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "use a similar command to get your folder into the ec2.  ^^^^ ",
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003eScp -i  path/to/key.pem     path/to/build/folder.zip  ec2-user@   elastic_ip  /home/ec2-user\u003c/snippet\u003e\u003cbr\u003e"
                            ],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "Step 5: Configure your EC2 for serving the app",
            "SubSubtitles": [],
            "Bp": [
                {
                    "Content": "install Nginx",
                    "Html": [],
                    "Img": [],
                    "SubBullets": [
                        {
                            "Content": "ssh into ec2 instance",
                            "Img": [],
                            "Html": []
                        },
                        {
                            "Content": "^^^^",
                            "Img": [],
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003erun  sudo amazon-linux-extras enable epel\u003c/snippet\u003e\u003cbr\u003e"
                            ]
                        },
                        {
                            "Content": "^^^^",
                            "Img": [],
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003erun  sudo yum install epel-release\u003c/snippet\u003e\u003cbr\u003e"
                            ]
                        },
                        {
                            "Content": "^^^^",
                            "Img": [],
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003erun  sudo yum install nginx \u003c/snippet\u003e\u003cbr\u003e"
                            ]
                        },
                        {
                            "Content": "to verify install, run: nginx -v ",
                            "Img": [],
                            "Html": []
                        }
                    ]
                },
                {
                    "Content": " install node ",
                    "Html": [],
                    "Img": [],
                    "SubBullets": [
                        {
                            "Content": "ssh into ec2 instance",
                            "Img": [],
                            "Html": []
                        },
                        {
                            "Content": "run: sudo yum install gcc-c++ make ",
                            "Img": [],
                            "Html": []
                        },
                        {
                            "Content": "^^^^",
                            "Img": [],
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e run  curl -sL https //rpm.nodesource.com/setup_16.x sudo -E bash - \u003c/snippet\u003e\u003cbr\u003e"
                            ]
                        },
                        {
                            "Content": "run: sudo yum install nodejs ",
                            "Img": [],
                            "Html": []
                        },
                        {
                            "Content": "verify installation- run: node -v ",
                            "Img": [],
                            "Html": []
                        }
                    ]
                },
                {
                    "Content": "Install pm2",
                    "Html": [],
                    "Img": [],
                    "SubBullets": [
                        {
                            "Content": "^^^^",
                            "Img": [],
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e run  npm install -g pm2\u003c/snippet\u003e\u003cbr\u003e"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "Content": "Step 6: configure Nginx to serve the app",
            "SubSubtitles": [
                {
                    "Content": "Now that you’ve got your ec2 connected, ec2 system set up, and app in your ec2 instance, it is time to configure the Nginx server so that it will properly server your app",
                    "Bullets": [
                        {
                            "Content": "edit your /etc/nginx/nginx.conf file",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": " run: vim etc/nginx/nginx.conf (if you have never used vim, then look it up)",
                                    "Img": [],
                                    "Html": []
                                },
                                {
                                    "Content": "here we are passing the requests to the backend server on port 3000 via proxy_pass",
                                    "Img": [],
                                    "Html": []
                                },
                                {
                                    "Content": "your Nginx.conf file should look like this(assuming your backend Is running on port 3000) ****",
                                    "Img": [
                                        "/nginxconf.jpg"
                                    ],
                                    "Html": []
                                }
                            ]
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "Step 7: Configure the DB",
            "SubSubtitles": [
                {
                    "Content": " depending on the needs of your app you may or may not be using a database.  If so there are a few steps to take. ",
                    "Bullets": [
                        {
                            "Content": "Two options for mid size apps are: better_sqlite3 which is an npm package and runs with the node server(no need to “configure” an external database or deal with connection strings), and mongodb.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "   If you are using mongodb then you can follow this convenient document to install it on your ec2 instance  ^^^^",
                            "Html": [
                                "\u003ca class=\"text-blue-600 underline\" href=\" https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-amazon/\"\u003emongodb-amazon\u003c/a\u003e"
                            ],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "from this point you will configure the db just like you would normally",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "step 8: Run your app",
            "SubSubtitles": [
                {
                    "Content": "you’ve come all this way and now the time has come to start your app!  Don’t be discouraged if there are a couple of bugs, you will work them out by debugging(the last step)",
                    "Bullets": [
                        {
                            "Content": "^^^^",
                            "Html": [
                                '\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e run  pm2 start ./build/index.js \u003c/snippet\u003e\u003cbr\u003e'
                            ],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": " the command may very slightly from framework to framework.  Basically run your backend on this step with pm2",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": " run:^^^^",
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e systemctl start nginx\u003c/snippet\u003e\u003cbr\u003e"
                            ],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": " voilla! With a little luck your app is now up and running on the world wide web!",
                    "Bullets": []
                }
            ],
            "Bp": []
        },
        {
            "Content": "Debugging",
            "SubSubtitles": [
                {
                    "Content": "you may find that your app is encountering some issue on the production deployment: perhaps the home page gives an nginx 404 not found, or perhaps the backend is crashing, we will be able to trace and solve all of this",
                    "Bullets": [
                        {
                            "Content": "to debug the backend  run  ^^^^ in one terminal and open another to do things like restart nginx  sudo systemctl restart nginx  ",
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e   DEBUG express * node server.js   \u003c/snippet\u003e\u003cbr\u003e"
                            ],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "this will give you a clear continuous output of the backend process and show you when an error occurs, but should only be used temporarily, as PM2 will ensure the long running of the server once it is running without bugs.  You can also access pm2 error logs.",
                                    "Img": [],
                                    "Html": []
                                },
                                {
                                    "Content": "****",
                                    "Img": [
                                        "/debug.jpg"
                                    ],
                                    "Html": []
                                },
                                {
                                    "Content": "This is useful in non-production debugging too",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "to view the nginx error logs run ^^^^",
                            "Html": [
                                "\u003cbr\u003e\u003cdiv class=\"snippet\"\u003e  sudo tail -f /var/log/nginx/error.log   \u003c/snippet\u003e\u003cbr\u003e"
                            ],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": " I recommend debugging the backend and using the developer console in the browser first before viewing nginx logs, unless you are getting an nginx 404 error",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "Finished!",
            "SubSubtitles": [
                {
                    "Content": "You never thought you’d make it this far, huh? Well, you have now not only developed a full stack application, but deployed it to a custom server which belongs 100% to you! Pat yourself on the back.  They were wrong about you.  And you have the proof now!.",
                    "Bullets": []
                }
            ],
            "Bp": []
        }
    ],
    "Summary": "A full tutorial on how to deploy a fully-fledged web application to the internet using a bare-bones aws instance and your own domain",
    "Author": "Jonathan Lathrop",
    "Topic": "Web Dev",
    "Date": "03/17/23",
    "Img": "/awsec2.png",
    "Gif":"/giphy.gif"
};
export function jewish(a1:article|null){
var new1:string[]=[];
if(a1){
    for(const a of a1.Subtitles){
        for(const b of a.SubSubtitles){
            for (const c of b.Bullets){
                for(const d of c.Html){
                   new1.push(d)
                }
            }
        }
    
    }
    return new1;
    }
else{
for(const a of awsec2.Subtitles){
    for(const b of a.SubSubtitles){
        for (const c of b.Bullets){
            for(const d of c.Html){
               new1.push(d)
            }
        }
    }

}
return new1;
}
}

export const myArticle2: article = {
    "Title": "Getting Started With C++",
    "Subtitles": [
        {
            "Content": "Why learn c++?",
            "SubSubtitles": [
                {
                    "Content": "If you’re considering learning c++ then you may already have a reason to learn it.  Some reasons why you might want to consider learning c++ are:",
                    "Bullets": [
                        {
                            "Content": "It is widely used across the globe and can run on almost every computer device in existence.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "It is one of the fastest programming languages with excellent runtime speeds.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "Since it has been around since 1979, but is still excellent performance wise, it has been used to create many systems which are still used/worked on today, and therefore there are likely to be many c++ jobs continuing forward.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "It is an object-oriented language which enables learning of powerful object-oriented programming techniques, which will be useful for other object oriented programming languages as well.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "C++ has many features such as pointers, Templates, Operator overloading, and more which make it very versatile for programming complex, performant functionality.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "What is c++ used for?",
            "SubSubtitles": [
                {
                    "Content": "C++ is used in almost every industry and for a wide variety of applications, some of these applications include:",
                    "Bullets": [
                        {
                            "Content": "Gaming",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "C++ is the most widely used programming language in gaming and is used at the core of many of the most advanced graphics/game engines in the world.",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "Networking",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "C++ is used in programming routers and other network devices because the high speed execution is ideal for applications which require low latency",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "Science",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "Everywhere from space to particle physics, c++ is used in machines that perform intense calculations and/or need to be dependable.",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "Browsers",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "C++ is at the heart of many modern web browsers.  Though the browser may be able to execute javascript, the browser itself is made up of c++.",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        },
                        {
                            "Content": "Aviation",
                            "Html": [],
                            "Img": [],
                            "SubBullets": [
                                {
                                    "Content": "Many aircraft with complex flight software such as military-specialized and non-military systems ranging from visual data indicators(HUD, etc.) to communications and safety systems are written in c++.",
                                    "Img": [],
                                    "Html": []
                                }
                            ]
                        }
                    ]
                }
            ],
            "Bp": []
        },
        {
            "Content": "c++ basics",
            "SubSubtitles": [
                {
                    "Content": "Non- garbage collected, pointers, and references",
                    "Bullets": [
                        {
                            "Content": "One of the main things that a programmer will often find confusing about c++(possibly the only thing) when learning c++ for the first time when coming from languages such as python, java, and javascript, are:  the concept of pointers and references, and the concept of a non-garbage-collected language.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "While these features are the biggest turn off for new c++ programmers, they are also part of what makes c++ so highly performant.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Pointers, References",
                    "Bullets": [
                        {
                            "Content": "Pointers allow you to store variables as addresses to the values instead of the machine wasting time looking for the address of each variable to read its value when performing operations.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "A pointer to a variable tells the machine “the variable at this memory address” vs saying “the variable somewhere in memory with this id, go find it”.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "A reference allows called functions to alter the values of variables that are passed in, within the scope of the calling function.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Garbage collection",
                    "Bullets": [
                        {
                            "Content": "The last part of the confusing part of c++ is that it is a non-garbage collected language;This means that in certain situations, when defining objects that live on the heap, vs the stack , the exist in the memory and will stay there when functions are finished.  Many languages are “garbage collected” which means that these objects when not used anymore would be automatically deleted, but in c++ it is the responsibility of the programmer to delete these objects when they reach their end-of-life.  Methods for doing this often include a destructor function, which is programmer defined and automatically called when an objects leaves the scope of the program.  This will be written by the programmer and manually call the delete operator on objects which need to be deleted, or “garbage collected”.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Classes, structs, templates",
                    "Bullets": [
                        {
                            "Content": "Classes are defined with public and private variables and functions.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "Private variables can only be altered by member functions, and private functions can only be called by member functions.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "Classes can be made as “children” of parent classes, and inherit functions, variables, etc. while extending functionality",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "Templates are a cool feature in c++ which allows you to define classes that operate on an undefined data type, allowing for definition of classes and functions which can be called with different data types as parameters, variables, etc. ",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "Structs are like miniature classes that allow you define your own “type”, but they do not have private and public designations, everything in a struct is public.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Operator overloading",
                    "Bullets": [
                        {
                            "Content": "“overloading” in programming is the practice of writing a new definition for a function in which the parameters are different(more numerous, different datatypes etc.) and defining the function’s behavior differently based on the parameters passed in.  The function will then perform whichever “overload” matches the parameter set at run time.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        },
                        {
                            "Content": "A unique property of c++ is that you can write custom overloads for operators.  An example would be class myList.  You could overload the + operator for class myList where adding mylist1 + mylist2 would then have mylist1 be a sum of mylist1 and mylist2.",
                            "Html": [],
                            "Img": [],
                            "SubBullets": []
                        }
                    ]
                }
            ],
            "Bp": []
        }
    ],
    "Summary": "Everything you need to know",
    "Author": "Jonathan Lathrop",
    "Topic": "C++",
    "Date": "02/12/23",
    "Img": "/goodbg.jpg"
}
export const cplusplusarticles2: { [key: string]: article } = { "Getting Started With C++": myArticle2 }
export const webDevArticles2: { [key: string]: article } = { "Deploy an Angular(or other) application with AWS EC2,NGINX, and pm2": awsec2 }