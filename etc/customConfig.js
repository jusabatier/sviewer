customConfig = {
    title: 'GéoPortail du Velay - Visualiseur mobile',

    /**
     * force default language, see etc/i18n.js
     */
    // lang: 'fr',

    /**
     * base url of the geOrchetra SDI. Layers coming from this SDI
     * will have enhanced features.
     */
    geOrchestraBaseUrl: 'https://opendata.agglo-lepuyenvelay.fr/',

    /**
     * map bounds
     */
    initialExtent: [403267.869629212, 5601547.20745517, 451038.019235463, 5643758.74706054],
    maxExtent: [229642.568532607, 5561196.5370108, 499704.062391854, 5910120.28631865],
    restrictedExtent: [229642.568532607, 5561196.5370108, 499704.062391854, 5910120.28631865],

    /**
     * getFeatureInfo control
     */
    maxFeatures: 10,
    nodata: '<!--nodatadetect-->\n<!--nodatadetect-->',

    /**
     * openLS control
     */
    openLSGeocodeUrl: "https://gpp3-wxs.ign.fr/m37ynhx7owts55offza98n1q/geoportail/ols?",

    /**
     * background layers (EPSG:3857)
     */
    layersBackground: [
        new ol.layer.Tile({
              source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://opendata.agglo-lepuyenvelay.fr/geowebcache/service/wms',
                params: {
                    'LAYERS': 'ortho:Ortho_CAPV_2013_10CM',
                    'TILED': true,
					'SRS': 'EPSG:3857'
                },
                extent: [229642.568532607, 5561196.5370108, 499704.062391854, 5910120.28631865],
                attributions: [new ol.Attribution({ html: 'Orthophotographie 2013, 10cm/pixel - CRAIG'})],
            })
        }),
		new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://opendata.agglo-lepuyenvelay.fr/geowebcache/service/wms',
                params: {
                    'LAYERS': 'ortho:Ortho_CAPV_2009_2010_15CM',
                    'TILED': true,
					'SRS': 'EPSG:3857'
                },
                extent: [229642.568532607, 5561196.5370108, 499704.062391854, 5910120.28631865],
                attributions: [new ol.Attribution({ html: 'Orthophotographie 2010, 15cm/pixel - CRAIG'})],
            })
        }),
		new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://opendata.agglo-lepuyenvelay.fr/geowebcache/service/wms',
                params: {
                    'LAYERS': 'ortho:Ortho_CAPV_2007',
                    'TILED': true,
					'SRS': 'EPSG:3857'
                },
                extent: [229642.568532607, 5561196.5370108, 499704.062391854, 5910120.28631865],
                attributions: [new ol.Attribution({ html: 'Orthophotographie 2007, basse résolution - SIG Le Puy en Velay'})],
            })
        }),
		new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://opendata.agglo-lepuyenvelay.fr/geowebcache/service/wms',
                params: {
                    'LAYERS': 'ortho:Scan25_CAPV',
                    'TILED': true,
					'SRS': 'EPSG:3857'
                },
                extent: [229642.568532607, 5561196.5370108, 499704.062391854, 5910120.28631865],
                attributions: [new ol.Attribution({ html: 'Scan25 - SIG Le Puy en Velay'})],
            })
        })
    ],

    /**
     * social media links (prefixes)
     */
    socialMedia: {
        'Twitter' : 'https://twitter.com/intent/tweet?text=',
        'Google+' : 'https://plus.google.com/share?url=',
        'Facebook': 'http://www.facebook.com/sharer/sharer.php?u='
    }
};
