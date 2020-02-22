class CacheData {
    constructor( ) {
        this.myMap = { }
    }

    set( param, value, metrics = null ) {
        this.myMap[ param ] = {
            data: value,
            timestamp: new Date( ),
            metrics: metrics,
            properties: { }
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

    setProperty( param, propertyName, propertyValue ) {
        if( this.myMap[ param ] != undefined ) {
            this.myMap[ param ].properties[ propertyName ] = propertyValue;
        }
        else {
            return null;
        }
    }

    getProperty( param, propertyName ) {
        if( this.myMap[ param ] != undefined ) {
            return this.myMap[ param ].properties[ propertyName ];
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