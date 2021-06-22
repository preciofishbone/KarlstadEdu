import { Store } from '@omnia/fx/stores';
import { Injectable, Inject } from '@omnia/fx';
import { InstanceLifetimes } from '@omnia/fx-models';
import { SolveigItem } from '../model/SolveigItem';
import { SolveigService } from '../services/SolveigService';

@Injectable({
    onStartup: (storeType) => { Store.register(storeType, InstanceLifetimes.Scoped) }
})
export class SolveigStore extends Store
{
    @Inject(SolveigService) service : SolveigService
        
    private testState = this.state<string>("Inital value");

    public solveigItems = this.state<Array<SolveigItem>>([])
   
    constructor()
    {
        super({
            id: "f2937c2d-f5f1-4741-90de-47e166df813b"
        });
    }

    onActivated()
    {
        //Called when the store gets created and ready to use
    }

    onDisposing()
    {
        //Called when the store is disposed, do some cleanup here
    }

    /**
    * Implementation of getters
    */
    getters = {
        globalSettings: () => {
            return this.testState;
        },
        allItems: ()=>{
            return this.solveigItems.state;
        }
    }

    /**
     * Implementation of mutations
     */
    mutations = {
        update: (newState: string) => {
            this.testState.mutate(newState);
        }
    }
    /**
     * Implementation of actions
     */
    actions = {
        loadSomething: this.action(() => {
            return new Promise<null>((resolve, reject) => {
                //TODO: Do some promise based operations like fething from web api
                Promise.resolve("Updated value");
            });
        }),

        loadSampleData : this.action(()=>{
            return new Promise<null>(async (resolve,reject)=>{                
                let result = await this.service.search("sharepoint");                    
                this.solveigItems.mutate((stateRef) =>{

                    stateRef.state = result;
                })
                resolve(null);
            });
        })
    }

}

