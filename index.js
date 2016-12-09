'use strict';

const fs = require('fs');
const path = require('path');

const ES_MAPPINGS_PATH = path.join(__dirname, 'elasticsearch-mappings.json');
const ELASTICSEARCH_INDEX_MAPPINGS = JSON.parse(fs.readFileSync(ES_MAPPINGS_PATH, 'utf8'));

module.exports = {
    createIndex,
    deleteIndex
};

function createIndex(esClient, indexName) {
    return esClient.indices.create({
        index: indexName,
        body: ELASTICSEARCH_INDEX_MAPPINGS
    });
}

function deleteIndex(esClient, indexName) {
    return esClient.indices.delete({ index: indexName });
}
