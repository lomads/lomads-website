const express = require('express');
const path = require('path');
const posts = require('../src/utils/blog.json');
const fs = require('fs');

const app = express();

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.use(express.json());

// Handling the file based on route
const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');
app.get('/*', (req, res, next) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }

        const postId = req.params['0'].split('/')[1];
        const post = posts.find((item) => item.url === postId);

        if(!post) return res.status(404).send("Post not found");

        htmlData = htmlData.replace(
          "<title>Lomads</title>",
          `<title>${post.title}</title>`
        )
        .replace('__META_OG_TITLE__', post.title)
        .replace('__META_OG_DESCRIPTION__', post.subtitle)
        .replace('__META_DESCRIPTION__', post.subtitle)
        .replace('__META_OG_IMAGE__', post.image)
        return res.send(htmlData);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
      return console.log('Error during app startup', error);
  }
  console.log("listening on " + PORT + "...");
});
