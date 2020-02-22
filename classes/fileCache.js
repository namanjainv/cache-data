var cacheData = require('./cacheData.js');

const fs = require('fs')

class FileCache extends cacheData.CacheData {
    constructor( rootPath ) {
        super( );
        this.rootPath = rootPath;
    }

    readFile( filePath, callback, hardRead = false ) {
        let mapFileData = hardRead ? undefined : this.get( 'fs_' + filePath );
        let that = this;
        if( mapFileData === undefined || mapFileData === null ) {
            fs.readFile( filePath , 'utf8', function(err, fileData) {
                if(!err) {
                    that.set( 'fs_' + filePath, fileData );
                }
                callback( err, fileData );
            });
        }
        else {
            callback( null, mapFileData );
        }
    }
}

module.exports.FileCache = FileCache;