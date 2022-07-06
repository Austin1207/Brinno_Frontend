export function loadimgjson3 (loadImageUrl, jsonleft, top) {
    var loadjson = {
        "unit": "m",
        "layers": {
            "layer1": {
                "id": "layer1",
                "altitude": 0,
                "order": 0,
                "opacity": 1,
                "name": "default",
                "visible": true,
                "vertices": {},
                "items": {
                    "xFAw434Nm": {
                        "id": "xFAw434Nm",
                        "type": "image",
                        "prototype": "items",
                        "name": "Image",
                        "misc": {},
                        "selected": false,
                        "properties": {
                            "imageUri": loadImageUrl,
                            // "x1": 400,
                            // "y1": 315,
                            // "x2": 500,
                            // "y2": 315,
                            "x1": 837.4240654477823,
                            "y1": 1018.290005260071,
                            "x2": 500,
                            "y2": 315,
                            "distance": {
                                "length": 7800.460444371345
                            },
                            // "width": 891,
                            // "height": 630
                            "width": 0.0000096,
                            "height": 0.0000054
                        },
                        "visible": true,
                        // "x": 479.709994739929,
                        // "y": 1629.5759345522179,
                        // "x": jsonleft+750,
                        // "y": 1350-top,
                        "x": jsonleft+15000,
                        "y": 10350-top,
                        "rotation": 90
                    }
                },
                "lines": {},
                "holes": {},
                "areas": {},
                "selected": {
                    "vertices": [],
                    "lines": [],
                    "holes": [],
                    "areas": [],
                    "items": []
                }
            },

            "layer2": {
                "id": "layer2",
                "altitude": 0,
                "order": 0,
                "opacity": 1,
                "name": "default",
                "visible": true,
                "vertices": {},
                "lines": {},
                "holes": {},
                "areas": {},
                "items": {},
                "selected": {
                    "vertices": [],
                    "lines": [],
                    "holes": [],
                    "areas": [],
                    "items": []
                }
            }

        },
        "grids": {
            "h1": {
                "id": "h1",
                "type": "horizontal-streak",
                "properties": {
                    "step": 20,
                    "colors": ["#808080", "#ddd", "#ddd", "#ddd", "#ddd"]
                }
            },
            "v1": {
                "id": "v1",
                "type": "vertical-streak",
                "properties": {
                    "step": 20,
                    "colors": ["#808080", "#ddd", "#ddd", "#ddd", "#ddd"]
                }
            }
        },
        "selectedLayer": "layer1",
        "groups": {},
        "width": 30000,
        "height": 20000,
        "meta": {},
        "guides": {
            "horizontal": {},
            "vertical": {},
            "circular": {}
        }
    }
    return loadjson
}