const BACKEND_URL = "http://localhost:8000";
const API_V1_PREFIX = "/api/v1";

export const BACKEND_API_URL = `${BACKEND_URL}${API_V1_PREFIX}`;

export const ADDRESS_API_URL = `${BACKEND_API_URL}/address`;
export const LOCATION_API_URL = `${BACKEND_API_URL}/location`;
export const TELEMETRY_API_URL = `${BACKEND_API_URL}/telemetry`;