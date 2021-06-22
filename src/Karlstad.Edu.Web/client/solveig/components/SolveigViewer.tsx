import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper,Inject } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { SolveigViewerStyles } from './SolveigViewer.css';
import { SolveigViewerBlockSettings } from './SolveigViewerSettings';
import { SolveigService } from '../services/SolveigService';

@Component
export default class SolveigViewer extends VueComponentBase implements IWebComponentInstance {
    
    @Inject(SolveigService) service : SolveigService

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

    async onSearch(){
        let result = await this.service.search(this.searchText);
        debugger;

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
                        

            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, SolveigViewer);
});