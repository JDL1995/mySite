export type article ={
    title:string;
    subtitles:subtitle[];

}
export type subtitle={
    content:string;
    SubSubtitles:sstitle[];

}
export type bulletpoint={
    content:string;
    SubBullets:subBullet[];
}
export type sstitle={
    content:string;
    bullets:bulletpoint[];
}
export type subBullet={
    content:string;
}


export const myArticle={title:"My Article",
    subtitles:[{
        content:"This article is awesome",
            subSubtitles:[{
                content:"because reason one",bullets:[{content:"reason one because yes"},
                {content:"not not reason one because not no"}]
            },
                         {
                content:"because reason two",bullets:[{content:"reason two because yes"},
                {content:"not not reason two because not no"}]
            }]
        },{
            content:"This article is quite extremely very awesome",
                subSubtitles:[{
                    content:"because reason one",bullets:[{content:"reason one because yes"},
                    {content:"not not reason one because not no"}]
                },
                             {
                    content:"because reason two",bullets:[{content:"reason two because yes"},
                    {content:"not not reason two because not no"}]
                }]
            }]
}

export const myArticle2={
    "Title": "Getting started with C++",
    "Subtitles": [
        {
            "Content": "Why learn c++?",
            "SubSubtitles": [
                {
                    "Content": "If youre considering learning c++ then you may already have a reason to learn it.  Some reasons why you might want to consider learning c++ are:",
                    "Bullets": [
                        {
                            "Content": "It is widely used across the globe and can run on almost every computer device in existence.",
                            "SubBullets": []
                        },
                        {
                            "Content": "It is one of the fastest programming languages with excellent runtime speeds.",
                            "SubBullets": []
                        },
                        {
                            "Content": "Since it has been around since 1979, but is still excellent performance wise, it has been used to create many systems which are still used/worked on today, and therefore there are likely to be many c++ jobs continuing forward.",
                            "SubBullets": []
                        },
                        {
                            "Content": "It is an object-oriented language which enables learning of powerful object-oriented programming techniques, which will be useful for other object oriented programming languages as well.",
                            "SubBullets": []
                        },
                        {
                            "Content": "C++ has many features such as pointers, Templates, Operator overloading, and more which make it very versatile for programming complex, performant functionality.",
                            "SubBullets": []
                        }
                    ]
                }
            ]
        },
        {
            "Content": "What is c++ used for?",
            "SubSubtitles": [
                {
                    "Content": "C++ is used in almost every industry and for a wide variety of applications, some of these applications include:",
                    "Bullets": [
                        {
                            "Content": "Gaming",
                            "SubBullets": [
                                {
                                    "Content": "C++ is the most widely used programming language in gaming and is used at the core of many of the most advanced graphics/game engines in the world."
                                }
                            ]
                        },
                        {
                            "Content": "Networking",
                            "SubBullets": [
                                {
                                    "Content": "C++ is used in programming routers and other network devices because the high speed execution is ideal for applications which require low latency"
                                }
                            ]
                        },
                        {
                            "Content": "Science",
                            "SubBullets": [
                                {
                                    "Content": "Everywhere from space to particle physics, c++ is used in machines that perform intense calculations and/or need to be dependable."
                                }
                            ]
                        },
                        {
                            "Content": "Browsers",
                            "SubBullets": [
                                {
                                    "Content": "C++ is at the heart of many modern web browsers.  Though the browser may be able to execute javascript, the browser itself is made up of c++."
                                }
                            ]
                        },
                        {
                            "Content": "Aviation",
                            "SubBullets": [
                                {
                                    "Content": "Many aircraft with complex flight software such as military-specialized and non-military systems ranging from visual data indicators(HUD, etc.) to communications and safety systems are written in c++."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "Content": "c++ basics",
            "SubSubtitles": [
                {
                    "Content": "Non- garbage collected, pointers, and references",
                    "Bullets": [
                        {
                            "Content": "One of the main things that a programmer will often find confusing about c++(possibly the only thing) when learning c++ for the first time when coming from languages such as python, java, and javascript, are:  the concept of pointers and references, and the concept of a non-garbage-collected language.",
                            "SubBullets": []
                        },
                        {
                            "Content": "While these features are the biggest turn off for new c++ programmers, they are also part of what makes c++ so highly performant.",
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Pointers, References",
                    "Bullets": [
                        {
                            "Content": "Pointers allow you to store variables as addresses to the values instead of the machine wasting time looking for the address of each variable to read its value when performing operations.",
                            "SubBullets": []
                        },
                        {
                            "Content": "A pointer to a variable tells the machine the variable at this memory address vs saying the variable somewhere in memory with this id, go find it.",
                            "SubBullets": []
                        },
                        {
                            "Content": "A reference allows called functions to alter the values of variables that are passed in, within the scope of the calling function.",
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Garbage collection",
                    "Bullets": [
                        {
                            "Content": "The last part of the confusing part of c++ is that it is a non-garbage collected language;This means that in certain situations, when defining objects that live on the heap, vs the stack , the exist in the memory and will stay there when functions are finished.  Many languages are garbage collected which means that these objects when not used anymore would be automatically deleted, but in c++ it is the responsibility of the programmer to delete these objects when they reach their end-of-life.  Methods for doing this often include a destructor function, which is programmer defined and automatically called when an objects leaves the scope of the program.  This will be written by the programmer and manually call the delete operator on objects which need to be deleted, or garbage collected.",
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Classes, structs, templates",
                    "Bullets": [
                        {
                            "Content": "Classes are defined with public and private variables and functions.",
                            "SubBullets": []
                        },
                        {
                            "Content": "Private variables can only be altered by member functions, and private functions can only be called by member functions.",
                            "SubBullets": []
                        },
                        {
                            "Content": "Classes can be made as children of parent classes, and inherit functions, variables, etc. while extending functionality",
                            "SubBullets": []
                        },
                        {
                            "Content": "Templates are a cool feature in c++ which allows you to define classes that operate on an undefined data type, allowing for definition of classes and functions which can be called with different data types as parameters, variables, etc. ",
                            "SubBullets": []
                        },
                        {
                            "Content": "Structs are like miniature classes that allow you define your own type, but they do not have private and public designations, everything in a struct is public.",
                            "SubBullets": []
                        }
                    ]
                },
                {
                    "Content": "Operator overloading",
                    "Bullets": [
                        {
                            "Content": "overloading in programming is the practice of writing a new definition for a function in which the parameters are different(more numerous, different datatypes etc.) and defining the functionâs behavior differently based on the parameters passed in.  The function will then perform whichever overload matches the parameter set at run time.",
                            "SubBullets": []
                        },
                        {
                            "Content": "overloading in programming is the practice of writing a new definition for a function in which the parameters are different(more numerous, different datatypes etc.) and defining the functionâs behavior differently based on the parameters passed in.  The function will then perform whichever overload matches the parameter set at run time.A unique property of c++ is that you can write custom overloads for operators.  An example would be class myList.  You could overload the + operator for class myList where adding mylist1 + mylist2 would then have mylist1 be a sum of mylist1 and mylist2.",
                            "SubBullets": []
                        }
                    ]
                }
            ]
        }
    ]
}