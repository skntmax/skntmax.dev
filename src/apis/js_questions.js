export default [
  {
    cat_id: "3",
    key: "1",
    qs: `Promises polyfill`,
    disc: `import { Space, Typography } from 'antd';
      const { Text, Link } = Typography;
      `,
    answer: `
    // const subscribe = () => {
      //   let status = true;
      //   return new Promise((resolve, reject) => {
      //     if (status) {
      //       setTimeout(() => {
      //         resolve("subscribe the channel ");
      //       }, 1000);
      //     } else {
      //       reject("did not subscribe ");
      //     }
      //   });
      // };
      
      // polyfill for promise
      
      function myPromise(executor) {
        let onResolve, onReject;
      
        const resolve = (args) => onResolve(args);
        const reject = (args) => onReject(args);
      
        this.then = function (cb) {
          onResolve = cb;
          return this;
        };
      
        this.catch = function (cb) {
          onReject = cb;
          return this;
        };
      
        executor(resolve, reject);
      }
      
      const subscribe = () => {
        let status = true;
        return new myPromise((resolve, reject) => {
          if (status) {
            setTimeout(() => {
              resolve("subscribe the channel ");
            }, 1000);
          } else {
            reject("did not subscribe ");
          }
        });
      };
      
      subscribe("subscribe the channel ").then((res) => {
        console.log(res);
      });
      
      
      //   .catch((err) => {
      //     console.log(err);
      //   });
         `,
  },

  {
    cat_id: "3",
    key: "2",
    disc: `import { Space, Typography } from 'antd';
      const { Text, Link } = Typography;
      `,
    qs: `string to array in js  without using inbuilt function`,
    answer: `
    const string = "I am a fullstack javascript developer";
    // // output :- // [ 'I', 'am', 'a', 'fullstack', 'javascript', 'developer' ]
    
    function slice(str) {
      let ip = 0,
        res = [];
    
      for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
          res.push(getString(ip, i, str));
          ip = i;
        }
      }
    
      return res;
    }
    
    function getString(i, p, str) {
      let res = "";
      for (let j = i; j < p; j++) {
        res = res + str[j];
      }
      return res;
    }
    
    console.log(slice(string)); `,
  },

  {
    cat_id: "3",

    key: "3",
    disc: `import { Space, Typography } from 'antd';
      const { Text, Link } = Typography;
      `,
    qs: `sum  question `,
    answer: `
   
// sum of all prices 
const res = [
  {
    name: "prodict1",
    price: 1,
  },
  {
    name: "prodict2",
    price: "10",
  },
  {
    name: "prodict3",
    price: null,
  },
  {
    name: "prodict4",
    price: "",
  },
  {
    name: "prodict5",
    price: undefined,
  },
  {
    name: "prodict6",
    price: 2.3,
  },
]
  .map((ele) => {
    if (ele.price === null || ele.price === undefined || ele.price === "" ) {
      return "idk";
    } else {
      return ele;
    }
  })
  .filter((ele) => ele != "idk")
  .reduce((acc, ele, i) => acc + Number(ele.price), 0);


// second way 
        // let sm = res.reduce((acc, ele, i) => {
        //   acc = acc + (Number(ele.price) || 0);
        //   return acc;
        // }, 0);

        // console.log(sm);


console.log(res);
 `,
  },

  {
    cat_id: "3",
    key: "4",
    disc: `import { Space, Typography } from 'antd';
      const { Text, Link } = Typography;
      `,
    qs: `array question`,
    answer: `
    var input = "04126508";
    op: "0-412-650-8";
    
    let res = input
      .split("")
      .map((ele, i, arr) => {
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
          return arr[i] + "-";
        } else {
          return ele;
        }
      })
      .join("");
    
    console.log(res);
    
         `,
  },

  {
    cat_id: "3",
    key: "5",
    qs: `Flatten the array in JS (Custom function)`,
    answer: `let array = [[234, 56, 788, 23], [333], [23, 45], [45, 7], 0];

    function flattenArray(arr, depth = 1) {
      let res = [];
      if (arr.length == 0) return [];
      if (depth == 0) return res;
    
      for (let i = 0; i < arr.length; i++) {
        if (depth >= 1) {
          depth--;
          flattenArray(arr[i], depth);
        }
    
        if (Array.isArray(arr[i]) && depth == 0) {
          arr[i].forEach((element) => {
            res.push(element);
          });
        } else {
          res.push(arr[i]);
        }
      }
    
        return res;
    }
    
    console.log(flattenArray(array, 1));
    
        `,
    disc: `import { Space, Typography } from 'antd';
    
    
         `,
  },

  {
    cat_id: "3",
    key: "6",
    qs: `Debouncing in JS`,
    disc: `Debouncing in JS`,
    answer: `const betterFunction = (cb, d) => {
      let timer;
      return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          cb(...args);
        }, d);
      };
    };
  
    const callingApi = () => {
      console.log("calling api ");
    };
  
    const debounce = betterFunction(callingApi, 2000);
    `,
  },

  {
    cat_id: "3",
    key: "7",
    disc: `import { Space, Typography } from 'antd';
      const { Text, Link } = Typography;
      `,
    qs: `Power function in JS`,
    answer: `
    function powerFunction(root, power) {
      if (power == 0) return 1;
      return root * powerFunction(root, power - 1);
    }
    
    console.log(powerFunction(5, 3));

         `,
  },

  {
    cat_id: "3",
    key: "8",

    disc: `import { Space, Typography } from 'antd';
      const { Text, Link } = Typography;
      `,
    qs: `deep copy in JS`,
    answer: `
    let object = {
      name: "shashi kant ",
      lastName: "kumar",
      details: {
        address: "kanpur",
        education: "btech",
        background: {
          location: " sample location ",
        },
      },
    };
    
    function deepCopy(obj) {
      let res = {};
      if (Object.keys(obj).length == 0) return res;
    
      for (let val in obj) {
        if (obj[val] == "object") {
          deepCopy(obj[val]);
        } else {
          res[val] = obj[val];
        }
      }
      return res;
    }
    
    console.log(deepCopy(object));
    
    
    
         `,
  },

  {
    cat_id: "3",
    key: "8",
    disc: `import { Space, Typography } from 'antd';
      const { Text, Link } = Typography;
      `,
    qs: "Custom Map , filter and reduce function of  JS ",
    answer: `
    let arr = [12, 3, 4, 5];






    // custom forEach in js
    Array.prototype.customForeach = function (cb) {
      for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
      }
    };
    
    arr.forEach((ele, i, arr) => {
    console.log(ele * 2);
    });
    
    arr.customForeach((ele) => {
    console.log(ele * 2);
    });
    
    // custom forEach in js
    
    
    
    
    
    
    
    // custom map function
    Array.prototype.myMap = function (cb) {
      let res = [];
    
      for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this));
      }
    
      return res;
    };
    
    
    console.log(arr.map((ele) => ele * 2));
    console.log(arr.myMap((ele) => ele * 2));
    
    // custom map function
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // custom filter function
    
    Array.prototype.myFilter = function (cb) {
      let res = [];
    
      for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
          res.push(this[i]);
        }
      }
    
      return res;
    };
    
    console.log(arr.filter((ele) => ele % 2 == 0));
    console.log(arr.myFilter((ele) => ele % 2 == 0));
    
    // custom filter function
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    // custom reduce function
    
    Array.prototype.myReduce = function (cb, intialValue) {
      let temp = intialValue;
      for (let i = 0; i < this.length; i++) {
        let val = cb(temp, this[i], i, this);
        temp = val;
      }
    
      return temp;
    };
    
    console.log(arr.reduce((acc, ele, i, arr) => acc + ele, 0));
    
    console.log(arr.myReduce((acc, ele, i, arr) => acc + ele, 0));
    
    // custom reduce function

    
         `,
  },

  {
    cat_id: "3",
    key: "9",
    disc: `Promise Combinators`,
    qs: `Promise Combinators`,
    answer: `let subscribeTheVideo = (args) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(args);
        }, 1000);
      });
    };
    
    let shareTheVideo = (args) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(args);
        }, 200);
      });
    };
    
    let likeTheVideo = (args) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(args);
        }, 100);
      });
    };
    
    const promiseResolverByAll = async () => {
      let res = await Promise.all([
        subscribeTheVideo("subscribe the video "),
        shareTheVideo("share the video "),
        likeTheVideo("like the video "),
      ]);
    
      console.log(res);
    };
    
    const promiseResolverByRace = async () => {
      let res = await Promise.race([
        subscribeTheVideo("subscribe the video "),
        shareTheVideo("share the video "),
        likeTheVideo("like the video "),
      ]);
    
      console.log(res);
    };
    
    const promiseResolverByAllSettled = async () => {
      let res = await Promise.allSettled([
        subscribeTheVideo("subscribe the video "),
        shareTheVideo("share the video "),
        likeTheVideo("like the video "),
      ]);
    
      console.log(res);
    };
    
    // promiseResolverByAll();
    // [ 'subscribe the video ', 'share the video ', 'like the video ' ]
    
    // promiseResolverByRace();
    //  like the video
    
    // promiseResolverByAllSettled(); // give all the rejecte dand fullfull promised as well ,shareTheVideo promise is rejected
    // [
    //   { status: 'fulfilled', value: 'subscribe the video ' },
    //   { status: 'rejected', reason: 'share the video ' },
    //   { status: 'fulfilled', value: 'like the video ' }
    // ]`,
  },

  {
    cat_id: "3",
    key: "10",
    disc: `Promise Chaining in JS`,
    qs: `Promise Chaining in JS`,
    answer: `let subscribeTheVideo = (args) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(args);
        }, 1000);
      });
    };
    
    let shareTheVideo = (args) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(args);
        }, 200);
      });
    };
    
    let likeTheVideo = (args) => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(args);
        }, 100);
      });
    };
    
    const promiseResolverByChaining = () => {
      subscribeTheVideo("subscribe the video ")
        .then((res) => {
          console.log(res);
          return shareTheVideo("share the video ");
        })
        .then((res) => {
          console.log(res);
          return likeTheVideo("like the video ");
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    
    promiseResolverByChaining();
    
    // output
    // subscribe the video
    // share the video
    // like the video`,
  },

  {
    cat_id: "3",
    key: "11",
    disc: `Promises in JS`,
    qs: `Promises in JS`,
    answer: `let prms1 = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res("promise 1");
        }, 1000);
      });
    };
    
    let prms2 = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res("promise 2");
        }, 200);
      });
    };
    
    let prms3 = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res("promise 3");
        }, 100);
      });
    };
    
    const promiseResolver = async () => {
      let res1 = await prms1();
      let res2 = await prms2();
      let res3 = await prms3();
    
      console.log(res1); // order wise
      console.log(res2); // order wise
      console.log(res3); // order wise
    };
    
    promiseResolver();`,
  },

  {
    cat_id: "3",
    key: "12",
    disc: `deepcopy shallowcopy `,
    qs: `deepcopy shallowcopy`,
    answer: `let object = {
      name: "shashi kant ",
      lastName: "kumar",
      details: {
        address: "kanpur",
        education: "btech",
        background: {
          location: " sample location ",
        },
      },
    };
    
    function deepCopy(obj) {
      let res = {};
      if (Object.keys(obj).length == 0) return res;
    
      for (let val in obj) {
        if (obj[val] == "object") {
          deepCopy(obj[val]);
        } else {
          res[val] = obj[val];
        }
      }
      return res;
    }
    
    console.log(deepCopy(object));
    `,
  },

  {
    cat_id: "3",
    key: "13",
    disc: `Singlyl linked list using js `,
    qs: `Singlyl linked list using js`,
    answer: `// singly linked list 

    class NewNode{
        constructor(val){
            this.val = val 
            this.next = null  
        }
    }
    
    class ll {
        constructor(){
             this.head = null 
             this.size= 0 
        }
    
        appendNode(val) {
            let new_node = new NewNode(val)  
            if(this.head==null) {
                this.head =new_node 
                this.size+= 1    
              }
            else { 
                 let tmp = this.head
                 while(tmp.next!=null) {
                    tmp=tmp.next
                 }
                tmp.next = new_node  
                this.size+= 1      
            }
        }
    
    
        display(head){
            if(head==null)  return "ll is empty"
            let tmp = head
             let res =[] 
            while(tmp){
                res.push(tmp.val)
                tmp = tmp.next
            }
            return res
        }
    
    
        reversell(){
            
            if(this.head==null)  return "ll is empty"
            if(this.head.next==null) {
                return this.head 
            }
            
            let curr = this.head 
            let prev = null 
    
             while(curr!=null){
                 let tmp = curr.next
                  curr.next = prev 
                  prev = curr
                  curr = tmp 
             }
    
             return prev  
    
        }
        
    }
    
    let l1 = new ll()
    l1.appendNode(2)
    l1.appendNode(3)
    l1.appendNode(4)
    l1.appendNode(5)
    l1.appendNode(6)
    
    console.log( l1.display(l1.head))
    
    console.log("reversed ll ", l1.display(l1.reversell(l1.head))  )
    
    console.log(l1)`,
  },

  {
    cat_id: "3",
    key: "14",
    disc: ` reverse string using loop and recursion  `,
    qs: `reverse string using loop and recursion `,
    answer: `let str = "hello"
    // olleh
    
    
    // example of head recursion 
    function r_string(string){ 
      if(string=="") return "" 
      return r_string(string.substr(1,string.length-1))+string[0]   
    }
    
    
    console.log("reverse string using head recursion >> " , r_string(str))
    
    
    
    
    
    // simple loop 
    function reverse_string_using_loop(string){ 
        let res = "" 
        for(let i=string.length-1 ; i>=0  ;i-- ) {
             res += string[i]
         }
    
         return res
    
      }
      
    
    
    console.log("reverse string using  normal loop >>" , reverse_string_using_loop(str) )`,
  },

  {
    cat_id: "3",
    key: "14",
    disc: `Queue using js `,
    qs: `Uqeue using js `,
    answer: `let queueList =[] 
    let maxSize = 100
     
    function  enque(ele){
         if(queueList.length>maxSize){
             alert(" queue is full ")
         }else{
            queueList[queueList.length] = ele
            // queueList.length =queueList.length+1          
         }    
    }
    
     
    
    function display(){
         for(let i=0 ; i <queueList.length ; i++ ){
             console.log(queueList[i]+"\n");
         } 
    }
    
      //fifo
       
    function deque(){
        for( let i=0;i<queueList.length; i++ ){
            queueList[i]=queueList[i+1]
        }
        queueList.length=queueList.length-1
    }
    
    enque(4)
    enque(34)
    enque(54)
    enque(76)
    enque(1)
     
    deque()
    
    
    // display()
    
    console.log(queueList);`,
  },
];

// {
//   cat_id: "3",
//   key: "14",
//   disc: `  `,
//   qs: ``,
//   answer: ``,
// },
