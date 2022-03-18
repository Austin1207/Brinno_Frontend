export function loadimgjson (loadImageUrl) {
    var loadjson = {
        "unit": "cm",
        "layers": {
            "layer0": {
                "id": "layer0",
                "altitude": 0,
                "order": 0,
                "opacity": 1,
                "name": "default",
                "visible": true,
                "vertices": {},
                "lines": {},
                "holes": {},
                "areas": {},
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
                            "x1": 0,
                            "y1": 0,
                            "x2": 100,
                            "y2": 0,
                            "distance": {
                                "length": 100
                            },
                            "width": 891,
                            "height": 630
                        },
                        "visible": true,
                        "x": 479.709994739929,
                        "y": 1629.5759345522179,
                        "rotation": 0
                    }
                },
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
        "selectedLayer": "layer-1",
        "groups": {},
        "width": 3000,
        "height": 2000,
        "meta": {},
        "guides": {
            "horizontal": {},
            "vertical": {},
            "circular": {}
        }
    }
    return loadjson
}