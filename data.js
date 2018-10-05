const fs = require('fs');
const sync = require('sync-request');
const Product = require('./src/models/products');
const Boom = require('boom');
var keywordsMap = new Map();

const loadData = () => {
	var productIds = fs.readFileSync('data.csv').toString().split(",\n");
	if(productIds.length==0) return Boom.notFound("Could not read Item id data file");
	for (var i = 0; i < productIds.length; i++) {
    var res = sync('GET','http://api.walmartlabs.com/v1/items/'+productIds[i]+'?format=json&apiKey=kjybrqfdgp3u4yv2qzcnjndj');
	    var resBody = JSON.parse(res.body);
	    if(JSON.parse(res.statusCode == 200)) {
	    	populateDb(resBody);
	    	mapKeywords(resBody.itemId, resBody.shortDescription+resBody.longDescription);
	    }
	    else {
	    	return Boom.notFound("Could not fetch data from Walmart API for"+res.url);
		}
	}
}

const populateDb = (resBody) => {
	const product = new Product({
				'itemId': resBody.itemId,
				'name': resBody.name,
				'price': resBody.salePrice,
				'image': resBody.mediumImage,
			});
			product.save((error, product) => {
				if (error) {
					console.error(error);
					return Boom.badData('Unable to save data in Database');
				}
			});
}

const mapKeywords = (id, desc) => {
	var stopwords = [ "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "could", "did", "do", "does", "doing", "down", "during", "each", "few", "for", "from", "further", "had", "has", "have", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "it", "it's", "its", "itself", "let's", "me", "more", "most", "my", "myself", "nor", "of", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "she", "she'd", "she'll", "she's", "should", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "we", "we'd", "we'll", "we're", "we've", "were", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "would", "you", "yet", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves" ];
	var words = desc.split(' ');
	words.forEach(function(word) {
		var mWord = modifyWord(word);
		if(!stopwords.includes(mWord)) {
			if(!keywordsMap.has(mWord)) {
				keywordsMap.set(mWord, new Set([id]));
			}
			else {	
				keywordsMap.set(mWord, keywordsMap.get(mWord).add(id));
			}
		}
	});
}

const modifyWord = (word) => {
	return word.replace(/[^\w\s]|_/g, "")
         	   .replace(/\s+/g, "").toLowerCase();
}

module.exports = {
	loadData,
	keywordsMap,
	populateDb
};

