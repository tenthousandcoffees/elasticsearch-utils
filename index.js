'use strict';

const fs = require('fs');

const ELASTICSEARCH_INDEX_MAPPINGS = JSON.parse(fs.readFileSync('elasticsearch-mappings.json', 'utf8'));

module.exports = {
    createIndex
};

function createIndex(esClient, indexName) {
    return esClient.indices.create({
        index: indexName,
        body: ELASTICSEARCH_INDEX_MAPPINGS
    });
}
