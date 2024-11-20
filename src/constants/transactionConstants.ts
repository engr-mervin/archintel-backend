import { ENV } from "config";

export const TRANSACTION_REFRESH_INTERVAL = ENV.NODE_ENV === "development" ? 0 : 30000; //5 minutes
export const TRANSACTION_QUERY_LIMIT = ENV.NODE_ENV === "development" ? 15 : undefined; //For presentation
