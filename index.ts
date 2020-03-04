import test from "./test";

const dom = test({content1: "this is my Content", headingContent: "Heading Yo"}) // DOM
document.body.append(dom);