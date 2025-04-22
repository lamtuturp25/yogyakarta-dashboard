var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Administrasi_Kecamatan_1 = new ol.format.GeoJSON();
var features_Administrasi_Kecamatan_1 = format_Administrasi_Kecamatan_1.readFeatures(json_Administrasi_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Kecamatan_1.addFeatures(features_Administrasi_Kecamatan_1);
var lyr_Administrasi_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_Kecamatan_1, 
                style: style_Administrasi_Kecamatan_1,
                popuplayertitle: 'Administrasi_Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/Administrasi_Kecamatan_1.png" /> Administrasi_Kecamatan'
            });
var format_NDVI_01_2024_2 = new ol.format.GeoJSON();
var features_NDVI_01_2024_2 = format_NDVI_01_2024_2.readFeatures(json_NDVI_01_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_01_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_01_2024_2.addFeatures(features_NDVI_01_2024_2);
var lyr_NDVI_01_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVI_01_2024_2, 
                style: style_NDVI_01_2024_2,
                popuplayertitle: 'NDVI_01_2024',
                interactive: true,
    title: 'NDVI_01_2024<br />\
    <img src="styles/legend/NDVI_01_2024_2_0.png" /> 0,037 - 0,091<br />\
    <img src="styles/legend/NDVI_01_2024_2_1.png" /> 0,091 - 0,175<br />\
    <img src="styles/legend/NDVI_01_2024_2_2.png" /> 0,175 - 0,246<br />\
    <img src="styles/legend/NDVI_01_2024_2_3.png" /> 0,246 - 0,313<br />\
    <img src="styles/legend/NDVI_01_2024_2_4.png" /> 0,313 - 0,359<br />' });
var format_NDVI_02_2024_3 = new ol.format.GeoJSON();
var features_NDVI_02_2024_3 = format_NDVI_02_2024_3.readFeatures(json_NDVI_02_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_02_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_02_2024_3.addFeatures(features_NDVI_02_2024_3);
var lyr_NDVI_02_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVI_02_2024_3, 
                style: style_NDVI_02_2024_3,
                popuplayertitle: 'NDVI_02_2024',
                interactive: true,
    title: 'NDVI_02_2024<br />\
    <img src="styles/legend/NDVI_02_2024_3_0.png" /> 0,073 - 0,143<br />\
    <img src="styles/legend/NDVI_02_2024_3_1.png" /> 0,143 - 0,238<br />\
    <img src="styles/legend/NDVI_02_2024_3_2.png" /> 0,238 - 0,305<br />\
    <img src="styles/legend/NDVI_02_2024_3_3.png" /> 0,305 - 0,357<br />\
    <img src="styles/legend/NDVI_02_2024_3_4.png" /> 0,357 - 0,413<br />' });
