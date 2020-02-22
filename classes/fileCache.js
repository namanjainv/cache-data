var cacheData = require('./cacheData.js');

const fs = require('fs')



class FileCache extends cacheData.CacheData {
    constructor( rootPath ) {
        super( );
        this.rootPath = rootPath;
    }

    readFile( filePath, callback, hardRead = false ) {
        let key = 'fs_' + filePath;
        let mapFileData = hardRead ? undefined : this.get( key );

        let that = this;

        // Read file stats
        fs.stat( filePath, function( err, stats ) {
            if(!err) {
                if( mapFileData === undefined || mapFileData === null || that.getProperty( key, "mtime" ).toString( ) != stats.mtime.toString( ) ) {
                    fs.readFile( filePath , 'utf8', function( err, fileData ) {
                        if( !err ) {
                            that.set( key, fileData );
                            that.setProperty( key, "mtime", stats.mtime );
                        }
                        callback( err, fileData );
                    });
                
                }
                else {
                    callback( null, mapFileData );
                }
            }
            else {
                callback( err, null );
            }
        });
    }
}

module.exports.FileCache = FileCache;