// Type definitions for topojson-client 3.1
// Project: https://github.com/topojson/topojson-client
// Definitions by: denisname <https://github.com/denisname>
//                 Ricardo Mello <https://github.com/ricmello>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

import * as GeoJSON from "geojson";
import {
    GeometryCollection,
    GeometryObject,
    LineString,
    MultiLineString,
    MultiPoint,
    MultiPolygon,
    Objects,
    Point,
    Polygon,
    Properties,
    Topology,
    Transform,
} from "topojson-specification";

export type Transformer = (point: number[], index?: boolean) => number[];

export function feature<P extends Properties = GeoJSON.GeoJsonProperties>(
    topology: Topology,
    object: Point<P> | string,
): GeoJSON.Feature<GeoJSON.Point, P>;
export function feature<P extends Properties = GeoJSON.GeoJsonProperties>(
    topology: Topology,
    object: MultiPoint<P> | string,
): GeoJSON.Feature<GeoJSON.MultiPoint, P>;
export function feature<P extends Properties = GeoJSON.GeoJsonProperties>(
    topology: Topology,
    object: LineString<P> | string,
): GeoJSON.Feature<GeoJSON.LineString, P>;
export function feature<P extends Properties = GeoJSON.GeoJsonProperties>(
    topology: Topology,
    object: MultiLineString<P> | string,
): GeoJSON.Feature<GeoJSON.MultiLineString, P>;
export function feature<P extends Properties = GeoJSON.GeoJsonProperties>(
    topology: Topology,
    object: Polygon<P> | string,
): GeoJSON.Feature<GeoJSON.Polygon, P>;
export function feature<P extends Properties = GeoJSON.GeoJsonProperties>(
    topology: Topology,
    object: MultiPolygon<P> | string,
): GeoJSON.Feature<GeoJSON.MultiPolygon, P>;
export function feature<P extends Properties = GeoJSON.GeoJsonProperties>(
    topology: Topology,
    object: GeometryCollection<P> | string,
): GeoJSON.FeatureCollection<GeoJSON.GeometryObject, P>;
export function feature<P extends Properties = GeoJSON.GeoJsonProperties>(
    topology: Topology,
    object: GeometryObject<P> | string,
): GeoJSON.Feature<GeoJSON.GeometryObject, P> | GeoJSON.FeatureCollection<GeoJSON.GeometryObject, P>;

export function merge(topology: Topology, objects: Array<Polygon | MultiPolygon>): GeoJSON.MultiPolygon;

export function mergeArcs(topology: Topology, objects: Array<Polygon | MultiPolygon>): MultiPolygon;

export function mesh(
    topology: Topology,
    obj?: GeometryObject,
    filter?: (a: GeometryObject, b: GeometryObject) => boolean,
): GeoJSON.MultiLineString;

export function meshArcs(
    topology: Topology,
    obj?: GeometryObject,
    filter?: (a: GeometryObject, b: GeometryObject) => boolean,
): MultiLineString;

export function neighbors(objects: GeometryObject[]): number[][];

export function bbox(topology: Topology): GeoJSON.BBox;

export function quantize<T extends Objects>(topology: Topology<T>, transform: Transform | number): Topology<T>;

export function transform(transform: Transform | null): Transformer;

export function untransform(transform: Transform | null): Transformer;
