import { handleShopRequest } from "@/lib/shopServer";

export const runtime = "nodejs";
export const maxDuration = 30;
export const POST = handleShopRequest;
