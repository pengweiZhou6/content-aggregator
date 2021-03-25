const CategoryService = require('./CategoryService');
const PostService = require('./PostService');
const moment = require('moment');
const Parser = require('rss-parser');

class StreamParsingService {

    async parseStreams() {

        const streams = await this.getStreams();
        const count = streams.length;

        if (count == 0) return;

        console.log(JSON.stringify(streams));

        const postService     = new PostService();
        const categoryService = new CategoryService();
        const dbCategories    = await categoryService.getCategories();
        const feeds           = await Promise.all(streams.map(stream => this.parseURLWrapper(stream.url)));
        // const beginTime       = moment().subtract(7, 'days').toDate(); // For testing
        const beginTime       = moment().subtract(1, 'hours').toDate();
        const pending         = [];

        console.log("\n\n");

        feeds.forEach((feed, index) => {
            feed.items.forEach(post => {
                if (Date.parse(post.pubDate) > beginTime) {
                    console.log(`ACTUAL CATEGORY: ${post.categories}`);
                    console.log(`TITLE: ${post.title},\nLINK: ${post.link},\nCOMID: ${streams[index].company_id},\nCATID: ${this.findCategoryID(post.categories, dbCategories)}\n`);
                    pending.push(postService.addPost(post.title, post.link, streams[index].company_id,
                                                     this.findCategoryID(post.categories, dbCategories) || streams[index].category_id,
                                                     3, false));
                }
            })
        })

        await Promise.all(pending);
        console.log(`\n\n\n[Info] Scheduler submitted ${pending.length} new posts!\n\n\n`);

    }

    async parseURLWrapper(url) {
        const parser = new Parser();
        return parser.parseURL(url).catch((err) => {
            console.log(`Blog Stream parsing error for url: ${url}`);
            console.log(err);
            return Promise.resolve({items: []});
        });
    }

    findCategoryID(postCatagories, dbCategories) {
        let found;
        for (const category of postCatagories) {
            if (found = dbCategories.find(c => c.name === category)) {
                return found.id;
            }
        }
    }

    async getStreams() {
        const postService = new PostService();
        const { posts } = await postService.getPosts(undefined, undefined, undefined, undefined, undefined, true, true);
        return posts.map(({ url, company_id }) => ({ url, company_id }));
    }

}

module.exports = StreamParsingService;
