import * as fs from 'fs';
import getPosts from './getPosts.js';

function padding(num) {
    if (num < 10) {
        return `0${num}`;
    }
    
    return `${num}`
}

let date = new Date();

const d = padding(date.getDate());
const m = padding(date.getMonth() + 1);
const y = padding(date.getFullYear());

const posts = getPosts();
const postNum = parseInt(posts.map(data => data.slug).filter(data => data.startsWith(`${y}${m}${d}`))[0].split('_')[1]) + 1;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const data = 
`---
title: 'New Post'
description: 'Description of new post'
date: '${d + ' ' + months[date.getMonth()] + ', ' + y}'
tags: []
---
<!-- customize your filename, title, desc, and all of this file properties -->
<!-- fill your content here -->
`;

fs.writeFileSync(`./posts/${y}${m}${d}_${postNum}_new_post.mdx`, data);
console.log('post created, now you can customize your post!');