ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([54.390377, 2.104765, 97.819972, 49.249177]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IndiaMap_1 = new ol.format.GeoJSON();
var features_IndiaMap_1 = format_IndiaMap_1.readFeatures(json_IndiaMap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IndiaMap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiaMap_1.addFeatures(features_IndiaMap_1);
var lyr_IndiaMap_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndiaMap_1, 
                style: style_IndiaMap_1,
                interactive: true,
                title: '<img src="styles/legend/IndiaMap_1.png" /> India Map'
            });
var format_Bauxite_2 = new ol.format.GeoJSON();
var features_Bauxite_2 = format_Bauxite_2.readFeatures(json_Bauxite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bauxite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bauxite_2.addFeatures(features_Bauxite_2);
var lyr_Bauxite_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bauxite_2, 
                style: style_Bauxite_2,
                interactive: true,
                title: '<img src="styles/legend/Bauxite_2.png" /> Bauxite'
            });
var format_Copper_3 = new ol.format.GeoJSON();
var features_Copper_3 = format_Copper_3.readFeatures(json_Copper_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Copper_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Copper_3.addFeatures(features_Copper_3);
var lyr_Copper_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Copper_3, 
                style: style_Copper_3,
                interactive: true,
                title: '<img src="styles/legend/Copper_3.png" /> Copper'
            });
var format_Diamond_4 = new ol.format.GeoJSON();
var features_Diamond_4 = format_Diamond_4.readFeatures(json_Diamond_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Diamond_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diamond_4.addFeatures(features_Diamond_4);
var lyr_Diamond_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diamond_4, 
                style: style_Diamond_4,
                interactive: true,
                title: '<img src="styles/legend/Diamond_4.png" /> Diamond'
            });
var format_Gold_5 = new ol.format.GeoJSON();
var features_Gold_5 = format_Gold_5.readFeatures(json_Gold_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Gold_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gold_5.addFeatures(features_Gold_5);
var lyr_Gold_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gold_5, 
                style: style_Gold_5,
                interactive: true,
                title: '<img src="styles/legend/Gold_5.png" /> Gold'
            });
var format_Iron_6 = new ol.format.GeoJSON();
var features_Iron_6 = format_Iron_6.readFeatures(json_Iron_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Iron_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Iron_6.addFeatures(features_Iron_6);
var lyr_Iron_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Iron_6, 
                style: style_Iron_6,
                interactive: true,
                title: '<img src="styles/legend/Iron_6.png" /> Iron'
            });
var format_Lead_7 = new ol.format.GeoJSON();
var features_Lead_7 = format_Lead_7.readFeatures(json_Lead_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lead_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lead_7.addFeatures(features_Lead_7);
var lyr_Lead_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lead_7, 
                style: style_Lead_7,
                interactive: true,
                title: '<img src="styles/legend/Lead_7.png" /> Lead'
            });
var format_Manganese_8 = new ol.format.GeoJSON();
var features_Manganese_8 = format_Manganese_8.readFeatures(json_Manganese_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Manganese_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manganese_8.addFeatures(features_Manganese_8);
var lyr_Manganese_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manganese_8, 
                style: style_Manganese_8,
                interactive: true,
                title: '<img src="styles/legend/Manganese_8.png" /> Manganese'
            });
var format_Petroleum_9 = new ol.format.GeoJSON();
var features_Petroleum_9 = format_Petroleum_9.readFeatures(json_Petroleum_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Petroleum_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Petroleum_9.addFeatures(features_Petroleum_9);
var lyr_Petroleum_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Petroleum_9, 
                style: style_Petroleum_9,
                interactive: true,
                title: '<img src="styles/legend/Petroleum_9.png" /> Petroleum'
            });
var format_Uranium_10 = new ol.format.GeoJSON();
var features_Uranium_10 = format_Uranium_10.readFeatures(json_Uranium_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Uranium_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uranium_10.addFeatures(features_Uranium_10);
var lyr_Uranium_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uranium_10, 
                style: style_Uranium_10,
                interactive: true,
                title: '<img src="styles/legend/Uranium_10.png" /> Uranium'
            });
var format_Coal_11 = new ol.format.GeoJSON();
var features_Coal_11 = format_Coal_11.readFeatures(json_Coal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Coal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coal_11.addFeatures(features_Coal_11);
var lyr_Coal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Coal_11, 
                style: style_Coal_11,
                interactive: true,
                title: '<img src="styles/legend/Coal_11.png" /> Coal'
            });

