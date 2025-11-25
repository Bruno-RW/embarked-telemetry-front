export type LocationType = {
    id: string;

    latitude?: number;
    longitude?: number;
    altitude?: number;

    hdop?: number;
    satellites?: number;

    date_time?: string;
}