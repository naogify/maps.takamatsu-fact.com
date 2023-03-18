import type { DataDrivenPropertyValueSpecification } from "maplibre-gl";

export const lineWidth_thin: DataDrivenPropertyValueSpecification<number> = {
  type: "interval",
  stops: [
    [ 10, .5 ],
    [ 20, 4 ]
  ]
};
export const lineWidth_bold: DataDrivenPropertyValueSpecification<number> = {
  type: "interval",
  stops: [
    [ 10, 1 ],
    [ 20, 5 ]
  ]
};

export const WEB_COLORS = Object.entries({
  "MediumVioletRed": "199 21 133",
  "DeepPink": "255 20 147",
  "PaleVioletRed": "219 112 147",
  "HotPink": "255 105 180",
  "DarkRed": "139 0 0",
  "Red": "255 0 0",
  "Firebrick": "178 34 34",
  "Crimson": "220 20 60",
  "IndianRed": "205 92 92",
  "Salmon": "250 128 114",
  "DarkSalmon": "233 150 122",
  "OrangeRed": "255 69 0",
  "Tomato": "255 99 71",
  "DarkOrange": "255 140 0",
  "Coral": "255 127 80",
  "Orange": "255 165 0",
  "DarkKhaki": "189 183 107",
  "Gold": "255 215 0",
  "Khaki": "240 230 140",
  "PeachPuff": "255 218 185",
  "Maroon": "128 0 0",
  "Brown": "165 42 42",
  "SaddleBrown": "139 69 19",
  "Sienna": "160 82 45",
  "Chocolate": "210 105 30",
  "DarkGoldenrod": "184 134 11",
  "Peru": "205 133 63",
  "RosyBrown": "188 143 143",
  "Goldenrod": "218 165 32",
  "SandyBrown": "244 164 96",
  "DarkGreen": "0 100 0",
  "Green": "0 128 0",
  "DarkOliveGreen": "85 107 47",
  "ForestGreen": "34 139 34",
  "SeaGreen": "46 139 87",
  "Olive": "128 128 0",
  "OliveDrab": "107 142 35",
  "MediumSeaGreen": "60 179 113",
  "LimeGreen": "50 205 50",
  "Lime": "0 255 0",
  "SpringGreen": "0 255 127",
  "MediumSpringGreen": "0 250 154",
  "DarkSeaGreen": "143 188 143",
  "MediumAquamarine": "102 205 170",
  "YellowGreen": "154 205 50",
  "LawnGreen": "124 252 0",
  "Chartreuse": "127 255 0",
  "GreenYellow": "173 255 47",
  "PaleGreen": "152 251 152",
  "Teal": "0 128 128",
  "DarkCyan": "0 139 139",
  "CadetBlue": "95 158 160",
  "DarkTurquoise": "0 206 209",
  "MediumTurquoise": "72 209 204",
  "Turquoise": "64 224 208",
  "Aqua": "0 255 255",
  "Cyan": "0 255 255",
  "Aquamarine": "127 255 212",
  "MidnightBlue": "25 25 112",
  "Navy": "0 0 128",
  "DarkBlue": "0 0 139",
  "MediumBlue": "0 0 205",
  "Blue": "0 0 255",
  "RoyalBlue": "65 105 225",
  "SteelBlue": "70 130 180",
  "DodgerBlue": "30 144 255",
  "DeepSkyBlue": "0 191 255",
  "CornflowerBlue": "100 149 237",
  "Indigo": "75 0 130",
  "Purple": "128 0 128",
  "DarkMagenta": "139 0 139",
  "DarkViolet": "148 0 211",
  "DarkSlateBlue": "72 61 139",
  "BlueViolet": "138 43 226",
  "DarkOrchid": "153 50 204",
  "Fuchsia": "255 0 255",
  "Magenta": "255 0 255",
  "SlateBlue": "106 90 205",
  "MediumSlateBlue": "123 104 238",
  "MediumOrchid": "186 85 211",
  "MediumPurple": "147 112 219",
  "Orchid": "218 112 214",
  "Violet": "238 130 238",
  "Plum": "221 160 221",
  "Black": "0 0 0",
  "DarkSlateGray": "47 79 79",
  "DimGray": "105 105 105",
  "SlateGray": "112 128 144",
  "Gray": "128 128 128",
  "DarkGray": "169 169 169",
}).map(([key, value]) => {
  const [r, g, b] = value.split(' ').map(val => parseInt(val, 10));
  return `rgb(${r}, ${g}, ${b})`;
});

