import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type * as maplibregl from 'maplibre-gl';
import { CatalogFeature, SingleCatalogItem } from './api/catalog';
import { lineWidth_thin, AREA_COLORS } from './utils/mapStyling';

declare global {
  interface Window {
    geolonia: any;
  }
}

type LayerSpecification = (
  maplibregl.FillLayerSpecification |
  maplibregl.LineLayerSpecification |
  maplibregl.SymbolLayerSpecification |
  maplibregl.CircleLayerSpecification
)
type LayerTemplate = (LayerSpecification & {
  source?: string | maplibregl.SourceSpecification | undefined;
});

const LAYER_TEMPLATES: [string, (color: {[key:string]: string}) => LayerTemplate[]][] = [
  [ "Polygon", (color) => {
    return [
      {
        id: "",
        source: "takamatsu",
        "source-layer": "main",
        type: "fill",
        paint: {
          "fill-color": color.Polygon,
          "fill-opacity": 0.3,
        },
      },
      {
        id: "/outline",
        source: "takamatsu",
        "source-layer": "main",
        type: "line",
        paint: {
          "line-color": color.Polygon,
          "line-width": lineWidth_thin,
        },
      },
    ]
  } ],
  [ "LineString", (color) => {
    return [{
      id: "",
      source: "takamatsu",
      "source-layer": "main",
      type: "line",
      paint: {
        "line-color": color.Polygon,
        "line-width": lineWidth_thin,
      },
    }]
  }],
  [ "Point", (color) => {
    return [{
      id: "",
      source: "takamatsu",
      "source-layer": "main",
      type: "circle",
      paint: {
        'circle-radius': 7,
        'circle-color': color.Point,
        'circle-opacity': .8,
        'circle-stroke-width': 1,
        'circle-stroke-color': 'gray',
        'circle-stroke-opacity': 1,
      }
    }]
  }],
];

interface Props {
  catalogData: SingleCatalogItem[];
  selectedLayers: string[];
  setSelectedFeatures: React.Dispatch<React.SetStateAction<CatalogFeature[]>>
}

const MainMap: React.FC<Props> = ({catalogData, selectedLayers, setSelectedFeatures}) => {
  const [map, setMap] = useState<maplibregl.Map | undefined>(undefined);
  const mapContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const map: maplibregl.Map = new window.geolonia.Map({
      container: mapContainer.current,
      style: "geolonia/gsi",
      hash: true,
      center: [ 134.0403, 34.334 ],
      zoom: 9.2,
    });

    (window as any)._mainMap = map;

    map.on("load", () => {
      map.addSource('takamatsu', {
        type: 'vector',
        url: "https://tileserver.geolonia.com/takamatsu_main_v0/tiles.json?key=YOUR-API-KEY"
      });

      setMap(map);
    });

    map.on('click', (e) => {
      const features = map.queryRenderedFeatures(e.point).filter(feature => feature.source === 'takamatsu');
      if(features.length === 0) {
        return
      }
      setSelectedFeatures(features.map(feature => {
        return {
          catalog: catalogData.find(item => item.class === feature.properties.class)!,
          properties: feature.properties,
        }
      }));
    });

    return () => {
      map.remove();
    };
  }, [catalogData, mapContainer, setMap, setSelectedFeatures]);

  useEffect(() => {
    if (!map) return;

    for (const definition of catalogData) {
      const layer = definition.class;
      const isSelected = selectedLayers.includes(layer);

      for (const [sublayerName, template] of LAYER_TEMPLATES) {

        const fullLayerName = `takamatsu/${layer}/${sublayerName}`;

        const mapLayer = map.getLayer(fullLayerName);

        let color = AREA_COLORS[layer] || { Polygon: "#000000", Point: "#000000", LineString: "#000000"}

        for (const subtemplate of template(color)) {
          if (!mapLayer && isSelected) {
            map.addLayer({
              ...subtemplate,
              filter: ["all", ["==", "$type", sublayerName], ["==", "class", layer]],
              id: fullLayerName + subtemplate.id,
            });
          } else if (mapLayer && !isSelected) {
            map.removeLayer(fullLayerName + subtemplate.id);
          }
        }
      }
    }
  }, [map, catalogData, selectedLayers]);

  return (
    <div
      className='map'
      ref={mapContainer}
      data-lang="ja"
      data-navigation-control="on"
      data-gesture-handling="off"
    ></div>
  );
}

export default MainMap;
