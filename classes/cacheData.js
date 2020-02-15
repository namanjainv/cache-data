class CacheData {
    constructor( timeToLive = 5 ) {
        this.myMap = { }
        this.timeToLive = 60000 * timeToLive;
    }

    set( param, value, metrics = null ) {
        this.myMap[ param ] = {
            data: value,
            timestamp: new Date( ),
            metrics: metrics
        }
    }

    get( param ) {
        if( this.myMap[ param ] != undefined ) {
            this.myMap[ param ].timestamp = new Date( )
            return this.myMap[ param ].data;
        }
        else {
            return null;
        }
    }

    clear( ) {
        this.myMap = { }
    }
}

module.exports.CacheData = CacheData;