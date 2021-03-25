const RSS = require('rss');
const fs = require('fs');
const PostService = require('./PostService');

const RSSService = function () { }

RSSService.prototype.generateRSS = async function () {
    const feed = new RSS({
        title: 'Content Aggregator',
        description: 'RSS feed for Galvatron Content Aggregator',
        feed_url: 'http://galvatron.dream.sh:9000/feed',
        site_url: 'http://galvatron.dream.sh:3000.com/home',
        language: 'en'
    });

    const postService = new PostService();
    const { posts } = await postService.getPosts(0, 20, undefined, undefined, undefined, true, false);
    posts.forEach((post) =>
        feed.item({
            title: post.title,
            description: post.title,
            url: post.url,
            date: post.last_updated
        })
    );

    const dirPath = `${__dirname}/../public/rss/rssfeed.xml`;

    fs.writeFile(dirPath, feed.xml({ indent: true }), (error) => {
        if (error) {
            console.log(error);
        }
    });
}

module.exports = RSSService;