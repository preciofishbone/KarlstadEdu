import { HttpClient, HttpClientConstructor, Inject, Injectable, } from "@omnia/fx";
import {AxiosResponse} from "axios";
import { InstanceLifetimes,IHttpApiOperationResult } from "@omnia/fx/models";

@Injectable({lifetime:InstanceLifetimes.Transient})
export class GraphService {
    @Inject<HttpClientConstructor>(HttpClient,{configPromise:HttpClient.createOmniaServiceRequestConfig('7433f149-a76b-4d30-9d14-503dc66d5de8')})
     private httpClient:HttpClient;
        
    constructor(){}

    async getMe(){
        return new Promise<string>(async (resolve,reject)=>{
            let result = await this.httpClient.get<string> ("/api/qraph/get");
            resolve(result.data);
        })
    }

}
