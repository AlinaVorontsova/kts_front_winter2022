// Параметры запроса

export type RepoItem = {
    id: number;
    name: string;
    html_url: string;
}

export type GetOrganizationReposListParams = {
    organizationName: string | undefined;
    per_page?: number;
    page?: number;
    direction?: string;
    sort?:string;
    type?:string;
};

export type ApiResp<T> = {
    success: boolean;
    orgs: T;
};

export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;
}

