import type { Campaign } from "~/shared/types/campaign";
import type { Filters } from "~/shared/types/filters";

function _fetch(url: string, params: Record<string, string> = {}) {
  return $fetch(`/api/${url}`, {
    params,
  });
}

export async function getAllCampaigns(filters?: Filters): Promise<Campaign[]> {
  return _fetch("campaigns", filters);
}

export async function getCampaign(id: string | number): Promise<Campaign> {
  return _fetch(`campaigns/${id}`);
}
