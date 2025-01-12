import { posts } from "./higherorderfunctions.js";

posts.forEach((post)=>{
    console.log(post);
});

//console.clear();

const filterdPosts = posts.filter((post) => {
    return post.userId===5;
});

console.log(filterdPosts);

const mappedPosts = posts.map((post) => {
    return post.id;
});

console.log(mappedPosts);