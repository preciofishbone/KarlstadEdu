import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper,Inject } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { SolveigViewerStyles } from './SolveigViewer.css';
import { SolveigViewerBlockSettings } from './SolveigViewerSettings';
import { SolveigService } from '../services/SolveigService';
import { SolveigStore } from '../store/SolveigStore';
import { SolveigItem } from '../model/SolveigItem';

@Component
export default class SolveigViewer extends VueComponentBase implements IWebComponentInstance {
    
    @Inject(SolveigStore) solveigStore : SolveigStore

    private SolveigViewerClasses = StyleFlow.use(SolveigViewerStyles);
    private searchText:string = "";    
    

    @BlockSettingsReader<SolveigViewerBlockSettings>({
        defaultValue: { title: 'my block title'},
        editElement: "klstd-solveig-viewer-settings"
    })
    protected settings: SolveigViewerBlockSettings;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    onSearch(){
        this.solveigStore.actions.loadSampleData.dispatch();
    }


    renderSolveigItem(h,item:SolveigItem){
        return (<v-card>
                    <v-card-text>
                        {item.name}
                    </v-card-text>
        </v-card>)
    }


    renderSolveigItems(h){
        let result:Array<JSX.Element> = []
        this.solveigStore.solveigItems.state.forEach(item => {
            result.push(this.renderSolveigItem(h,item));
        });
        return result;
    }


    render(h) {
        return (
            <div class={this.SolveigViewerClasses.container}>
                        <v-text-field
                                filled
                                v-model={this.searchText}
                                label='Search Text'>
                        </v-text-field>
                        <v-btn onClick={()=>this.onSearch()}>
                            Search
                        </v-btn>                       
                {this.renderSolveigItems(h)}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, SolveigViewer);
});