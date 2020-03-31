const takeScreenshots = require('./functions/takeScreenshots');
const getUsers = require('./repo/getUsers');
(async () => {
    const users = await getUsers();
    let link = users[0].twitterUrls[0];
    await takeScreenshots(link);
})()




