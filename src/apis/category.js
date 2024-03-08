import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  JavaScriptOutlined,
} from "@ant-design/icons";
import js_logo from "./../assets/languages_logo/javascript.png";

export default [
  {
    key: "1",
    label: "SQL interview Questions ",
    icon: <VideoCameraOutlined />,
    multi: true,
    logo: js_logo,
    disc: `Here, you will find a collection of real-world Interview questions asked in companies like Google, Oracle, Amazon, and Microsoft, etc. Each question comes with a perfectly written answer inline, saving your interview preparation time.`,
  },

  {
    key: "2",
    label: "Sorting algorithms",
    icon: <JavaScriptOutlined />,
    multi: true,
    logo: "",
    disc: "Sorting algorithms using JavaScript involve implementing various techniques to arrange elements within an array in a specific order, such as ascending or descending. These algorithms leverage the power of JavaScript to efficiently organize data, enhancing performance and enabling seamless manipulation and analysis of datasets within web applications.",
  },

  {
    key: "3",
    label: "Javascript interview",
    icon: <JavaScriptOutlined />,
    multi: true,
    logo: "",
    disc: "JavaScript interview questions encompass a diverse range of inquiries that assess a candidate's proficiency and understanding of JavaScript programming concepts. These questions delve into topics such as data types, functions, scope, closures, asynchronous programming, DOM manipulation, and more. They serve as a means to evaluate a candidate's problem-solving skills, knowledge of best practices, and ability to apply JavaScript principles in real-world scenarios.",
  },
  {
    key: "4",
    label: "DSA using javascript",
    icon: <UploadOutlined />,
    multi: true,
    logo: "",
    disc: "DSA using JavaScript refers to the application of Data Structures and Algorithms concepts in the JavaScript programming language. This involves implementing data structures such as arrays, linked lists, trees, graphs, and hash tables, as well as algorithms for tasks like searching, sorting, and optimization using JavaScript syntax and features. DSA using JavaScript enables developers to leverage the flexibility and versatility of the language to solve complex problems efficiently and build high-performance applications.",
  },

  {
    key: "5",
    label: "Object Oriented Programming",
    icon: <MenuFoldOutlined />,
    multi: true,
    logo: "",
    disc: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data in the form of fields (attributes or properties), and code in the form of procedures (methods). It emphasizes the organization of software into reusable, self-contained units (objects) that interact with each other. OOP principles include encapsulation, inheritance, and polymorphism, enabling developers to create modular, maintainable, and scalable software solutions. By modeling real-world entities as objects with behavior and attributes, OOP facilitates code reusability, extensibility, and ease of maintenance.",
  },
];
