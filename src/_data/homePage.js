const metaData = require('./metadata.js')
const AssetCache = require("@11ty/eleventy-cache-assets");

async function fetchData() {
    urlToCache = metaData.apiUrl + '/pages.json';
    cacheInterval = metaData.cacheInterval;
    try {
        return AssetCache(
            urlToCache,
            {
                duration: cacheInterval,
                type: "json"
            }
        );
    } catch (error) {
        console.error(`Error: ${error}`);
        return [];
    }
}

async function processData(data) {
    return Promise.all(
        data.map(async (dataItem) => {
            if (dataItem.template == "templates/home-page.php") {
                return await {
                    id: dataItem.id,
                    title: dataItem.title,
                    modified: dataItem.modified,
                    slug: dataItem.slug,
                    yoast: dataItem.yoast_head,
                    template: dataItem.template,
                    video: dataItem.acf.video.url,
                    acf: dataItem.acf
                };
            } else {
                return await {
                    data: 'false',
                };
            }
        })
    );
}

module.exports = async () => {
    const data = await fetchData();
    const processedData = await processData(data);
    return processedData;
};