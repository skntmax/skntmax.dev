import sqlInterViewQuestions from "./SQL_interview";
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

  {
    cat_id: "2",
    key: "15",
    disc: `Bubble sort`,
    qs: `Bubble sort`,
    answer: `let nums = [29, 10, 14, 22, 3, 78];

      function bubble(arr) {
        if (arr.length == 0) return arr;
      
        let n = arr.length;
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              // swap
              tmp = arr[j + 1];
              arr[j + 1] = arr[j];
              arr[j] = tmp;
            }
          }
        }
        return arr;
      }
      
      console.log(bubble(nums));`,
  },

  {
    cat_id: "2",
    key: "16",
    disc: `Quick sort using js`,
    qs: `Quick sort using js`,
    answer: `let array =[66,43,21,49,44,52,10,2,3]




      function quickSort(arr) {
      
          if(arr.length<=1)  return arr 
           let pivot = arr[0]
            let left = []
            let right = []
            
           for(let i=1; i<arr.length ; i++) {
                if(arr[i]<pivot) {
                  left.push(arr[i])  
                 }else{
                  right.push(arr[i])  
                 }
           }
      
           return [...quickSort(left) , pivot , ...quickSort(right)]
      }
      
      
      console.log("quickSort",quickSort(array))`,
  },

  {
    cat_id: "2",
    key: "17",
    disc: `merge sort using js`,
    qs: `merge sort using js`,
    answer: `let arr =[66,43,21,49,44,52,10,2,3]



      function mergeSort(array) {
      
          if(array.length<=1) return array
      
          let mid = Math.floor(array.length/2)
      
        let left = mergeSort(array.slice(0,mid))     
         let right = mergeSort(array.slice(mid)) 
      
        return merge(left , right)
      
      }
      
       
      function merge(left ,right ) {
       let sortedArr = []
       
       while(left.length && right.length ) {
         if(left[0]<right[0]) {
             sortedArr.push(left.shift())
          }else{
             sortedArr.push(right.shift())  
          }   
         }
      
         return [...sortedArr , ...left, ...right]
      
      }
      
      console.log(mergeSort(arr))`,
  },

  {
    cat_id: "4",
    key: "18",
    disc: `Binary tree creation and example `,
    qs: `Binary tree creation and example `,
    answer: `class NewNode{
      constructor(value){
          this.val =value 
          this.left = null
          this.right = null
      }
 }
 
 class BST {
 
      constructor(){
      this.head = null     
 
      }
 
 
      appendNode(root, val ){
          let new_node =new NewNode(val)
         if(val<root.val &&  root.left!=null){
              // left node 
              this.appendNode(root.left, val )
         }else if(val>root.val && root.right!=null ){
             this.appendNode(root.right, val )
              
         }else if(val<root.val &&  root.left==null)
          {
              root.left =new_node 
          }
          else if(val>root.val &&  root.right==null)
          {
              root.right =new_node 
          }   
      }
     
 
      addNode(val){
      let new_node = new NewNode(val)
       let root =this.head
      
       if(root==null){
           this.head= new_node      
          return
       }
       
        if(root.left!=null && val<root.val ){
           // left node
            this.appendNode(root.left, val )
        }else if(root.right!=null && val>root.val){
         //right node 
          this.appendNode(root.right, val )
        }else if(root.left==null && val<root.val ) 
            root.left = new_node
         else if(root.right==null && val>root.val)
             root.right = new_node
         } 
 
 
         
         search(root, val ){
 
              if(val==root.val){
                 return true 
              }
               if( root.left!=null && val<root.val  ) {
                 // left node 
                 return this.search(root.left, val )
               }else if(root.right!=null && val>root.val   ) {
                  // right node 
                  return this.search(root.right, val )
               }else if(root.right==null || root.left==null) { 
               
                 return false 
               }
             
         }
 
         searchNode(val){
         let root = this.head
          if(root==null){
              console.log("tree is empty ")
              return "tree is empty"
          }else{       
             if(val<root.val){
                 // heading left node
                  return this.search(root.left , val) 
             }else if(val>root.val){
                 // heading right node
                 return this.search(root.right , val) 
             }
 
          }     
           
         }
 
 
         preOrder(root){
             if(root){
                 console.log(root.val)
                 this.preOrder(root.left)
                 this.preOrder(root.right)        
             }
         }
 
         inOrder(root){
             if(root){
                 this.inOrder(root.left)
                 console.log(root.val)
                 this.inOrder(root.right)        
             }
         }
 
 
 
         postOrder(root){
             if(root){
                 this.postOrder(root.left)
                 this.postOrder(root.right)        
                 console.log(root.val)
             }
         }
 
 }
 
 
 
 
 const t1   = new BST()
 
 t1.addNode(8)
 t1.addNode(3)
 t1.addNode(1)
 t1.addNode(6)
 t1.addNode(4)
 t1.addNode(10)
 
 
  
 console.log(t1)
 
 `,
  },

  {
    cat_id: "4",
    key: "19",
    disc: `DFS and BFS traveral using Javascript `,
    qs: `DFS and BFS traveral using Javascript`,
    answer: `class NewNode{
      constructor(value){
          this.val =value 
          this.left = null
          this.right = null
      }
 }
 
 class BST {
 
      constructor(){
      this.head = null     
 
      }
 
 
      appendNode(root, val ){
          let new_node =new NewNode(val)
         if(val<root.val &&  root.left!=null){
              // left node 
              this.appendNode(root.left, val )
         }else if(val>root.val && root.right!=null ){
             this.appendNode(root.right, val )
              
         }else if(val<root.val &&  root.left==null)
          {
              root.left =new_node 
          }
          else if(val>root.val &&  root.right==null)
          {
              root.right =new_node 
          }   
      }
     
 
      addNode(val){
      let new_node = new NewNode(val)
       let root =this.head
      
       if(root==null){
           this.head= new_node      
          return
       }
       
        if(root.left!=null && val<root.val ){
           // left node
            this.appendNode(root.left, val )
        }else if(root.right!=null && val>root.val){
         //right node 
          this.appendNode(root.right, val )
        }else if(root.left==null && val<root.val ) 
            root.left = new_node
         else if(root.right==null && val>root.val)
             root.right = new_node
         } 
 
 
         
         search(root, val ){
 
              if(val==root.val){
                 return true 
              }
               if( root.left!=null && val<root.val  ) {
                 // left node 
                 return this.search(root.left, val )
               }else if(root.right!=null && val>root.val   ) {
                  // right node 
                  return this.search(root.right, val )
               }else if(root.right==null || root.left==null) { 
               
                 return false 
               }
             
         }
 
         searchNode(val){
         let root = this.head
          if(root==null){
              console.log("tree is empty ")
              return "tree is empty"
          }else{       
             if(val<root.val){
                 // heading left node
                  return this.search(root.left , val) 
             }else if(val>root.val){
                 // heading right node
                 return this.search(root.right , val) 
             }
 
          }     
           
         }
 
 
         preOrder(root){
             if(root){
                 console.log(root.val)
                 this.preOrder(root.left)
                 this.preOrder(root.right)        
             }
         }
 
         inOrder(root){
             if(root){
                 this.inOrder(root.left)
                 console.log(root.val)
                 this.inOrder(root.right)        
             }
         }
 
 
 
         postOrder(root){
             if(root){
                 this.postOrder(root.left)
                 this.postOrder(root.right)        
                 console.log(root.val)
             }
         }
 
 }
 
 
 
 const t1   = new BST()
 
 t1.addNode(8)
 t1.addNode(3)
 t1.addNode(1)
 t1.addNode(6)
 t1.addNode(4)
 t1.addNode(10)
 
 
 // dfs traversal 
     
 
     // t1.inOrder(t1.head) // LNR 1,3,4,6,8,10
     // t1.preOrder(t1.head)  //NLR  8,3,1,6,4,10 
     // t1.postOrder(t1.head)  // LRN  1,4,6,3,10,8
 
 //searching 
 // console.log(t1.searchNode(10))  // searching any node 
 
 
  
 console.log(t1)
 
 
 `,
  },

  {
    cat_id: "4",
    key: "20",
    disc: ` Deletion of node in binary tree `,
    qs: `Deletion of node in binary tree`,
    answer: `class NewNode{
    constructor(value){
        this.val =value 
        this.left = null
        this.right = null
    }
}

class BST {

    constructor(){
    this.head = null     

    }


    appendNode(root, val ){
        let new_node =new NewNode(val)
       if(val<root.val &&  root.left!=null){
            // left node 
            this.appendNode(root.left, val )
       }else if(val>root.val && root.right!=null ){
           this.appendNode(root.right, val )
            
       }else if(val<root.val &&  root.left==null)
        {
            root.left =new_node 
        }
        else if(val>root.val &&  root.right==null)
        {
            root.right =new_node 
        }   
    }
   

    addNode(val){
    let new_node = new NewNode(val)
     let root =this.head
    
     if(root==null){
         this.head= new_node      
        return
     }
     
      if(root.left!=null && val<root.val ){
         // left node
          this.appendNode(root.left, val )
      }else if(root.right!=null && val>root.val){
       //right node 
        this.appendNode(root.right, val )
      }else if(root.left==null && val<root.val ) 
          root.left = new_node
       else if(root.right==null && val>root.val)
           root.right = new_node
       } 


       
       search(root, val ){

            if(val==root.val){
               return true 
            }
             if( root.left!=null && val<root.val  ) {
               // left node 
               return this.search(root.left, val )
             }else if(root.right!=null && val>root.val   ) {
                // right node 
                return this.search(root.right, val )
             }else if(root.right==null || root.left==null) { 
             
               return false 
             }
           
       }

       searchNode(val){
       let root = this.head
        if(root==null){
            console.log("tree is empty ")
            return "tree is empty"
        }else{       
           if(val<root.val){
               // heading left node
                return this.search(root.left , val) 
           }else if(val>root.val){
               // heading right node
               return this.search(root.right , val) 
           }

        }     
         
       }


       preOrder(root){
           if(root){
               console.log(root.val)
               this.preOrder(root.left)
               this.preOrder(root.right)        
           }
       }

       inOrder(root){
           if(root){
               this.inOrder(root.left)
               console.log(root.val)
               this.inOrder(root.right)        
           }
       }



       postOrder(root){
           if(root){
               this.postOrder(root.left)
               this.postOrder(root.right)        
               console.log(root.val)
           }
       }

       searchPosition(root, val){
         
           if(root.val==val){
              return root   
           }  

           if(val<root.val && root.left!=null) {
                return this.searchPosition(root.left, val )
           
               }else if(val>root.val && root.right!=null) {
               return this.searchPosition(root.right, val )
            }
       
         }


       findAncestor(root , val ){
       
             if(root.left.val==val){
               return root 
             }
             if(root.right.val==val){
               return root 
             }
             if(val<root.val && root.left!=null  ) {
               return this.findAncestor(root.left, val )
             }
             if(val>root.val && root.right!=null) {
               return this.findAncestor(root.right, val )
             }
           
       }

       removeNode(val){
           let root =this.head 

           if(root==null){
               return true 
           }
           if(this.searchNode(val)){
               // searching the node
                  let target_node = this.searchPosition(root,val) 
                 
                   if(target_node.left==null && target_node.right==null) {
                       // simply remove the node , finding nearest ancestor and appeding it's pointer to null 
                          let tmp = root
                            let prev_node =  this.findAncestor(tmp , val  ) 
                            if(prev_node.left.val==val){
                                  prev_node.left= null
                             }else{
                               prev_node.right= null
                             }
                              
                   }else if(target_node.right==null && target_node.left!=null){
                       // if the target node have only one child in left side 
                       let tmp = root
                       let prev_node =  this.findAncestor(tmp , val) 
                       
                       if(prev_node.right.val==val){
                              prev_node.right = target_node.left
                       }else{
                           prev_node.left = target_node.right
                       }
                      

                   }else if(target_node.left==null && target_node.right!=null){
                      // if the target node have only one child in right side 
                      let tmp = root
                      let prev_node =  this.findAncestor(tmp , val) 
                      
                      if(prev_node.left.val==val){
                             prev_node.left = target_node.left
                      }

                   }else{
                     // if the target node having two child in right and left 



                   }
               
           }else{
              // node doesn't exit 
               return "Node doesn't exist "
           }
    

       

            
       }

}



const t1   = new BST()

t1.addNode(8)
t1.addNode(3)
t1.addNode(1)
t1.addNode(6)
t1.addNode(4)
t1.addNode(10)

console.log(t1.removeNode(4)) 

// dfs traversal 
   //post order 
   t1.inOrder(t1.head) // LNR 1,6,3,8,10
   // t1.preOrder(t1.head)  //NLR  8,3,1,6,4,10 
   // t1.postOrder(t1.head)  // LRN  1,4,6,3,10,8

//searching 
// console.log(t1.searchNode(10))  // searching any node 

console.log(t1)`,
  },

  {
    cat_id: "4",
    key: "21",
    disc: `Array merge using Javascript  `,
    qs: `Array merge using Javascript`,
    answer: `let arr1 = [1,3,76,32,12,33,56,35]
  let arr2 = [23,89,667,55,32,122,78]
    
    
  
     // merge the array  
    //   console.log("arrya merge ");
    
     let arr3 = []
     for (let i=0; i<arr1.length ; i++){
         arr3[i]=arr1[i]  
       }
    
       for(let j=0 ; j<arr2.length ; j++ ) {
              arr3.push(arr2[j])
          }
     // sorting the array 
      // linear sorting 
       
      for (let i=0 ; i<arr3.length ; i++ )
             { 
              for(let j=0 ; j<arr3.length ; j++  ){
                   if(arr3[j]>arr3[j+1]) {
                      //  console.log(arr3); 
                       let temp = arr3[j]
                       arr3[j]=arr3[j+1]
                        arr3[j+1] = temp 
                       }
              }       
          }     
          
          
          
  
              console.log("sorted arrya ", arr3);
  
              // removing duplicate values 
  
               let finalArray =  new Set(arr3)
              console.log("sorted array with unique values  ", [...finalArray]);`,
  },

  {
    cat_id: "4",
    key: "22",
    disc: ` Creates a new array with the results of calling a provided function on every element in the array. `,
    qs: `Creates a new array with the results of calling a provided function on every element in the array.`,
    answer: `const numbers = [1, 2, 3, 4, 5];

  const doubledNumbers = numbers.map((num) => num * 2);
  
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]`,
  },

  {
    cat_id: "4",
    key: "23",
    disc: ` Binary tree using JS`,
    qs: `Binary tree using Javascript`,
    answer: `class NewNode{
    constructor(value){
        this.val =value 
        this.left = null
        this.right = null
    }
}

class BST {

    constructor(){
    this.head = null     

    }


    appendNode(root, val ){
        let new_node =new NewNode(val)
       if(val<root.val &&  root.left!=null){
            // left node 
            this.appendNode(root.left, val )
       }else if(val>root.val && root.right!=null ){
           this.appendNode(root.right, val )
            
       }else if(val<root.val &&  root.left==null)
        {
            root.left =new_node 
        }
        else if(val>root.val &&  root.right==null)
        {
            root.right =new_node 
        }   
    }
   

    addNode(val){
    let new_node = new NewNode(val)
     let root =this.head
    
     if(root==null){
         this.head= new_node      
        return
     }
     
      if(root.left!=null && val<root.val ){
         // left node
          this.appendNode(root.left, val )
      }else if(root.right!=null && val>root.val){
       //right node 
        this.appendNode(root.right, val )
      }else if(root.left==null && val<root.val ) 
          root.left = new_node
       else if(root.right==null && val>root.val)
           root.right = new_node
       } 


       
       search(root, val ){

            if(val==root.val){
               return true 
            }
             if( root.left!=null && val<root.val  ) {
               // left node 
               return this.search(root.left, val )
             }else if(root.right!=null && val>root.val   ) {
                // right node 
                return this.search(root.right, val )
             }else if(root.right==null || root.left==null) { 
             
               return false 
             }
           
       }

       searchNode(val){
       let root = this.head
        if(root==null){
            console.log("tree is empty ")
            return "tree is empty"
        }else{       
           if(val<root.val){
               // heading left node
                return this.search(root.left , val) 
           }else if(val>root.val){
               // heading right node
               return this.search(root.right , val) 
           }

        }     
         
       }


       preOrder(root){
           if(root){
               console.log(root.val)
               this.preOrder(root.left)
               this.preOrder(root.right)        
           }
       }

       inOrder(root){
           if(root){
               this.inOrder(root.left)
               console.log(root.val)
               this.inOrder(root.right)        
           }
       }



       postOrder(root){
           if(root){
               this.postOrder(root.left)
               this.postOrder(root.right)        
               console.log(root.val)
           }
       }
}



const t1   = new BST()

t1.addNode(20)
t1.addNode(12)
t1.addNode(23)
t1.addNode(56)
t1.addNode(123)
t1.addNode(100)
t1.addNode(67)


// dfs traversal 
   //post order 
   // t1.preOrder(t1.head)
   // t1.inOrder(t1.head)
   // t1.postOrder(t1.head)

//searching 
// console.log(t1.searchNode(67)) 



console.log(t1)
`,
  },

  {
    cat_id: "4",
    key: "24",
    disc: ` Checking Anagrams using Javascript `,
    qs: `Checking Anagrams using Javascript`,
    answer: `let str1 = "helloooo"
  let str2 = "ohlleooo"
  
   
   function anagramChecker( str1 ,str2 ) {
      
       let strObj = {}
       let strArray = []
       if(str1.length!==str2.length) return false  
  
       str1.split('').map(ele=>{
           strObj[ele] = ( strObj[ele]||0 )+1 
          //  strArray.length = { strObj[ele] : ( strObj[ele]||0)+1 }  
        })
  
        for(key of str2){    
          if( !strObj[key] ) {
              return false 
          }
          strObj[key]--
          }
        console.log(strObj); // if every object value has 0 it means string is anagram 
     return true 
   }
  
     anagramChecker(str1,str2)`,
  },

  {
    cat_id: "1",
    key: "25",
    disc: ` Hide last two digit on salary in PGSQL  `,
    qs: `Hide last two digit on salary in PGSQL `,
    answer: `

 
    select  salary  ,  concat(substring(salary::text , 1, LENGTH(salary::text)-2)  , 'XX'  )
    as marked_salary   from employee  
    
    `,
  },

  {
    cat_id: "1",
    key: "26",
    disc: `find 50 % record  of a table `,
    qs: `find 50 % record  of a table `,
    answer: `
    



-- 50 percent record of any table 
select * from  employee where empid <= (select count(empid)/2 from employee  ) 






    `,
  },

  {
    cat_id: "1",
    key: "27",
    disc: `What’s the male and female employees ratio. `,
    qs: `What’s the male and female employees ratio.`,
    answer: `SELECT
    (COUNT(*) FILTER (WHERE Gender = 'M') * 100.0 / COUNT(*)) AS MalePct,
    (COUNT(*) FILTER (WHERE Gender = 'F') * 100.0 / COUNT(*)) AS FemalePct
    FROM Employee;`,
  },

  {
    cat_id: "1",
    key: "28",
    disc: ` Query to find the cumulative sum of employee’s salary. `,
    qs: `Query to find the cumulative sum of employee’s salary.`,
    answer: `


    SELECT EmpID, Salary, SUM(Salary) OVER (ORDER BY EmpID) AS CumulativeSum
    FROM Employee`,
  },

  {
    cat_id: "1",
    key: "29",
    disc: ` Query to find the null values in the Employee table.  `,
    qs: `Query to find the null values in the Employee table. `,
    answer: `
    select * from employee e where e.empid is null 
    `,
  },

  {
    cat_id: "1",
    key: "30",
    disc: `  Write a query to retrieve the list of employees from the same city. `,
    qs: ` Write a query to retrieve the list of employees from the same city.`,
    answer: `

    --1st way 
    select * from employee e where e.city in(select  city  from  Employee group by city having count(city)> 1 )
    



    -- 2nd way 

SELECT E1.EmpID, E1.EmpName, E1.City
FROM Employee E1, Employee E2
WHERE E1.City = E2.City AND E1.EmpID != E2.EmpID 


    
    `,
  },

  {
    cat_id: "1",
    key: "31",
    disc: `  Find the list of employees whose salary ranges between 2L to 3L. `,
    qs: ` Find the list of employees whose salary ranges between 2L to 3L.`,
    answer: `


  select * from employee e where e.salary >200000 and e.salary <300000
  
  
  `,
  },

  {
    cat_id: "1",
    key: "32",
    disc: `  TABLES STRUCTES AND IT”S SCHEMA QUERY - DATA SETS to perform query operation `,
    qs: ` TABLES STRUCTES AND IT”S SCHEMA QUERY - DATA SETS to perform query operation `,
    answer: `CREATE TABLE Employee (
    EmpID int NOT NULL,
    EmpName Varchar,
    Gender Char,
    Salary int,
    City Char(20) )
    
    
    INSERT INTO Employee
    VALUES (1, 'Arjun', 'M', 75000, 'Pune'),
    (2, 'Ekadanta', 'M', 125000, 'Bangalore'),
    (3, 'Lalita', 'F', 150000 , 'Mathura'),
    (4, 'Madhav', 'M', 250000 , 'Delhi'),
    (5, 'Visakha', 'F', 120000 , 'Mathura')
    
    
    
    CREATE TABLE EmployeeDetail (
    EmpID int NOT NULL,
    Project Varchar,
    EmpPosition Char(20),
    DOJ date )
    
    INSERT INTO EmployeeDetail
    VALUES (1, 'P1', 'Executive', '26-01-2019'),
    (2, 'P2', 'Executive', '04-05-2020'),
    (3, 'P1', 'Lead', '21-10-2021'),
    (4, 'P3', 'Manager', '29-11-2019'),
    (5, 'P2', 'Manager', '01-08-2020')
    
    select * from  Employee 
    
    select * from EmployeeDetail`,
  },

  {
    cat_id: "5",
    key: "33",
    disc: `  Classes in JS`,
    qs: `Classes in JS`,
    answer: `//  classes examples

    class BankAccount {
      constructor(name, intial_amount = 0, type = "saving") {
        this.name = name;
        this.intial_amount = intial_amount;
        this.type = type;
        this.total = intial_amount;
      }
    
      getBalance() {
        return this.intial_amount;
      }
    
      deposite(amount) {
        this.total = this.total + amount;
        return this.amount;
      }
    
      getUserName() {
        return this.name;
      }
    }
    
    let users1 = new BankAccount("skntmax"); // default 0 intial amount and type saving acccount
    let users2 = new BankAccount("skntmax", 1200, "credit"); // strictly defining , initial amount and type of account
    
    console.log(users1, users2);
    `,
  },

  {
    cat_id: "5",
    key: "35",
    disc: `Multilevel inheritance with Encapsulation and polymorphism in JS   `,
    qs: `Multilevel inheritance with Encapsulation and polymorphism in JS `,
    answer: `//  classes examples

    // mmultiple inheritance with polymorphism and encapsulation
    class BankAccount {
      #name;
      #type;
      #total;
      #intial_amount;
      #branch_name;
    
      constructor(name, intial_amount = 0, type = "saving", branch_name = "delhi") {
        this.#name = name;
        this.#intial_amount = intial_amount;
        this.#type = type;
        this.#total = intial_amount;
        this.#branch_name = branch_name;
      }
    
      getBalance() {
        return this.#intial_amount;
      }
    
      deposite(amount) {
        this.#total = this.#total + amount;
        return this.amount;
      }
    
      getUserName() {
        return this.#name;
      }
    
      getBranchName() {
        console.log("calling from main branch");
        return this.#branch_name;
      }
    }
    
    class B2 extends BankAccount {
      #branch_name;
      constructor(name, amount, type, branch_name) {
        super(name, amount, type);
        this.#branch_name = branch_name;
      }
    
      getBranchName() {
        console.log("calling from B2  Bank branch");
        return this.#branch_name;
      }
    }
    
    let users1 = new B2("skntmax", 1200, "credit", "mujaffarpur"); // strictly defining , initial amount and type of account
    
    let users2 = new BankAccount("rahul", 1200, "credit"); // strictly defining , initial amount and type of account
    
    console.log(users1.getBranchName());
    console.log(users2.getBranchName());
    `,
  },

  {
    cat_id: "5",
    key: "36",
    disc: `Polymorphism in JS  `,
    qs: `Polymorphism in JS`,
    answer: `//  classes examples
    // will create several form extending the same class
    
    class BankAccount {
      #name;
      #type;
      #total;
      #intial_amount;
      #branch_name;
    
      constructor(name, intial_amount = 0, type = "saving") {
        this.#name = name;
        this.#intial_amount = intial_amount;
        this.#type = type;
        this.#total = intial_amount;
        this.#branch_name = "delhi";
      }
    
      getBalance() {
        return this.#intial_amount;
      }
    
      deposite(amount) {
        this.#total = this.#total + amount;
        return this.amount;
      }
    
      getUserName() {
        return this.#name;
      }
    
      getBranchName() {
        console.log("calling from main branch");
        return this.#branch_name;
      }
    }
    
    class SubBank extends BankAccount {
      #branch_name;
      constructor(branch_name) {
        super();
        this.#branch_name = branch_name;
      }
    
      getBranchName() {
        console.log("calling from sub branch");
    
        return this.#branch_name;
      }
    }
    
    let users2 = new BankAccount("skntmax", 1200, "credit"); // strictly defining , initial amount and type of account
    
    let subBranchUser = new SubBank("noida");
    
    console.log(users2.getBranchName()); // calling main branch with the help of methord overriding
    console.log(subBranchUser.getBranchName()); // calling sub branch with the help of methord overriding
    `,
  },

  {
    cat_id: "5",
    key: "37",
    disc: `Encapsulation in JS   `,
    qs: `Encapsulation in JS `,
    answer: `//  classes examples
    // removing access of modifying public varibales of class properties outside the class
    class BankAccount {
      #name;
      #type;
      #total;
      #intial_amount;
    
      constructor(name, intial_amount = 0, type = "saving") {
        this.#name = name;
        this.#intial_amount = intial_amount;
        this.#type = type;
        this.#total = intial_amount;
      }
    
      getBalance() {
        return this.#intial_amount;
      }
    
      deposite(amount) {
        this.#total = this.#total + amount;
        return this.amount;
      }
    
      getUserName() {
        return this.#name;
      }
    }
    
    // let users1 = new BankAccount("skntmax"); // default 0 intial amount and type saving acccount
    let users2 = new BankAccount("skntmax", 1200, "credit"); // strictly defining , initial amount and type of account
    
    // no these all fields have been encapsulated , can't change it from outside of the class directly
    //   #name;
    //   #type;
    //   #total;
    //   #intial_amount;
    
    console.log(users2);
    `,
  },
];

// {
//   cat_id: "1",
//   key: "32",
//   disc: `  `,
//   qs: ``,
//   answer: ``,
// },
