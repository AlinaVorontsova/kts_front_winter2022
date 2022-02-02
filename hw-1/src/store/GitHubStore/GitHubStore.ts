import ApiStore from '../../shared/store/ApiStore';
import { RequestParams, HTTPMethod } from '../../shared/store/ApiStore/types';
import { IGitHubStore, ApiResp, RepoItem, GetOrganizationReposListParams } from "./types";

export default class GitHubStore implements IGitHubStore {
    private readonly apiStore = new ApiStore("https://api.github.com/");


    async getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {

        let req: RequestParams<object> = {
            method: HTTPMethod.GET,
            endpoint: `orgs/${params.organizationName}/repos`,
            headers: {
                accept: "application/vnd.github.v3+json"
            },
            data: {
                type: params.type,
                sort: params.sort,
                direction: params.direction,
                per_page: params.per_page,
                page: params.page
            }
        }

        let result = await this.apiStore.request<RepoItem[]>(req)

        return {
            success: result.success,
            orgs: result.data
        }


    }

     async postOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {

        let req: RequestParams<object> = {
            method: HTTPMethod.POST,
            endpoint: `orgs/${params.organizationName}/repos`,
            headers: {
                accept: "application/vnd.github.v3+json"
            },
            data: {
                type: params.type,
                sort: params.sort,
                direction: params.direction,
                per_page: params.per_page,
                page: params.page
            },

        }

        let result = await this.apiStore.request<RepoItem[]>(req)

        return {
            success: result.success,
            orgs: result.data
        }


    }
}