var format_NDVI_03_2024_4 = new ol.format.GeoJSON();
var features_NDVI_03_2024_4 = format_NDVI_03_2024_4.readFeatures(json_NDVI_03_2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVI_03_2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVI_03_2024_4.addFeatures(features_NDVI_03_2024_4);
var lyr_NDVI_03_2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVI_03_2024_4, 
                style: style_NDVI_03_2024_4,
                popuplayertitle: 'NDVI_03_2024',
                interactive: true,
    title: 'NDVI_03_2024<br />\
    <img src="styles/legend/NDVI_03_2024_4_0.png" /> -0,007 - 0,003<br />\
    <img src="styles/legend/NDVI_03_2024_4_1.png" /> 0,003 - 0,213<br />\
    <img src="styles/legend/NDVI_03_2024_4_2.png" /> 0,213 - 0,284<br />\
    <img src="styles/legend/NDVI_03_2024_4_3.png" /> 0,284 - 0,349<br />\
    <img src="styles/legend/NDVI_03_2024_4_4.png" /> 0,349 - 0,471<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Administrasi_Kecamatan_1.setVisible(true);lyr_NDVI_01_2024_2.setVisible(true);lyr_NDVI_02_2024_3.setVisible(true);lyr_NDVI_03_2024_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Administrasi_Kecamatan_1,lyr_NDVI_01_2024_2,lyr_NDVI_02_2024_3,lyr_NDVI_03_2024_4];
lyr_Administrasi_Kecamatan_1.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdprov': 'kdprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmprov': 'nmprov', 'idkec': 'idkec', 'periode': 'periode', 'sumber': 'sumber', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', 'SimPgnFlag': 'SimPgnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_NDVI_01_2024_2.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdprov': 'kdprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmprov': 'nmprov', 'idkec': 'idkec', 'periode': 'periode', 'sumber': 'sumber', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', 'SimPgnFlag': 'SimPgnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', '_mean': '_mean', '_min': '_min', '_max': '_max', });
lyr_NDVI_02_2024_3.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdprov': 'kdprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmprov': 'nmprov', 'idkec': 'idkec', 'periode': 'periode', 'sumber': 'sumber', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', 'SimPgnFlag': 'SimPgnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', '_mean': '_mean', '_min': '_min', '_max': '_max', });
lyr_NDVI_03_2024_4.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdkab': 'kdkab', 'kdkec': 'kdkec', 'kdprov': 'kdprov', 'nmkab': 'nmkab', 'nmkec': 'nmkec', 'nmprov': 'nmprov', 'idkec': 'idkec', 'periode': 'periode', 'sumber': 'sumber', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', 'SimPgnFlag': 'SimPgnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', '_mean': '_mean', '_min': '_min', '_max': '_max', });
lyr_Administrasi_Kecamatan_1.set('fieldImages', {'FID': '', 'gid': '', 'kdkab': '', 'kdkec': '', 'kdprov': '', 'nmkab': '', 'nmkec': '', 'nmprov': '', 'idkec': '', 'periode': '', 'sumber': '', 'Shape_Leng': '', 'Shape_Area': '', 'InPoly_FID': '', 'SimPgnFlag': '', 'MaxSimpTol': '', 'MinSimpTol': '', });
lyr_NDVI_01_2024_2.set('fieldImages', {'FID': 'TextEdit', 'gid': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmprov': 'TextEdit', 'idkec': 'TextEdit', 'periode': 'TextEdit', 'sumber': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', 'SimPgnFlag': 'TextEdit', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', '_mean': 'TextEdit', '_min': 'TextEdit', '_max': 'TextEdit', });
lyr_NDVI_02_2024_3.set('fieldImages', {'FID': 'TextEdit', 'gid': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmprov': 'TextEdit', 'idkec': 'TextEdit', 'periode': 'TextEdit', 'sumber': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', 'SimPgnFlag': 'TextEdit', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', '_mean': 'TextEdit', '_min': 'TextEdit', '_max': 'TextEdit', });
lyr_NDVI_03_2024_4.set('fieldImages', {'FID': 'TextEdit', 'gid': 'TextEdit', 'kdkab': 'TextEdit', 'kdkec': 'TextEdit', 'kdprov': 'TextEdit', 'nmkab': 'TextEdit', 'nmkec': 'TextEdit', 'nmprov': 'TextEdit', 'idkec': 'TextEdit', 'periode': 'TextEdit', 'sumber': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', 'SimPgnFlag': 'TextEdit', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', '_mean': 'TextEdit', '_min': 'TextEdit', '_max': 'TextEdit', });
lyr_Administrasi_Kecamatan_1.set('fieldLabels', {'FID': 'no label', 'gid': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmprov': 'no label', 'idkec': 'no label', 'periode': 'no label', 'sumber': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', 'SimPgnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_NDVI_01_2024_2.set('fieldLabels', {'FID': 'no label', 'gid': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmprov': 'no label', 'idkec': 'no label', 'periode': 'no label', 'sumber': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', 'SimPgnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', '_mean': 'no label', '_min': 'no label', '_max': 'no label', });
lyr_NDVI_02_2024_3.set('fieldLabels', {'FID': 'no label', 'gid': 'no label', 'kdkab': 'no label', 'kdkec': 'no label', 'kdprov': 'no label', 'nmkab': 'no label', 'nmkec': 'no label', 'nmprov': 'no label', 'idkec': 'no label', 'periode': 'no label', 'sumber': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', 'SimPgnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', '_mean': 'no label', '_min': 'no label', '_max': 'no label', });
lyr_NDVI_03_2024_4.set('fieldLabels', {'FID': 'hidden field', 'gid': 'hidden field', 'kdkab': 'hidden field', 'kdkec': 'hidden field', 'kdprov': 'hidden field', 'nmkab': 'no label', 'nmkec': 'no label', 'nmprov': 'no label', 'idkec': 'no label', 'periode': 'no label', 'sumber': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'InPoly_FID': 'no label', 'SimPgnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', '_mean': 'no label', '_min': 'no label', '_max': 'no label', });
lyr_NDVI_03_2024_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});