lyr_OSMStandard_0.setVisible(true);lyr_IndiaMap_1.setVisible(true);lyr_Bauxite_2.setVisible(true);lyr_Copper_3.setVisible(true);lyr_Diamond_4.setVisible(true);lyr_Gold_5.setVisible(true);lyr_Iron_6.setVisible(true);lyr_Lead_7.setVisible(true);lyr_Manganese_8.setVisible(true);lyr_Petroleum_9.setVisible(true);lyr_Uranium_10.setVisible(true);lyr_Coal_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_IndiaMap_1,lyr_Bauxite_2,lyr_Copper_3,lyr_Diamond_4,lyr_Gold_5,lyr_Iron_6,lyr_Lead_7,lyr_Manganese_8,lyr_Petroleum_9,lyr_Uranium_10,lyr_Coal_11];
lyr_IndiaMap_1.set('fieldAliases', {'DST_ID': 'DST_ID', 'DISTRICT': 'DISTRICT', 'STATE': 'STATE', });
lyr_Bauxite_2.set('fieldAliases', {'Mine': 'Mine', 'State': 'State', 'N': 'N', 'E': 'E', });
lyr_Copper_3.set('fieldAliases', {'Mine': 'Mine', 'State': 'State', 'N': 'N', 'E': 'E', });
lyr_Diamond_4.set('fieldAliases', {'Mine': 'Mine', 'State': 'State', 'Coordinate N': 'Coordinate N', 'Coordinate E': 'Coordinate E', });
lyr_Gold_5.set('fieldAliases', {'City': 'City', 'North': 'North', 'East': 'East', });
lyr_Iron_6.set('fieldAliases', {'Mines': 'Mines', 'North': 'North', 'East': 'East', });
lyr_Lead_7.set('fieldAliases', {'Name': 'Name', 'North': 'North', 'East': 'East', });
lyr_Manganese_8.set('fieldAliases', {'mine': 'mine', 'State': 'State', 'Cooridinate N': 'Cooridinate N', 'Coordinate E': 'Coordinate E', });
lyr_Petroleum_9.set('fieldAliases', {'City': 'City', 'North': 'North', 'East': 'East', });
lyr_Uranium_10.set('fieldAliases', {'Name': 'Name', 'North': 'North', 'East': 'East', });
lyr_Coal_11.set('fieldAliases', {'City': 'City', 'East': 'East', 'North': 'North', });
lyr_IndiaMap_1.set('fieldImages', {'DST_ID': 'TextEdit', 'DISTRICT': 'TextEdit', 'STATE': 'TextEdit', });
lyr_Bauxite_2.set('fieldImages', {'Mine': 'TextEdit', 'State': 'TextEdit', 'N': 'TextEdit', 'E': 'TextEdit', });
lyr_Copper_3.set('fieldImages', {'Mine': 'TextEdit', 'State': 'TextEdit', 'N': 'TextEdit', 'E': 'TextEdit', });
lyr_Diamond_4.set('fieldImages', {'Mine': 'TextEdit', 'State': 'TextEdit', 'Coordinate N': 'TextEdit', 'Coordinate E': 'TextEdit', });
lyr_Gold_5.set('fieldImages', {'City': 'TextEdit', 'North': 'TextEdit', 'East': 'TextEdit', });
lyr_Iron_6.set('fieldImages', {'Mines': 'TextEdit', 'North': 'TextEdit', 'East': 'TextEdit', });
lyr_Lead_7.set('fieldImages', {'Name': 'TextEdit', 'North': 'TextEdit', 'East': 'TextEdit', });
lyr_Manganese_8.set('fieldImages', {'mine': 'TextEdit', 'State': 'TextEdit', 'Cooridinate N': 'TextEdit', 'Coordinate E': 'TextEdit', });
lyr_Petroleum_9.set('fieldImages', {'City': 'TextEdit', 'North': 'TextEdit', 'East': 'TextEdit', });
lyr_Uranium_10.set('fieldImages', {'Name': 'TextEdit', 'North': 'TextEdit', 'East': 'TextEdit', });
lyr_Coal_11.set('fieldImages', {'City': 'TextEdit', 'East': 'TextEdit', 'North': 'TextEdit', });
lyr_IndiaMap_1.set('fieldLabels', {'DST_ID': 'no label', 'DISTRICT': 'inline label', 'STATE': 'inline label', });
lyr_Bauxite_2.set('fieldLabels', {'Mine': 'inline label', 'State': 'no label', 'N': 'inline label', 'E': 'inline label', });
lyr_Copper_3.set('fieldLabels', {'Mine': 'inline label', 'State': 'no label', 'N': 'inline label', 'E': 'inline label', });
lyr_Diamond_4.set('fieldLabels', {'Mine': 'inline label', 'State': 'no label', 'Coordinate N': 'inline label', 'Coordinate E': 'inline label', });
lyr_Gold_5.set('fieldLabels', {'City': 'inline label', 'North': 'inline label', 'East': 'inline label', });
lyr_Iron_6.set('fieldLabels', {'Mines': 'inline label', 'North': 'inline label', 'East': 'inline label', });
lyr_Lead_7.set('fieldLabels', {'Name': 'inline label', 'North': 'inline label', 'East': 'inline label', });
lyr_Manganese_8.set('fieldLabels', {'mine': 'inline label', 'State': 'no label', 'Cooridinate N': 'inline label', 'Coordinate E': 'inline label', });
lyr_Petroleum_9.set('fieldLabels', {'City': 'inline label', 'North': 'inline label', 'East': 'inline label', });
lyr_Uranium_10.set('fieldLabels', {'Name': 'inline label', 'North': 'inline label', 'East': 'inline label', });
lyr_Coal_11.set('fieldLabels', {'City': 'inline label', 'East': 'inline label', 'North': 'inline label', });
lyr_Coal_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});