export const AREA_COLORS: {[key:string]:{[key:string]:{[key:string]:string}}} = {
  "第一種低層住居専用地域(60_40)": {
    "Polygon": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "第一種低層住居専用地域(80_50)": {
    "Polygon": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "第一種低層住居専用地域(100_60)": {
    "Polygon": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(36,190,159)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "第二種低層住居専用地域(100_60)": {
    "Polygon": {
      "color": "rgb(215,237,229)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(215,237,229)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(215,237,229)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "第二種低層住居専用地域(150_60)": {
    "Polygon": {
      "color": "rgb(215,237,229)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(215,237,229)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(215,237,229)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "第一種中高層住居専用地域": { // NOTE: 第一種中高層住居専用地域(200_60) を 第一種中高層住居専用地域 に変更
    "Polygon": {
      "color": "rgb(198,224,159)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(198,224,159)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(198,224,159)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "第二種中高層住居専用地域": { // NOTE: 第二種中高層住居専用地域(200_60) を 第二種中高層住居専用地域 に変更
    "Polygon": {
      "color": "rgb(234,243,220)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(234,243,220)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(234,243,220)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "第一種住居地域": { // NOTE: 第一種住居地域(200_60) を 第一種住居地域 に変更
    "Polygon": {
      "color": "rgb(255,246,152)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(255,246,152)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(255,246,152)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "第二種住居地域": { // NOTE: 第二種住居地域(200_60) を 第二種住居地域 に変更
    "Polygon": {
      "color": "rgb(255,253,237)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(255,253,237)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(255,253,237)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "準住居地域": { // NOTE: 準住居地域(200_60) を 準住居地域 に変更
    "Polygon": {
      "color": "rgb(251,194,144)",
      "outlineColor": "rgb(156,84,160)"
    },
    "LineString": {
      "color": "rgb(251,194,144)",
      "outlineColor": "rgb(156,84,160)"
    },
    "Point": {
      "color": "rgb(251,194,144)",
      "outlineColor": "rgb(156,84,160)"
    }
  },
  "近隣商業地域(200_80)": {
    "Polygon": {
      "color": "rgb(252,226,225)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(252,226,225)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(252,226,225)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "近隣商業地域(300_80)": {
    "Polygon": {
      "color": "rgb(252,226,225)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(252,226,225)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(252,226,225)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "商業地域(200_80)": {
    "Polygon": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "商業地域(300_80)": {
    "Polygon": {
      "color": "rgb(247,166,172)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(247,166,172)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(247,166,172)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "商業地域(400_80)": {
    "Polygon": {
      "color": "rgb(247,166,172)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(247,166,172)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(247,166,172)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "商業地域(500_80)": {
    "Polygon": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "商業地域(600_80)": {
    "Polygon": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "商業地域(700_80)": {
    "Polygon": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "商業地域(800_80)": {
    "Polygon": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(241,93,125)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "準工業地域": { // NOTE: 準工業地域(200_60) を 準工業地域 に変更
    "Polygon": {
      "color": "rgb(220,201,225)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(220,201,225)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(220,201,225)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "工業地域": { // NOTE: 工業地域(200_60) を 工業地域 に変更
    "Polygon": {
      "color": "rgb(217,235,248)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(217,235,248)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(217,235,248)",
      "outlineColor": "rgb(179,114,173)"
    }
  },
  "工業専用地域": { // NOTE: 工業専用地域(200_60) を 工業専用地域 に変更
    "Polygon": {
      "color": "rgb(145,201,237)",
      "outlineColor": "rgb(179,114,173)"
    },
    "LineString": {
      "color": "rgb(145,201,237)",
      "outlineColor": "rgb(179,114,173)"
    },
    "Point": {
      "color": "rgb(145,201,237)",
      "outlineColor": "rgb(179,114,173)"
    }
  }
}
